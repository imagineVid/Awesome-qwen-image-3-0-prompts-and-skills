/**
 * [INPUT]: 依赖 data/repository.json、data/categories.json、data/prompts.json、data/locales.json 与 data/case-locales.json 的单一审核真源。
 * [OUTPUT]: 对外生成十四个语言版本的 Qwen Image 3.0 README，并保持提示词、媒体、链接与来源一致。
 * [POS]: scripts 的确定性发布器，将结构化案例投影为 GitHub 可直接阅读的多语言文档。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

import fs from "node:fs";

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const repository = readJson("data/repository.json");
const categories = readJson("data/categories.json");
const prompts = readJson("data/prompts.json");
const locales = readJson("data/locales.json");
const caseLocales = readJson("data/case-locales.json");
const repoUrl = `https://github.com/imagineVid/${repository.repo}`;

const languageNav = (current) => Object.entries(locales)
  .map(([code, locale]) => {
    const label = code === current ? `**${locale.name}**` : locale.name;
    return `[${label}](${locale.file})`;
  })
  .join(" · ");

const productUrl = (code) => code === "en"
  ? repository.product
  : `https://imaginevid.io/${code}/ai-image-generator`;

const mediaTable = (prompt, displayTitle) => {
  const width = Math.floor(100 / prompt.sourceMedia.length);
  const cells = prompt.sourceMedia
    .map((url) => `<td width="${width}%"><img src="${url}" width="100%" alt="${displayTitle}"></td>`)
    .join("\n");
  return `<table><tr>\n${cells}\n</tr></table>`;
};

const render = (code, locale) => {
  const lines = [
    `<a href="${repoUrl}"><img src="public/images/${repository.cover}" width="100%" alt="Qwen Image 3.0 prompts and production skills"></a>`,
    "",
    "# Awesome Qwen Image 3.0 Prompts & Skills",
    "",
    `> ${locale.tagline}`,
    "",
    `[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/imagineVid/${repository.repo}?style=social)](${repoUrl})`,
    "",
    languageNav(code),
    "",
    "---",
    "",
    `## ${locale.contents}`,
    "",
    `- [${locale.modelGuide}](#model-guide)`,
    `- [${locale.workflows}](#workflow-index)`,
    `- [${locale.cases}](#verified-showcase-cases)`,
    `- [${locale.contribute}](#contribute)`,
    `- [${locale.license}](#license-and-attribution)`,
    "",
    '<a id="model-guide"></a>',
    "",
    `## ${locale.modelGuide}`,
    "",
    locale.intro,
    "",
    `> ${locale.promptNote}`,
    "",
    `### ${locale.tests}`,
    "",
    ...locale.capabilities.map((capability) => `- ${capability}`),
    "",
    `### ${locale.research}`,
    "",
    `- [Qwen Image 3.0 official launch](${repository.officialSources[0]})`,
    `- [Qwen image creation workspace](${repository.officialSources[1]})`,
    "",
    `**[${locale.open}](${productUrl(code)})**`,
    "",
    '<a id="workflow-index"></a>',
    "",
    `## ${locale.workflows}`,
    "",
    ...locale.categories.map((category) => `- **${category}**`),
    "",
    '<a id="verified-showcase-cases"></a>',
    "",
    `## ${locale.cases}`,
    "",
    `| ${locale.status} | ${prompts.length} ${locale.count} |`,
    "|---|---:|",
    `| ${locale.generated} | 2026-07-21 |`,
    "",
  ];

  for (const prompt of prompts) {
    const localizedCase = code === "en" ? prompt : caseLocales[code][String(prompt.id)];
    const categoryId = prompt.imageCategories.workflows[0].id;
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);
    lines.push(
      `### ${prompt.id}. ${localizedCase.title}`,
      "",
      localizedCase.description,
      "",
      `#### ${locale.prompt}`,
      "",
      "```text",
      prompt.content,
      "```",
      "",
      mediaTable(prompt, localizedCase.title),
      "",
      `#### ${locale.evidence}`,
      "",
      `- **${locale.creator}:** [${prompt.author.name}](${prompt.author.link})`,
      `- **${locale.source}:** [Qwen Image 3.0](${prompt.sourceLink})`,
      `- **${locale.published}:** ${prompt.sourcePublishedAt.slice(0, 10)}`,
      `- **${locale.category}:** ${locale.categories[categoryIndex]}`,
      `- **${locale.reference}:** ${prompt.needReferenceImages ? locale.yes : locale.no}`,
      "",
      `**[${locale.use}](${productUrl(code)})**`,
      "",
      "---",
      "",
    );
  }

  lines.push(
    '<a id="contribute"></a>',
    "",
    `## ${locale.contribute}`,
    "",
    locale.contributeText,
    "",
    `[${locale.submit}](${repoUrl}/issues/new?template=submit-prompt.yml)`,
    "",
    '<a id="license-and-attribution"></a>',
    "",
    `## ${locale.license}`,
    "",
    locale.licenseText,
    "",
    locale.curated,
    "",
  );

  return lines.join("\n");
};

for (const [code, locale] of Object.entries(locales)) {
  fs.writeFileSync(locale.file, render(code, locale));
}

console.log(`Generated ${Object.keys(locales).length} localized README files from ${prompts.length} verified cases.`);
