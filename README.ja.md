<a href="https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills"><img src="public/images/qwen-image-3-0-cover.png" width="100%" alt="Qwen Image 3.0 prompts and production skills"></a>

# Awesome Qwen Image 3.0 Prompts & Skills

> Qwen Image 3.0 の公式事例を、検証可能な画像と明確な出典付きの実用的な英語プロンプトへ再構成しました。

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills)

[English](README.md) · [简体中文](README.zh.md) · [**日本語**](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md)

---

## 目次

- [モデルガイド](#model-guide)
- [ワークフロー一覧](#workflow-index)
- [検証済み公式ショーケース](#verified-showcase-cases)
- [コントリビュート](#contribute)
- [ライセンスと帰属表示](#license-and-attribution)

<a id="model-guide"></a>

## モデルガイド

Qwen Image 3.0 は Qwen チームによる第3世代の画像生成・編集モデルです。公式発表では「豊富な内容」「本物らしい細部」「深い知識」を柱とし、最大4.5Kトークンの指示、10ピクセル相当の小さな文字、12言語のネイティブ描画、100を超える画風、複雑なUI、参照画像編集への対応を掲げています。本コレクションは公式事例を完全な英語の制作プロンプトに再構成し、性能記述を独立評価ではなく公式主張として扱います。

> 再現性を保つため、プロンプト本文は全言語で共通の英語版を使用します。

### このコレクションで検証すること

- 高密度な多面レイアウトと長い構造化指示
- 細かな文字、数式、注釈、多言語タイポグラフィ
- 肌、髪、紙、布、素材の写実的な質感
- 参照編集、修復、UI再現、知識インフォグラフィック

### 調査根拠

- [Qwen Image 3.0 official launch](https://qwen.ai/blog?id=qwen-image-3.0)
- [Qwen image creation workspace](https://chat.qwen.ai/?inputFeature=t2i)

**[ImagineVid で画像を作成](https://imaginevid.io/ja/ai-image-generator)**

<a id="workflow-index"></a>

## ワークフロー一覧

- **長文情報デザイン**
- **タイポグラフィと出版**
- **インターフェースと世界知識**
- **写実表現と素材ディテール**
- **参照編集と修復**

<a id="verified-showcase-cases"></a>

## 検証済み公式ショーケース

| 収録状況 | 12 件の検証済み事例 |
|---|---:|
| 最終生成日 | 2026-07-21 |

### 1. 一度に生成する9分野の知識アトラス

長文指示、意味の分離、数式、図解、日英ラベルの可読性を一枚で試す3×3教材。

#### プロンプト

```text
Create one landscape 3x3 educational knowledge atlas titled "NINE WAYS TO EXPLAIN A COMPLEX WORLD." Every cell must be a complete mini-infographic with its own visual language while remaining part of one coherent publication.

Row one: a tunnel-safety comic with numbered emergency actions; a spatial-geometry lesson explaining a plane intersecting a cube; and a literary analysis of the classical memorial Chu Shi Biao with a restrained calligraphy excerpt and rhetorical map. Row two: projectile-motion physics with a trajectory graph and equations; a parasitology life-cycle explainer; and a clinical decision diagram for right-side chest pain with clearly marked non-diagnostic educational language. Row three: an introduction to the Sylow theorems; a bank internal-control process map; and a comparison of prokaryotic and eukaryotic DNA organization.

Use exact section boundaries, consistent outer margins, clear titles, concise English labels with selected Chinese terms where useful, correct mathematical notation, and distinct color coding for each discipline. Preserve small-text readability, avoid repeated icons and pseudo-text, and make the entire atlas look like one premium educational supplement rather than nine unrelated cards. 16:9, print-sharp detail.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update2.png" width="100%" alt="一度に生成する9分野の知識アトラス"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** 長文情報デザイン
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 2. 入れ子になったソフトウェア画面

四つの作業画面を、階層を崩さず一続きのピクチャー・イン・ピクチャーとして構成します。

#### プロンプト

```text
Create a realistic desktop screenshot built as four nested interfaces, each visibly contained inside the previous one. The outer layer is a dark VS Code workspace with a clean project tree, open TypeScript file, terminal, and status bar. Inside its editor preview, show a Qwen chat interface answering a design question. Inside that answer, embed a mobile WeChat conversation sharing a coffee recipe. Inside the shared message, display a polished pour-over coffee poster with a brewer diagram, a 1:16 ratio, water temperature, and a four-step pouring timeline.

The nesting must read instantly from outer to inner: code editor, AI chat, messaging app, poster. Preserve realistic window chrome, spacing, typography scale, cursor states, and device proportions. Use concise, fully legible English interface copy; do not imitate private user data or real account names. Avoid impossible window overlaps, repeated controls, gibberish code, excessive reflections, and generic sci-fi dashboards. 16:9 desktop composition, neutral studio clarity.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/3fa25ce8ca621bc3642b431d6724ecc3.png" width="100%" alt="入れ子になったソフトウェア画面"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** インターフェースと世界知識
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 3. ジンベエザメ研究フィールドガイド

解剖、回遊、縮尺、食性、保全情報を明快な階層でまとめる高密度な海洋生物図解。

#### プロンプト

```text
Design a tall scientific field guide titled "WHALE SHARK: THE OCEAN'S GENTLE GIANT." Place an anatomically accurate whale shark as the central specimen and organize the supporting information around it in a disciplined museum-publication grid.

Include a dorsal and side silhouette, labeled external anatomy, spot-pattern identification, filter-feeding mechanism, human scale comparison, global warm-water range map, seasonal migration path, life-stage timeline, and a compact conservation section. Use concise English labels and clearly separate established facts from uncertain estimates. Add a small panel explaining how researchers use photographic spot matching, plus a measurement strip for length and mouth width.

Style: contemporary natural-history illustration with deep ocean blue, muted cyan, warm white, and restrained coral accents. Mix precise ink diagrams with realistic underwater texture. Keep all small labels crisp, use consistent leader lines, and avoid fantasy anatomy, sensational claims, decorative bubbles, fake citations, or duplicated fish. 2:3 portrait, publication-ready.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/whale.jpg" width="100%" alt="ジンベエザメ研究フィールドガイド"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** 長文情報デザイン
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 4. 精密組版の代数幾何学論文

数式構造、LaTeX風表記、定理の階層、小さな文字の可読性を試す出版課題。

#### プロンプト

```text
Create one realistic A4 page from a peer-reviewed algebraic geometry paper titled "Derived Intersections on Singular Moduli Spaces." Use a restrained academic journal template with author line, abstract, numbered section heading, theorem, proof, one commutative diagram, and a short bibliography fragment.

The page must contain coherent mathematical notation rather than decorative symbols: superscripts and subscripts, fractions, direct sums, sheaf notation, morphism arrows, aligned multi-line equations, braces, Greek letters, and equation numbers. Set a clearly distinguished "Theorem 2.3" followed by a short proof with logically consistent notation. Include one square commutative diagram whose arrows and object labels align correctly.

Render as black ink on slightly warm archival paper with subtle print texture and no handwriting. Maintain professional margins, baseline rhythm, serif body text, monospaced operator names where appropriate, and sharp small type. Do not invent institutional logos, fake DOI numbers, malformed equations, random glyphs, or ornamental science imagery.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/cca131fe-4ba1-409e-9da0-2358ee2bbb41.png" width="100%" alt="精密組版の代数幾何学論文"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** タイポグラフィと出版
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 5. 日曜新聞の一面

長文記事、写真、段組、キャプション、紙の質感を一つの印刷物として整えます。

#### プロンプト

```text
Generate a photorealistic broadsheet newspaper front page named "THE HARBOR REVIEW" dated Sunday, July 19, 2026. The lead story is "A CITY LEARNS TO LIVE WITH WATER" and examines flood-resilient public space through one large documentary photograph, a concise standfirst, and a five-column article opening.

Add three secondary stories: a regional rail map redesign, a profile of a neighborhood instrument maker, and a science brief about kelp-forest recovery. Include a narrow weather strip, issue price, page references, bylines, captions, and one restrained data graphic. Use editorially plausible but fictional copy; no real newspaper mastheads or fabricated quotes attributed to real people.

The newspaper should lie naturally on a wooden cafe table with a slight fold, subtle ink variation, fine paper fibers, and soft morning window light. Preserve a strict typographic hierarchy, aligned columns, readable headlines and captions, and realistic print density. Avoid lorem ipsum, duplicated paragraphs, warped page edges, glossy magazine stock, or sensational tabloid styling.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update5.png" width="100%" alt="日曜新聞の一面"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** タイポグラフィと出版
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 6. 自然な手書き学習メモ

印刷ページ、照明、遠近を変えず、実在感のある学生の書き込みだけを加える参照編集。

#### プロンプト

```text
Using the supplied photograph of an open textbook page as the only structural reference, add realistic red-ink study annotations without changing the printed page. Underline two key sentences, circle three important terms, add one wavy emphasis line, draw two short arrows linking a definition to its example, and write four concise handwritten comments in the margins: "review this", "key distinction", "exam example", and "connect to chapter 4".

The handwriting should look like one careful high-school student's natural pen work: consistent pressure, slight variation in slant, small corrections, and marks that follow the page perspective. Preserve every printed word, diagram, page edge, shadow, paper texture, camera angle, and background object exactly. Do not cover important content, regenerate the book, straighten the photograph, change the lighting, add highlighter, or introduce digital-looking vector strokes.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update6.jpeg" width="100%" alt="自然な手書き学習メモ"></td>
<td width="50%"><img src="public/images/qwen-handwritten-annotations-result.png" width="100%" alt="自然な手書き学習メモ"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** 参照編集と修復
- **参照画像が必要:** はい

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 7. 無修整の窓辺ポートレート

毛穴、産毛、目の潤み、控えめな色調、自然な光学表現に焦点を当てた人物写真。

#### プロンプト

```text
Create an intimate editorial head-and-shoulders portrait of a fictional adult woman standing beside a north-facing apartment window after light rain. Frame her slightly off-center at eye level with an 85mm full-frame lens look and shallow but not extreme depth of field.

Show honest skin texture: visible pores, fine facial hair, subtle under-eye variation, tiny freckles, a faint healed blemish, and natural lip texture. A few damp strands of dark hair should cross the forehead and catch the window light. Keep both irises detailed and moist without glassy over-sharpening. Wardrobe is a simple charcoal cotton shirt; background is a quiet soft-gray interior with one out-of-focus plant.

Use soft directional daylight, restrained neutral color, realistic dynamic range, and documentary magazine finishing. No beauty retouching, skin smoothing, makeup-ad gloss, waxy highlights, excessive bokeh, jewelry, text, visible brand marks, or impossible eyelashes. The subject must be fictional and not resemble a known person. 4:5 portrait.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/people31_seed9999.png" width="100%" alt="無修整の窓辺ポートレート"></td>
<td width="50%"><img src="public/images/qwen-window-light-portrait-detail.png" width="100%" alt="無修整の窓辺ポートレート"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** 写実表現と素材ディテール
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 8. 墨彩の鷲図を保存修復

経年、構図、筆致を残しながら欠損した紙と描線を補う修復編集。

#### プロンプト

```text
Restore the supplied damaged Chinese ink painting of eagles in combat as a museum-conservation visualization. Reconstruct only the missing or mold-damaged regions by continuing the nearest original brushwork, paper tone, ink density, feather structure, branch rhythm, and negative-space composition.

The repaired eagle anatomy must remain consistent with the surviving head, wings, talons, and motion. Continue dry-brush feather edges where visible, use soft ink wash for atmospheric depth, and preserve the original balance between black ink, diluted gray, and untouched paper. Remove isolated mold spots and tears only where they interrupt the image; retain believable age, paper fibers, mild tonal variation, and all undamaged marks.

Do not modernize the painting, increase global contrast, add a new signature or seal, invent scenery, crop the sheet, alter the composition, erase all patina, or turn the repair into smooth digital illustration. Output the restored full sheet photographed flat under neutral conservation lighting.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/0d876cb1-4ed6-4950-9f5c-e5aae886e4e5.png" width="100%" alt="墨彩の鷲図を保存修復"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/ab2969ca-90dc-48a8-ae6b-4ef7f01c56a3.png" width="100%" alt="墨彩の鷲図を保存修復"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** 参照編集と修復
- **参照画像が必要:** はい

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 9. 3言語の文化ポスターシリーズ

共通のイベントらしさを保ちながら、日本語・韓国語・スペイン語の自然な組版を試します。

#### プロンプト

```text
Design a coordinated series of three vertical cultural posters for one fictional international night market. Each poster uses the same event facts but is art-directed for its language and city context.

Poster one, Japanese: title "夜の市場", subtitle "食・音楽・手仕事", date "2026年9月12日", location "港区文化広場". Use disciplined contemporary Japanese editorial typography with indigo, vermilion, and warm paper. Poster two, Korean: title "밤의 시장", subtitle "음식 · 음악 · 공예", date "2026년 9월 12일", location "문화광장". Use clear Hangul hierarchy with black, cobalt, and soft mint. Poster three, Spanish: title "MERCADO NOCTURNO", subtitle "Comida · Música · Oficios", date "12 de septiembre de 2026", location "Plaza de la Cultura". Use expressive modernist typography with coral, black, and pale yellow.

Keep all required text exact and readable, preserve shared event identity through one small geometric symbol and consistent information order, and avoid mixing scripts, fake glyphs, tourism clichés, national flags, or translated copy leaking between posters.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/iwEdAqNwbmcDAQTRBoAF0QnABrDQDrHWHy7VXwoxvRc_1ZIAB9MAAAABHxSFlwgACaJpbQoAC9IABSUu.png" width="100%" alt="3言語の文化ポスターシリーズ"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/mlp.png" width="100%" alt="3言語の文化ポスターシリーズ"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** タイポグラフィと出版
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 10. ライブコマース運用画面

映像、商品、モデレーション、在庫、指標を実務的な優先順位でまとめた制作UI。

#### プロンプト

```text
Create a high-fidelity desktop interface for a fictional live-commerce production suite named "Northstar Live". The central area shows a 16:9 livestream preview of a presenter demonstrating a compact espresso machine in a bright studio. Surround it with production controls that follow a real operator's hierarchy rather than a generic dashboard.

Left rail: scene list, camera sources, lower thirds, product overlays, and media bin. Right panel: active product card with price, inventory, pinned offer, moderation queue, and compact live chat. Bottom timeline: microphone and music meters, cue markers, clip replay, and stream-health indicators. Top bar: elapsed time, viewer count, connection status, record state, and an emergency stop control separated from routine actions. Include a small performance panel for conversion, click-through, and stock velocity using plausible fictional data.

Use neutral light-gray surfaces, sharp black type, blue operational states, amber warnings, and red only for destructive or live states. Keep all labels legible and consistent. Avoid copied platform branding, impossible analytics, excessive rounded cards, dark cyberpunk styling, random charts, or decorative controls without function.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/image%20-%202026-07-21T003739.706.png" width="100%" alt="ライブコマース運用画面"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/image%20-%202026-07-21T003745.645.png" width="100%" alt="ライブコマース運用画面"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** インターフェースと世界知識
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 11. 昆虫写真を研究図版へ

標本を保ったまま分類、解剖ラベル、拡大図、縮尺情報を加える科学編集。

#### プロンプト

```text
Transform the supplied macro photograph of an insect into a publication-ready entomology plate while preserving the exact specimen, pose, camera angle, body proportions, colors, lighting, and background relationship.

Keep the original photograph as the dominant central panel. Add a clean taxonomic header with placeholders clearly marked for expert verification: "Order: [VERIFY]", "Family: [VERIFY]", "Genus: [VERIFY]". Create three magnified inset views derived from the same specimen: antenna structure, wing venation, and leg articulation. Add fine leader lines labeling head, compound eye, antenna, thorax, forewing, hindwing, abdomen, femur, tibia, and tarsus. Include a calibrated-looking scale bar labeled "Scale bar: verify against capture metadata" rather than inventing a measurement.

Use a warm-white scientific-journal background, graphite rules, restrained forest-green accents, exact alignment, and compact readable type. Do not change the insect, hallucinate hidden anatomy, assign an unverified species, add decorative leaves, or turn the plate into a children's poster.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/c8fef88f-9379-4826-9860-af1b4d2f6f00.png" width="100%" alt="昆虫写真を研究図版へ"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update4.png" width="100%" alt="昆虫写真を研究図版へ"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** 参照編集と修復
- **参照画像が必要:** はい

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

### 12. 時代を越える美術史ライブ配信

歴史知識、現代UI、明確なフィクション表示を組み合わせた教育放送の場面。

#### プロンプト

```text
Create a fictional educational livestream titled "BRUSHWORK ACROSS WORLDS" in which respectful illustrated representations of Qi Baishi and Vincent van Gogh discuss how artists build motion with marks. Frame the scene as an art-history interpretation, not a real event or endorsement.

The two artists sit at a split studio table: the left side uses rice paper, ink stone, shrimp studies, and open negative space; the right side uses thick oil paint, reed pens, a night-sky color study, and visible impasto samples. Between them, place a neutral display comparing four concepts: line economy, directional stroke, color rhythm, and the role of empty space. The livestream interface should include a clear "FICTIONAL EDUCATIONAL RECREATION" label, chapter markers, translated captions, and a small source-notes panel without fabricated quotations.

Use museum-quality editorial illustration rather than photoreal impersonation. Preserve period-appropriate clothing and tools, balanced representation, readable English labels, and a calm educational tone. Avoid meme styling, commercial product promotion, false direct quotes, copied platform branding, or claims that the historical artists used modern technology.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/case_06.png" width="100%" alt="時代を越える美術史ライブ配信"></td>
</tr></table>

#### 出典情報

- **作成者:** [Qwen Team](https://qwen.ai/)
- **公式ショーケース:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **公開日:** 2026-07-21
- **カテゴリー:** インターフェースと世界知識
- **参照画像が必要:** いいえ

**[ImagineVid でこのプロンプトを使う](https://imaginevid.io/ja/ai-image-generator)**

---

<a id="contribute"></a>

## コントリビュート

Qwen Image 3.0 と明記され、再利用可能なプロンプト、正規の出典、確認可能な結果画像がそろう事例のみ投稿してください。

[検証済みプロンプトを投稿](https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills/issues/new?template=submit-prompt.yml)

<a id="license-and-attribution"></a>

## ライセンスと帰属表示

ImagineVid が作成したコード、プロンプト再構成、翻訳、編集文は CC BY 4.0 です。Qwen の公式事例と画像の権利は各権利者に帰属し、公式発表へリンクしています。Qwen と Alibaba は各権利者の商標です。本コレクションは両社と提携・公認関係にありません。

ImagineVid のために Rowan Hale が編集。
