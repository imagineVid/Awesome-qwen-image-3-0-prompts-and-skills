<a href="https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills"><img src="public/images/qwen-image-3-0-cover.png" width="100%" alt="Qwen Image 3.0 prompts and production skills"></a>

# Awesome Qwen Image 3.0 Prompts & Skills

> 将 Qwen Image 3.0 官方案例概念重构为可复用的英文生产提示词，并保留可核验素材与清晰署名。

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills)

[English](README.md) · [**简体中文**](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md)

---

## 目录

- [模型指南](#model-guide)
- [工作流索引](#workflow-index)
- [已核验的官方案例](#verified-showcase-cases)
- [参与贡献](#contribute)
- [许可与署名](#license-and-attribution)

<a id="model-guide"></a>

## 模型指南

Qwen Image 3.0 是 Qwen 团队推出的第三代图像生成与编辑模型。官方发布将其能力概括为内容丰富、细节真实与知识厚实，并宣称支持最长 4.5K token 指令、清晰呈现最小 10 像素文字、原生渲染 12 种语言、100 多种艺术风格、复杂界面与参考图编辑。本合集把发布日展示概念重构为完整英文生产提示词，同时将这些能力明确标注为官方主张，而非独立基准结论。

> 提示词正文统一保留英文标准版，确保所有语言页面指向同一份可复现内容。

### 本合集重点测试

- 高密度多版块出版物与长结构化指令
- 小字号、公式、批注与多语言排版
- 皮肤、毛发、纸张、织物与材料的写实质感
- 参考图编辑、修复、界面模拟与知识图解

### 调研依据

- [Qwen Image 3.0 official launch](https://qwen.ai/blog?id=qwen-image-3.0)
- [Qwen image creation workspace](https://chat.qwen.ai/?inputFeature=t2i)

**[在 ImagineVid 中创建图像](https://imaginevid.io/zh/ai-image-generator)**

<a id="workflow-index"></a>

## 工作流索引

- **长篇信息设计**
- **排版与出版**
- **界面与世界知识**
- **写实摄影与材质细节**
- **参考图编辑与修复**

<a id="verified-showcase-cases"></a>

## 已核验的官方案例

| 合集状态 | 19 个已核验案例 |
|---|---:|
| 最近生成 | 2026-07-21 |

### 1. 一次生成九个知识领域图谱

在单一画布上检验长指令理解、语义隔离、公式图解与中英双语小字可读性的 3×3 教育图谱。

#### 提示词

```text
Create one landscape 3x3 educational knowledge atlas titled "NINE WAYS TO EXPLAIN A COMPLEX WORLD." Every cell must be a complete mini-infographic with its own visual language while remaining part of one coherent publication.

Row one: a tunnel-safety comic with numbered emergency actions; a spatial-geometry lesson explaining a plane intersecting a cube; and a literary analysis of the classical memorial Chu Shi Biao with a restrained calligraphy excerpt and rhetorical map. Row two: projectile-motion physics with a trajectory graph and equations; a parasitology life-cycle explainer; and a clinical decision diagram for right-side chest pain with clearly marked non-diagnostic educational language. Row three: an introduction to the Sylow theorems; a bank internal-control process map; and a comparison of prokaryotic and eukaryotic DNA organization.

Use exact section boundaries, consistent outer margins, clear titles, concise English labels with selected Chinese terms where useful, correct mathematical notation, and distinct color coding for each discipline. Preserve small-text readability, avoid repeated icons and pseudo-text, and make the entire atlas look like one premium educational supplement rather than nine unrelated cards. 16:9, print-sharp detail.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update2.png" width="100%" alt="一次生成九个知识领域图谱"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 长篇信息设计
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 2. 层层嵌套的软件界面

在不破坏层级关系的前提下，将四层可辨识工作界面组织成一张连续的画中画构图。

#### 提示词

```text
Create a realistic desktop screenshot built as four nested interfaces, each visibly contained inside the previous one. The outer layer is a dark VS Code workspace with a clean project tree, open TypeScript file, terminal, and status bar. Inside its editor preview, show a Qwen chat interface answering a design question. Inside that answer, embed a mobile WeChat conversation sharing a coffee recipe. Inside the shared message, display a polished pour-over coffee poster with a brewer diagram, a 1:16 ratio, water temperature, and a four-step pouring timeline.

The nesting must read instantly from outer to inner: code editor, AI chat, messaging app, poster. Preserve realistic window chrome, spacing, typography scale, cursor states, and device proportions. Use concise, fully legible English interface copy; do not imitate private user data or real account names. Avoid impossible window overlaps, repeated controls, gibberish code, excessive reflections, and generic sci-fi dashboards. 16:9 desktop composition, neutral studio clarity.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/3fa25ce8ca621bc3642b431d6724ecc3.png" width="100%" alt="层层嵌套的软件界面"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 界面与世界知识
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 3. 鲸鲨研究图鉴

在清晰信息层级中整合解剖、迁徙、比例、食性与保护知识的高密度海洋生物图解。

#### 提示词

```text
Design a tall scientific field guide titled "WHALE SHARK: THE OCEAN'S GENTLE GIANT." Place an anatomically accurate whale shark as the central specimen and organize the supporting information around it in a disciplined museum-publication grid.

Include a dorsal and side silhouette, labeled external anatomy, spot-pattern identification, filter-feeding mechanism, human scale comparison, global warm-water range map, seasonal migration path, life-stage timeline, and a compact conservation section. Use concise English labels and clearly separate established facts from uncertain estimates. Add a small panel explaining how researchers use photographic spot matching, plus a measurement strip for length and mouth width.

Style: contemporary natural-history illustration with deep ocean blue, muted cyan, warm white, and restrained coral accents. Mix precise ink diagrams with realistic underwater texture. Keep all small labels crisp, use consistent leader lines, and avoid fantasy anatomy, sensational claims, decorative bubbles, fake citations, or duplicated fish. 2:3 portrait, publication-ready.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/whale.jpg" width="100%" alt="鲸鲨研究图鉴"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 长篇信息设计
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 4. 精确排版的代数几何论文

针对数学结构、类 LaTeX 符号、定理层级与小字号可读性的出版级压力测试。

#### 提示词

```text
Create one realistic A4 page from a peer-reviewed algebraic geometry paper titled "Derived Intersections on Singular Moduli Spaces." Use a restrained academic journal template with author line, abstract, numbered section heading, theorem, proof, one commutative diagram, and a short bibliography fragment.

The page must contain coherent mathematical notation rather than decorative symbols: superscripts and subscripts, fractions, direct sums, sheaf notation, morphism arrows, aligned multi-line equations, braces, Greek letters, and equation numbers. Set a clearly distinguished "Theorem 2.3" followed by a short proof with logically consistent notation. Include one square commutative diagram whose arrows and object labels align correctly.

Render as black ink on slightly warm archival paper with subtle print texture and no handwriting. Maintain professional margins, baseline rhythm, serif body text, monospaced operator names where appropriate, and sharp small type. Do not invent institutional logos, fake DOI numbers, malformed equations, random glyphs, or ornamental science imagery.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/cca131fe-4ba1-409e-9da0-2358ee2bbb41.png" width="100%" alt="精确排版的代数几何论文"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 排版与出版
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 5. 周日报纸头版

协调长篇正文、照片、分栏、图注与真实纸张质感的实体出版构图。

#### 提示词

```text
Generate a photorealistic broadsheet newspaper front page named "THE HARBOR REVIEW" dated Sunday, July 19, 2026. The lead story is "A CITY LEARNS TO LIVE WITH WATER" and examines flood-resilient public space through one large documentary photograph, a concise standfirst, and a five-column article opening.

Add three secondary stories: a regional rail map redesign, a profile of a neighborhood instrument maker, and a science brief about kelp-forest recovery. Include a narrow weather strip, issue price, page references, bylines, captions, and one restrained data graphic. Use editorially plausible but fictional copy; no real newspaper mastheads or fabricated quotes attributed to real people.

The newspaper should lie naturally on a wooden cafe table with a slight fold, subtle ink variation, fine paper fibers, and soft morning window light. Preserve a strict typographic hierarchy, aligned columns, readable headlines and captions, and realistic print density. Avoid lorem ipsum, duplicated paragraphs, warped page edges, glossy magazine stock, or sensational tabloid styling.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update5.png" width="100%" alt="周日报纸头版"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 排版与出版
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 6. 自然的手写学习批注

在完整保留原页面、印刷文字、光线与透视的同时加入可信学生笔记的参考图编辑。

#### 提示词

```text
Using the supplied photograph of an open textbook page as the only structural reference, add realistic red-ink study annotations without changing the printed page. Underline two key sentences, circle three important terms, add one wavy emphasis line, draw two short arrows linking a definition to its example, and write four concise handwritten comments in the margins: "review this", "key distinction", "exam example", and "connect to chapter 4".

The handwriting should look like one careful high-school student's natural pen work: consistent pressure, slight variation in slant, small corrections, and marks that follow the page perspective. Preserve every printed word, diagram, page edge, shadow, paper texture, camera angle, and background object exactly. Do not cover important content, regenerate the book, straighten the photograph, change the lighting, add highlighter, or introduce digital-looking vector strokes.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update6.jpeg" width="100%" alt="自然的手写学习批注"></td>
<td width="50%"><img src="public/images/qwen-handwritten-annotations-result.png" width="100%" alt="自然的手写学习批注"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 参考图编辑与修复
- **需要参考图:** 是

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 7. 未经磨皮的窗边人像

聚焦自然毛孔、细小毛发、湿润眼神、克制色调与真实光学表现的编辑人像。

#### 提示词

```text
Create an intimate editorial head-and-shoulders portrait of a fictional adult woman standing beside a north-facing apartment window after light rain. Frame her slightly off-center at eye level with an 85mm full-frame lens look and shallow but not extreme depth of field.

Show honest skin texture: visible pores, fine facial hair, subtle under-eye variation, tiny freckles, a faint healed blemish, and natural lip texture. A few damp strands of dark hair should cross the forehead and catch the window light. Keep both irises detailed and moist without glassy over-sharpening. Wardrobe is a simple charcoal cotton shirt; background is a quiet soft-gray interior with one out-of-focus plant.

Use soft directional daylight, restrained neutral color, realistic dynamic range, and documentary magazine finishing. No beauty retouching, skin smoothing, makeup-ad gloss, waxy highlights, excessive bokeh, jewelry, text, visible brand marks, or impossible eyelashes. The subject must be fictional and not resemble a known person. 4:5 portrait.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/people31_seed9999.png" width="100%" alt="未经磨皮的窗边人像"></td>
<td width="50%"><img src="public/images/qwen-window-light-portrait-detail.png" width="100%" alt="未经磨皮的窗边人像"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 写实摄影与材质细节
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 8. 水墨鹰图的保护性修复

在保留年代感、构图与笔墨节奏的基础上重建缺损纸张和画面内容。

#### 提示词

```text
Restore the supplied damaged Chinese ink painting of eagles in combat as a museum-conservation visualization. Reconstruct only the missing or mold-damaged regions by continuing the nearest original brushwork, paper tone, ink density, feather structure, branch rhythm, and negative-space composition.

The repaired eagle anatomy must remain consistent with the surviving head, wings, talons, and motion. Continue dry-brush feather edges where visible, use soft ink wash for atmospheric depth, and preserve the original balance between black ink, diluted gray, and untouched paper. Remove isolated mold spots and tears only where they interrupt the image; retain believable age, paper fibers, mild tonal variation, and all undamaged marks.

Do not modernize the painting, increase global contrast, add a new signature or seal, invent scenery, crop the sheet, alter the composition, erase all patina, or turn the repair into smooth digital illustration. Output the restored full sheet photographed flat under neutral conservation lighting.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/0d876cb1-4ed6-4950-9f5c-e5aae886e4e5.png" width="100%" alt="水墨鹰图的保护性修复"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/ab2969ca-90dc-48a8-ae6b-4ef7f01c56a3.png" width="100%" alt="水墨鹰图的保护性修复"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 参考图编辑与修复
- **需要参考图:** 是

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 9. 三语言文化海报系列

在保持统一活动识别的同时，检验日语、韩语与西班牙语原生排版的系列设计。

#### 提示词

```text
Design a coordinated series of three vertical cultural posters for one fictional international night market. Each poster uses the same event facts but is art-directed for its language and city context.

Poster one, Japanese: title "夜の市場", subtitle "食・音楽・手仕事", date "2026年9月12日", location "港区文化広場". Use disciplined contemporary Japanese editorial typography with indigo, vermilion, and warm paper. Poster two, Korean: title "밤의 시장", subtitle "음식 · 음악 · 공예", date "2026년 9월 12일", location "문화광장". Use clear Hangul hierarchy with black, cobalt, and soft mint. Poster three, Spanish: title "MERCADO NOCTURNO", subtitle "Comida · Música · Oficios", date "12 de septiembre de 2026", location "Plaza de la Cultura". Use expressive modernist typography with coral, black, and pale yellow.

Keep all required text exact and readable, preserve shared event identity through one small geometric symbol and consistent information order, and avoid mixing scripts, fake glyphs, tourism clichés, national flags, or translated copy leaking between posters.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/iwEdAqNwbmcDAQTRBoAF0QnABrDQDrHWHy7VXwoxvRc_1ZIAB9MAAAABHxSFlwgACaJpbQoAC9IABSUu.png" width="100%" alt="三语言文化海报系列"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/mlp.png" width="100%" alt="三语言文化海报系列"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 排版与出版
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 10. 直播电商导播控制台

在同一系统中合理组织视频、商品、审核、库存和绩效数据的真实生产界面。

#### 提示词

```text
Create a high-fidelity desktop interface for a fictional live-commerce production suite named "Northstar Live". The central area shows a 16:9 livestream preview of a presenter demonstrating a compact espresso machine in a bright studio. Surround it with production controls that follow a real operator's hierarchy rather than a generic dashboard.

Left rail: scene list, camera sources, lower thirds, product overlays, and media bin. Right panel: active product card with price, inventory, pinned offer, moderation queue, and compact live chat. Bottom timeline: microphone and music meters, cue markers, clip replay, and stream-health indicators. Top bar: elapsed time, viewer count, connection status, record state, and an emergency stop control separated from routine actions. Include a small performance panel for conversion, click-through, and stock velocity using plausible fictional data.

Use neutral light-gray surfaces, sharp black type, blue operational states, amber warnings, and red only for destructive or live states. Keep all labels legible and consistent. Avoid copied platform branding, impossible analytics, excessive rounded cards, dark cyberpunk styling, random charts, or decorative controls without function.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/image%20-%202026-07-21T003739.706.png" width="100%" alt="直播电商导播控制台"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/image%20-%202026-07-21T003745.645.png" width="100%" alt="直播电商导播控制台"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 界面与世界知识
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 11. 将昆虫照片转为研究图版

保留原标本并补充分类结构、解剖标注、放大细节和比例信息的科学编辑。

#### 提示词

```text
Transform the supplied macro photograph of an insect into a publication-ready entomology plate while preserving the exact specimen, pose, camera angle, body proportions, colors, lighting, and background relationship.

Keep the original photograph as the dominant central panel. Add a clean taxonomic header with placeholders clearly marked for expert verification: "Order: [VERIFY]", "Family: [VERIFY]", "Genus: [VERIFY]". Create three magnified inset views derived from the same specimen: antenna structure, wing venation, and leg articulation. Add fine leader lines labeling head, compound eye, antenna, thorax, forewing, hindwing, abdomen, femur, tibia, and tarsus. Include a calibrated-looking scale bar labeled "Scale bar: verify against capture metadata" rather than inventing a measurement.

Use a warm-white scientific-journal background, graphite rules, restrained forest-green accents, exact alignment, and compact readable type. Do not change the insect, hallucinate hidden anatomy, assign an unverified species, add decorative leaves, or turn the plate into a children's poster.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/c8fef88f-9379-4826-9860-af1b4d2f6f00.png" width="100%" alt="将昆虫照片转为研究图版"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update4.png" width="100%" alt="将昆虫照片转为研究图版"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 参考图编辑与修复
- **需要参考图:** 是

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 12. 跨时代艺术史直播间

把历史视觉知识、现代界面和明确的虚构说明结合起来的教育广播场景。

#### 提示词

```text
Create a fictional educational livestream titled "BRUSHWORK ACROSS WORLDS" in which respectful illustrated representations of Qi Baishi and Vincent van Gogh discuss how artists build motion with marks. Frame the scene as an art-history interpretation, not a real event or endorsement.

The two artists sit at a split studio table: the left side uses rice paper, ink stone, shrimp studies, and open negative space; the right side uses thick oil paint, reed pens, a night-sky color study, and visible impasto samples. Between them, place a neutral display comparing four concepts: line economy, directional stroke, color rhythm, and the role of empty space. The livestream interface should include a clear "FICTIONAL EDUCATIONAL RECREATION" label, chapter markers, translated captions, and a small source-notes panel without fabricated quotations.

Use museum-quality editorial illustration rather than photoreal impersonation. Preserve period-appropriate clothing and tools, balanced representation, readable English labels, and a calm educational tone. Avoid meme styling, commercial product promotion, false direct quotes, copied platform branding, or claims that the historical artists used modern technology.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/case_06.png" width="100%" alt="跨时代艺术史直播间"></td>
</tr></table>

#### 来源证据

- **创作者:** [Qwen Team](https://qwen.ai/)
- **官方展示:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **发布时间:** 2026-07-21
- **分类:** 界面与世界知识
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 13. 带精准日文对白的双格黑白漫画

基于社区实测的制作级重构，用于检验分格连续性、克制的漫画笔触、竖排日文与对白准确度。

#### 提示词

```text
Create a finished black-and-white manga page titled "目次だけの夜" using two wide horizontal panels stacked vertically. The characters are fictional adult online creators and must not resemble real people or copyrighted characters.

Top panel: over-the-shoulder view of a dark-haired creator wearing cat-ear headphones and a track jacket, seated in a dim bedroom and facing a monitor. On the monitor, a pale-haired creator appears in a sparse video-call frame. Add exactly two vertical speech bubbles: the person on the monitor says "……ごめん" and the seated person says "昨日の配信の話しよ".

Bottom panel: closer three-quarter view of the pale-haired creator wearing large headphones and a light hoodie, softly holding a thin translucent booklet. Only a table of contents is visible; the other pages contain no readable body text. Faint particles of light dissolve from the pages. The dark-haired creator appears only as a tiny chibi silhouette at the lower-left edge with dot eyes. Add exactly three vertical speech bubbles: "あらすじしか残ってないんだ", "日記の目次だけ持ってるみたいな", and the chibi reply "……ワロタ".

Use clean seinen-manga linework, natural gray screentone, controlled white space, consistent clothing and headphone design across both panels, clear right-to-left reading order, and crisp natural Japanese lettering. Keep every quoted string exact. No color, no extra bubbles, no garbled glyphs, no logos, no watermarks, and no additional characters. 3:2 landscape page.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HNv679EbwAAW6Ou.jpg" width="100%" alt="带精准日文对白的双格黑白漫画"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HNv68WbaEAAKITj.jpg" width="100%" alt="带精准日文对白的双格黑白漫画"></td>
</tr></table>

#### 来源证据

- **创作者:** [Yasun](https://x.com/yasun_ai)
- **官方展示:** [Qwen Image 3.0](https://x.com/yasun_ai/status/2079531572919996636)
- **发布时间:** 2026-07-21
- **分类:** 排版与出版
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 14. 向唯一光束上浮的水下人物

基于社区成片重构的制作提示词，聚焦水下布料、可信人体、颗粒纵深、负空间与大量伸出的手。

#### 提示词

```text
Create a vertical cinematic underwater photograph of a fictional adult woman suspended in deep dark-blue water. She wears a translucent layered white dress that drifts naturally around her body. Her long black hair fans sideways with the current. Position her in the lower-middle of the frame, looking upward and extending one arm toward a narrow shaft of white light descending from the surface. From the darkness below, many pale hands reach upward without touching her; vary their scale and focus to create depth while keeping every hand anatomically plausible. Fine bubbles and particles catch the overhead light. Use cold cyan highlights, deep navy negative space, realistic water attenuation, restrained contrast, and a quiet surreal mood. Full-body vertical composition, no gore, no extra limbs on the main subject, no text, no logos, no watermark.
```

<table><tr>
<td width="100%"><img src="https://pbs.twimg.com/media/HN0jqoUaQAAfC8i.jpg" width="100%" alt="向唯一光束上浮的水下人物"></td>
</tr></table>

#### 来源证据

- **创作者:** [Zidan](https://x.com/liluocheng13)
- **官方展示:** [Qwen Image 3.0](https://x.com/liluocheng13/status/2079857838676209967)
- **发布时间:** 2026-07-22
- **分类:** 写实摄影与材质细节
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 15. 嵌套代码编辑器与聊天海报流程

用于检验可读界面文字、画面纵深与聊天工作区内海报生成能力的分层 UI 构图提示词。

#### 提示词

```text
Create a layered picture-in-picture interface scene with strong visual depth. The outer layer is a realistic VS Code programming workspace on a desktop monitor. Inside that workspace, show a Qwen-style chat application window where the user is sending the message: "Create a hand-brewed coffee poster." The assistant reply contains a polished coffee poster, and the poster remains clearly visible inside the chat window.

Keep every layer visually distinct: code editor chrome, chat sidebar, message bubbles, poster frame, toolbar buttons, timestamps, and small UI labels. Make the micro-text crisp enough to read, avoid distorted pseudo-letters, preserve realistic spacing, and use clean modern interface lighting. The coffee poster should feel like a premium specialty-cafe campaign with warm paper texture, elegant typography, roasted-bean details, and a clear headline. 16:9, high-resolution, sharp layout.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HN-ydubbcAAPs_n.png" width="100%" alt="嵌套代码编辑器与聊天海报流程"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HN-yelfakAAjQN9.png" width="100%" alt="嵌套代码编辑器与聊天海报流程"></td>
</tr></table>

#### 来源证据

- **创作者:** [比特小师妹｜KiKi](https://x.com/bit_sister)
- **官方展示:** [Qwen Image 3.0](https://x.com/bit_sister/status/2080577815376957798)
- **发布时间:** 2026-07-24
- **分类:** 写实摄影与材质细节
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 17. 复古 coquette 参考人像特写

聚焦身份保留、真实皮肤纹理、旧玫瑰色造型与近景编辑构图的参考图人像提示词。

#### 提示词

```text
Use the attached image as the main facial reference while preserving recognizable identity, natural facial proportions, facial harmony, realistic skin texture, visible pores, and subtle natural asymmetry.

Create a premium extreme close-up studio beauty portrait using a dreamy vintage coquette rendering style, translated into a richer old-rose editorial palette. Frame tightly from the upper shoulders upward. Use soft diffused key light, pearl highlights, muted rose makeup, delicate lace or satin styling, shallow depth of field, and refined film-grain texture. Keep the expression calm and natural, preserve believable eyes and hair detail, avoid over-smoothed skin, and make the result feel like a high-end magazine beauty cover rather than a plastic retouch. Square format, crisp detail.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HN5YtbNaYAAOIFV.jpg" width="100%" alt="复古 coquette 参考人像特写"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HN5Yum6bAAAIApb.jpg" width="100%" alt="复古 coquette 参考人像特写"></td>
</tr></table>

#### 来源证据

- **创作者:** [Rich · Atom Tan Studio](https://x.com/atomtanstudio)
- **官方展示:** [Qwen Image 3.0](https://x.com/atomtanstudio/status/2080197723429711958)
- **发布时间:** 2026-07-23
- **分类:** 写实摄影与材质细节
- **需要参考图:** 是

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 18. 叛逆摇滚明星身份编辑

以可复用指令和可核验结果媒体测试“叛逆摇滚明星身份编辑”的来源明确案例。

#### 提示词

```text
Candid photography. Use facial identity, facial geometry and make-up but not original hair from [uploaded image] to create a rebellious female rockstar with an hourglass figure. Her new hair is long, blonde and professionally styled with a side-parting. She wears a strapless black sequin pencil-dress and black leather high-heels with 3 tiers of straps upto her ankle. She sits on the edge of a messy, after-party hotel bed using a confident pose which exudes authority, leaning forward slightly, direct look of disdain at camera and one finger pressing on her lower lip. 8k photorealistic head-to-toe wide framing, natural light, sharp shadows, very detailed photo, vintage film grain and shallow depth of field. Ensure facial consistency and perfect female anatomy.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HN1vClvW4AA8M-H.jpg" width="100%" alt="叛逆摇滚明星身份编辑"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HN1vDMGWoAAHCnh.jpg" width="100%" alt="叛逆摇滚明星身份编辑"></td>
</tr></table>

#### 来源证据

- **创作者:** [Ash](https://x.com/asheem01)
- **官方展示:** [Qwen Image 3.0](https://x.com/asheem01/status/2079940712322199938)
- **发布时间:** 2026-07-22
- **分类:** 参考图编辑与修复
- **需要参考图:** 是

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 19. 细腻水墨与摄影光影融合的宋式肖像

融合宋式构图、清晰题字、绢本质感和克制编辑色彩的来源明确 Qwen Image 3 肖像。

#### 提示词

```text
Create a vertical close-up portrait in a refined Song-dynasty aesthetic, combining meticulous silk-based painting with photographic light. Show a young East Asian woman from the chest up, turned slightly and occupying the right two-thirds of the frame, with generous breathing room on the left. Use a very pale moon-white silk background with fine woven texture and a faint blue-gray wash. Let a delicate ink-painted plum branch enter from the upper left, softly out of focus. A gentle beam of daylight from the upper left should fall across her cheek, nose bridge, and collarbone like morning light filtered through Song-era paper windows, with a fine rim of light along her hair.

Give her luminous pale skin with visible fine texture and tiny vellus hairs, lightly brushed distant-mountain eyebrows, long slightly lifted eyes with a trace of pale rouge at the outer corners, long lashes, a calm gaze directed beyond the frame, a refined nose, full delicate lips with muted sandalwood tint, a clear jawline, long neck, and subtly visible collarbones. Her expression sits between composure and quiet pride, never coquettish or empty. Style her hair in a low, loose coiled bun with a few wind-lifted strands, black with a cool blue sheen. Add one plain silver hairpin, a small pearl flower, one pearl earring, and a tiny pearl forehead ornament; no heavy headdress.

    Dress her in a moon-white bandeau and a pale aqua-blue straight-collar robe with a deep blue-green edge and extremely realistic woven texture. Let one apricot blossom fall onto her shoulder and two or three petals hover softly beside her, suggesting wind. In the left negative space, render the vertical Chinese calligraphic inscription 淡妆浓抹总相宜 in thin brown-gold regular script with a small vermilion seal. Keep the palette low-saturation moon white, aqua, and light sandalwood; lips and seal are the only warm accents. Use coherent soft Rembrandt-like light, very shallow depth of field, sharp eyes, ultra-detailed skin and fabric, 8K detail, and a quiet, contemporary portrait-photography breath within Song painting stillness.
```

<table><tr>
<td width="100%"><img src="https://pbs.twimg.com/media/HN1YAvkagAAoW3N.jpg" width="100%" alt="细腻水墨与摄影光影融合的宋式肖像"></td>
</tr></table>

#### 来源证据

- **创作者:** [岚叔](https://x.com/LufzzLiz)
- **官方展示:** [Qwen Image 3.0](https://x.com/LufzzLiz/status/2079925505634234856)
- **发布时间:** 2026-07-22
- **分类:** 参考图编辑与修复
- **需要参考图:** 否

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

### 20. 雨滴杂志封面与玻璃国际象棋骑士

融合精确封面文字、反射玻璃、透明物体和夜间编辑光线的来源明确 Qwen Image 3 出版案例。

#### 提示词

```text
Create a vertical 4:5 photorealistic fashion-editorial magazine cover photographed through rain-speckled glass at night. Use the uploaded reference image for the transparent glass chess knight and preserve its exact silhouette, bevels, internal reflections, and scale. Place the knight on a dark walnut table with a soft city-light bokeh beyond the glass. At the top, render the exact masthead “LOOK CLOSER.” in a clean condensed serif. Add the exact small cover lines “ONE PROMPT. ZERO FIXES.” and “JULY 2026 · ISSUE 03” with precise spacing and readable punctuation. Use cool blue street reflections, a narrow warm key light on the knight, realistic droplets in the foreground, and balanced negative space. Keep all typography crisp and correctly spelled. No extra cover lines, fake logos, melted glass, duplicated chess pieces, or watermarks.
```

<table><tr>
<td width="100%"><img src="https://pbs.twimg.com/media/HN2kFdfWsAEQTO-.jpg" width="100%" alt="雨滴杂志封面与玻璃国际象棋骑士"></td>
</tr></table>

#### 来源证据

- **创作者:** [Ivana](https://x.com/ivanainai)
- **官方展示:** [Qwen Image 3.0](https://x.com/ivanainai/status/2080000842959106328)
- **发布时间:** 2026-07-22
- **分类:** 排版与出版
- **需要参考图:** 是

**[在 ImagineVid 中使用此提示词](https://imaginevid.io/zh/ai-image-generator)**

---

<a id="contribute"></a>

## 参与贡献

仅提交明确标注 Qwen Image 3.0、包含可复用提示词、保留规范署名且结果素材可核验的案例。

[提交已核验提示词](https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills/issues/new?template=submit-prompt.yml)

<a id="license-and-attribution"></a>

## 许可与署名

ImagineVid 编写的代码、生产提示词重构、翻译与编辑文字采用 CC BY 4.0。Qwen 官方案例及媒体素材的权利归原权利人所有，并链接至规范发布页。Qwen 与 Alibaba 是其权利人的商标。本独立合集与 Qwen 或 Alibaba 无隶属或背书关系。

由 Rowan Hale 为 ImagineVid 策划整理。
