/**
 * [INPUT]: 依赖 Qwen Image 3.0 仓库配置、案例、分类、本地化数据、本地案例媒体与生成后的 README 文件。
 * [OUTPUT]: 对外提供身份、重复、来源、远程或本地媒体完整性、多语言、继承残留与产品链接的失败门禁。
 * [POS]: scripts 的质量守门器，阻止模板遗留、无证据案例或不完整发布物进入主分支。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

import fs from "node:fs";

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const repository = readJson("data/repository.json");
const prompts = readJson("data/prompts.json");
const categories = readJson("data/categories.json");
const locales = readJson("data/locales.json");
const caseLocales = readJson("data/case-locales.json");
const ids = new Set();
const cases = new Set();
const bodies = new Set();
const media = new Set();

if (repository.model !== "Qwen Image 3.0") throw new Error("Unexpected repository model");
if (prompts.length < 12 || categories.length !== 5) throw new Error("Collection is incomplete");
if (Object.keys(locales).length !== 14) throw new Error("Locale coverage is incomplete");
if (Object.keys(caseLocales).length !== 13) throw new Error("Case localization coverage is incomplete");

for (const prompt of prompts) {
  if (prompt.model !== repository.model) throw new Error(`Wrong model on prompt ${prompt.id}`);
  if (ids.has(prompt.id)) throw new Error(`Duplicate id ${prompt.id}`);
  ids.add(prompt.id);

  const caseId = prompt.sourceMeta?.case_id;
  if (!caseId || prompt.sourceMeta?.source !== "qwen-image-3-official-launch") {
    throw new Error(`Missing first-party provenance ${prompt.id}`);
  }
  if (cases.has(caseId)) throw new Error(`Duplicate official case ${caseId}`);
  cases.add(caseId);

  const body = prompt.content.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (body.length < 300) throw new Error(`Prompt too short ${prompt.id}`);
  if (bodies.has(body)) throw new Error(`Duplicate prompt ${prompt.id}`);
  bodies.add(body);

  if (prompt.sourceLink !== repository.officialSources[0]) throw new Error(`Noncanonical source ${prompt.id}`);
  if (!prompt.sourceMedia?.length) throw new Error(`Missing result media ${prompt.id}`);
  for (const url of prompt.sourceMedia) {
    const isOfficialRemote = url.startsWith("https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/");
    const isLocalOfficialCopy = url.startsWith("public/images/qwen-") && fs.existsSync(url);
    if (!isOfficialRemote && !isLocalOfficialCopy) {
      throw new Error(`Unexpected media host ${prompt.id}`);
    }
    if (media.has(url)) throw new Error(`Duplicate media ${url}`);
    media.add(url);
  }

  const workflow = prompt.imageCategories?.workflows?.[0];
  if (!categories.some((category) => category.id === workflow?.id)) throw new Error(`Unknown workflow ${prompt.id}`);
}

const inherited = /SenseNova|Nano Banana|Gemini Omni|Seedance|Grok Imagine|Kling 3\.0|Muse Image/i;
for (const [code, locale] of Object.entries(locales)) {
  if (!fs.existsSync(locale.file)) throw new Error(`Missing localized README ${code}`);
  if (locale.capabilities?.length !== 4 || locale.categories?.length !== 5) throw new Error(`Incomplete locale ${code}`);
  const text = fs.readFileSync(locale.file, "utf8");
  if (inherited.test(text)) throw new Error(`Inherited model copy in ${locale.file}`);
  if (!text.includes(repository.cover) || !text.includes("Qwen Image 3.0")) throw new Error(`Wrong repository identity in ${locale.file}`);
  if (!text.includes("imaginevid.io") || text.includes("qwen.ai/?inputFeature=t2i)**")) throw new Error(`Invalid product CTA in ${locale.file}`);
  for (const prompt of prompts) {
    const localizedCase = code === "en" ? prompt : caseLocales[code]?.[String(prompt.id)];
    if (!localizedCase?.title || !localizedCase?.description) throw new Error(`Missing case localization ${code}/${prompt.id}`);
    if (!text.includes(`### ${prompt.id}. ${localizedCase.title}`) || !text.includes(localizedCase.description) || !text.includes(prompt.content)) {
      throw new Error(`${locale.file} is missing prompt ${prompt.id}`);
    }
  }
}

console.log(`Validated ${prompts.length} unique first-party cases, ${categories.length} workflows, and ${Object.keys(locales).length} localized READMEs.`);
