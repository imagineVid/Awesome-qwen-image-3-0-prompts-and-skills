<a href="https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills"><img src="public/images/qwen-image-3-0-cover.png" width="100%" alt="Qwen Image 3.0 prompts and production skills"></a>

# Awesome Qwen Image 3.0 Prompts & Skills

> Qwen Image 3.0 공식 쇼케이스를 검증 가능한 미디어와 투명한 출처를 갖춘 재사용형 영어 제작 프롬프트로 재구성했습니다.

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills)

[English](README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · [**한국어**](README.ko.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Русский](README.ru.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md)

---

## 목차

- [모델 가이드](#model-guide)
- [워크플로 색인](#workflow-index)
- [검증된 공식 쇼케이스](#verified-showcase-cases)
- [기여하기](#contribute)
- [라이선스 및 출처](#license-and-attribution)

<a id="model-guide"></a>

## 모델 가이드

Qwen Image 3.0은 Qwen 팀의 3세대 이미지 생성·편집 모델입니다. 공식 발표는 풍부한 콘텐츠, 사실적인 디테일, 깊은 지식을 핵심으로 제시하며 최대 4.5K 토큰 지시, 10픽셀 수준의 작은 글자, 12개 언어의 네이티브 렌더링, 100가지 이상의 미술 스타일, 복잡한 UI 및 참조 이미지 편집을 지원한다고 설명합니다. 이 컬렉션은 공식 사례를 완전한 영어 제작 프롬프트로 재구성하고 해당 성능을 독립 평가가 아닌 공식 주장으로 구분합니다.

> 재현성을 위해 프롬프트 본문은 모든 언어에서 하나의 영어 표준본을 공유합니다.

### 이 컬렉션의 검증 범위

- 고밀도 다중 패널 출판물과 긴 구조화 지시
- 작은 글자, 수식, 주석, 다국어 타이포그래피
- 피부, 머리카락, 종이, 직물, 소재의 사실적 질감
- 참조 편집, 복원, UI 시뮬레이션, 지식 그래픽

### 조사 근거

- [Qwen Image 3.0 official launch](https://qwen.ai/blog?id=qwen-image-3.0)
- [Qwen image creation workspace](https://chat.qwen.ai/?inputFeature=t2i)

**[ImagineVid에서 이미지 만들기](https://imaginevid.io/ko/ai-image-generator)**

<a id="workflow-index"></a>

## 워크플로 색인

- **장문 정보 디자인**
- **타이포그래피 및 출판**
- **인터페이스와 세계 지식**
- **사실적 표현과 소재 디테일**
- **참조 편집 및 복원**

<a id="verified-showcase-cases"></a>

## 검증된 공식 쇼케이스

| 컬렉션 상태 | 19 개의 검증 사례 |
|---|---:|
| 최근 생성일 | 2026-07-21 |

### 1. 한 번에 생성하는 9개 지식 분야 지도

한 화면에서 긴 지시 이해, 의미 분리, 수식, 도표, 한영 소문자 가독성을 시험하는 3×3 교육 자료입니다.

#### 프롬프트

```text
Create one landscape 3x3 educational knowledge atlas titled "NINE WAYS TO EXPLAIN A COMPLEX WORLD." Every cell must be a complete mini-infographic with its own visual language while remaining part of one coherent publication.

Row one: a tunnel-safety comic with numbered emergency actions; a spatial-geometry lesson explaining a plane intersecting a cube; and a literary analysis of the classical memorial Chu Shi Biao with a restrained calligraphy excerpt and rhetorical map. Row two: projectile-motion physics with a trajectory graph and equations; a parasitology life-cycle explainer; and a clinical decision diagram for right-side chest pain with clearly marked non-diagnostic educational language. Row three: an introduction to the Sylow theorems; a bank internal-control process map; and a comparison of prokaryotic and eukaryotic DNA organization.

Use exact section boundaries, consistent outer margins, clear titles, concise English labels with selected Chinese terms where useful, correct mathematical notation, and distinct color coding for each discipline. Preserve small-text readability, avoid repeated icons and pseudo-text, and make the entire atlas look like one premium educational supplement rather than nine unrelated cards. 16:9, print-sharp detail.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update2.png" width="100%" alt="한 번에 생성하는 9개 지식 분야 지도"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 장문 정보 디자인
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 2. 겹겹이 중첩된 소프트웨어 인터페이스

네 개의 작업 화면을 계층을 잃지 않는 하나의 화면 속 화면 구성으로 연결합니다.

#### 프롬프트

```text
Create a realistic desktop screenshot built as four nested interfaces, each visibly contained inside the previous one. The outer layer is a dark VS Code workspace with a clean project tree, open TypeScript file, terminal, and status bar. Inside its editor preview, show a Qwen chat interface answering a design question. Inside that answer, embed a mobile WeChat conversation sharing a coffee recipe. Inside the shared message, display a polished pour-over coffee poster with a brewer diagram, a 1:16 ratio, water temperature, and a four-step pouring timeline.

The nesting must read instantly from outer to inner: code editor, AI chat, messaging app, poster. Preserve realistic window chrome, spacing, typography scale, cursor states, and device proportions. Use concise, fully legible English interface copy; do not imitate private user data or real account names. Avoid impossible window overlaps, repeated controls, gibberish code, excessive reflections, and generic sci-fi dashboards. 16:9 desktop composition, neutral studio clarity.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/3fa25ce8ca621bc3642b431d6724ecc3.png" width="100%" alt="겹겹이 중첩된 소프트웨어 인터페이스"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 인터페이스와 세계 지식
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 3. 고래상어 연구 필드 가이드

해부, 이동, 크기, 먹이, 보전 정보를 명확한 위계로 통합한 고밀도 해양생물 도해입니다.

#### 프롬프트

```text
Design a tall scientific field guide titled "WHALE SHARK: THE OCEAN'S GENTLE GIANT." Place an anatomically accurate whale shark as the central specimen and organize the supporting information around it in a disciplined museum-publication grid.

Include a dorsal and side silhouette, labeled external anatomy, spot-pattern identification, filter-feeding mechanism, human scale comparison, global warm-water range map, seasonal migration path, life-stage timeline, and a compact conservation section. Use concise English labels and clearly separate established facts from uncertain estimates. Add a small panel explaining how researchers use photographic spot matching, plus a measurement strip for length and mouth width.

Style: contemporary natural-history illustration with deep ocean blue, muted cyan, warm white, and restrained coral accents. Mix precise ink diagrams with realistic underwater texture. Keep all small labels crisp, use consistent leader lines, and avoid fantasy anatomy, sensational claims, decorative bubbles, fake citations, or duplicated fish. 2:3 portrait, publication-ready.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/whale.jpg" width="100%" alt="고래상어 연구 필드 가이드"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 장문 정보 디자인
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 4. 정밀 조판된 대수기하학 논문

수학 구조, LaTeX형 표기, 정리 위계, 작은 글자 가독성을 검증하는 출판 스트레스 테스트입니다.

#### 프롬프트

```text
Create one realistic A4 page from a peer-reviewed algebraic geometry paper titled "Derived Intersections on Singular Moduli Spaces." Use a restrained academic journal template with author line, abstract, numbered section heading, theorem, proof, one commutative diagram, and a short bibliography fragment.

The page must contain coherent mathematical notation rather than decorative symbols: superscripts and subscripts, fractions, direct sums, sheaf notation, morphism arrows, aligned multi-line equations, braces, Greek letters, and equation numbers. Set a clearly distinguished "Theorem 2.3" followed by a short proof with logically consistent notation. Include one square commutative diagram whose arrows and object labels align correctly.

Render as black ink on slightly warm archival paper with subtle print texture and no handwriting. Maintain professional margins, baseline rhythm, serif body text, monospaced operator names where appropriate, and sharp small type. Do not invent institutional logos, fake DOI numbers, malformed equations, random glyphs, or ornamental science imagery.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/cca131fe-4ba1-409e-9da0-2358ee2bbb41.png" width="100%" alt="정밀 조판된 대수기하학 논문"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 타이포그래피 및 출판
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 5. 일요 신문 1면

긴 기사, 사진, 단, 캡션, 실제 종이 질감을 하나의 인쇄물로 조율합니다.

#### 프롬프트

```text
Generate a photorealistic broadsheet newspaper front page named "THE HARBOR REVIEW" dated Sunday, July 19, 2026. The lead story is "A CITY LEARNS TO LIVE WITH WATER" and examines flood-resilient public space through one large documentary photograph, a concise standfirst, and a five-column article opening.

Add three secondary stories: a regional rail map redesign, a profile of a neighborhood instrument maker, and a science brief about kelp-forest recovery. Include a narrow weather strip, issue price, page references, bylines, captions, and one restrained data graphic. Use editorially plausible but fictional copy; no real newspaper mastheads or fabricated quotes attributed to real people.

The newspaper should lie naturally on a wooden cafe table with a slight fold, subtle ink variation, fine paper fibers, and soft morning window light. Preserve a strict typographic hierarchy, aligned columns, readable headlines and captions, and realistic print density. Avoid lorem ipsum, duplicated paragraphs, warped page edges, glossy magazine stock, or sensational tabloid styling.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update5.png" width="100%" alt="일요 신문 1면"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 타이포그래피 및 출판
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 6. 자연스러운 손글씨 학습 주석

원문 페이지와 조명, 원근을 보존한 채 믿을 만한 학생 필기만 추가하는 참조 편집입니다.

#### 프롬프트

```text
Using the supplied photograph of an open textbook page as the only structural reference, add realistic red-ink study annotations without changing the printed page. Underline two key sentences, circle three important terms, add one wavy emphasis line, draw two short arrows linking a definition to its example, and write four concise handwritten comments in the margins: "review this", "key distinction", "exam example", and "connect to chapter 4".

The handwriting should look like one careful high-school student's natural pen work: consistent pressure, slight variation in slant, small corrections, and marks that follow the page perspective. Preserve every printed word, diagram, page edge, shadow, paper texture, camera angle, and background object exactly. Do not cover important content, regenerate the book, straighten the photograph, change the lighting, add highlighter, or introduce digital-looking vector strokes.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update6.jpeg" width="100%" alt="자연스러운 손글씨 학습 주석"></td>
<td width="50%"><img src="public/images/qwen-handwritten-annotations-result.png" width="100%" alt="자연스러운 손글씨 학습 주석"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 참조 편집 및 복원
- **참조 이미지 필요:** 예

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 7. 보정하지 않은 창가 인물 사진

모공, 잔털, 촉촉한 눈, 절제된 색과 자연스러운 광학 표현에 집중한 에디토리얼 인물 사진입니다.

#### 프롬프트

```text
Create an intimate editorial head-and-shoulders portrait of a fictional adult woman standing beside a north-facing apartment window after light rain. Frame her slightly off-center at eye level with an 85mm full-frame lens look and shallow but not extreme depth of field.

Show honest skin texture: visible pores, fine facial hair, subtle under-eye variation, tiny freckles, a faint healed blemish, and natural lip texture. A few damp strands of dark hair should cross the forehead and catch the window light. Keep both irises detailed and moist without glassy over-sharpening. Wardrobe is a simple charcoal cotton shirt; background is a quiet soft-gray interior with one out-of-focus plant.

Use soft directional daylight, restrained neutral color, realistic dynamic range, and documentary magazine finishing. No beauty retouching, skin smoothing, makeup-ad gloss, waxy highlights, excessive bokeh, jewelry, text, visible brand marks, or impossible eyelashes. The subject must be fictional and not resemble a known person. 4:5 portrait.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/people31_seed9999.png" width="100%" alt="보정하지 않은 창가 인물 사진"></td>
<td width="50%"><img src="public/images/qwen-window-light-portrait-detail.png" width="100%" alt="보정하지 않은 창가 인물 사진"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 사실적 표현과 소재 디테일
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 8. 수묵 독수리 그림 보존 복원

세월의 흔적과 구성, 붓의 리듬을 유지하며 손상된 종이와 묘사를 복원합니다.

#### 프롬프트

```text
Restore the supplied damaged Chinese ink painting of eagles in combat as a museum-conservation visualization. Reconstruct only the missing or mold-damaged regions by continuing the nearest original brushwork, paper tone, ink density, feather structure, branch rhythm, and negative-space composition.

The repaired eagle anatomy must remain consistent with the surviving head, wings, talons, and motion. Continue dry-brush feather edges where visible, use soft ink wash for atmospheric depth, and preserve the original balance between black ink, diluted gray, and untouched paper. Remove isolated mold spots and tears only where they interrupt the image; retain believable age, paper fibers, mild tonal variation, and all undamaged marks.

Do not modernize the painting, increase global contrast, add a new signature or seal, invent scenery, crop the sheet, alter the composition, erase all patina, or turn the repair into smooth digital illustration. Output the restored full sheet photographed flat under neutral conservation lighting.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/0d876cb1-4ed6-4950-9f5c-e5aae886e4e5.png" width="100%" alt="수묵 독수리 그림 보존 복원"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/ab2969ca-90dc-48a8-ae6b-4ef7f01c56a3.png" width="100%" alt="수묵 독수리 그림 보존 복원"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 참조 편집 및 복원
- **참조 이미지 필요:** 예

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 9. 3개 언어 문화 포스터 시리즈

공통 행사 정체성을 유지하면서 일본어, 한국어, 스페인어의 자연스러운 조판을 시험합니다.

#### 프롬프트

```text
Design a coordinated series of three vertical cultural posters for one fictional international night market. Each poster uses the same event facts but is art-directed for its language and city context.

Poster one, Japanese: title "夜の市場", subtitle "食・音楽・手仕事", date "2026年9月12日", location "港区文化広場". Use disciplined contemporary Japanese editorial typography with indigo, vermilion, and warm paper. Poster two, Korean: title "밤의 시장", subtitle "음식 · 음악 · 공예", date "2026년 9월 12일", location "문화광장". Use clear Hangul hierarchy with black, cobalt, and soft mint. Poster three, Spanish: title "MERCADO NOCTURNO", subtitle "Comida · Música · Oficios", date "12 de septiembre de 2026", location "Plaza de la Cultura". Use expressive modernist typography with coral, black, and pale yellow.

Keep all required text exact and readable, preserve shared event identity through one small geometric symbol and consistent information order, and avoid mixing scripts, fake glyphs, tourism clichés, national flags, or translated copy leaking between posters.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/iwEdAqNwbmcDAQTRBoAF0QnABrDQDrHWHy7VXwoxvRc_1ZIAB9MAAAABHxSFlwgACaJpbQoAC9IABSUu.png" width="100%" alt="3개 언어 문화 포스터 시리즈"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/mlp.png" width="100%" alt="3개 언어 문화 포스터 시리즈"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 타이포그래피 및 출판
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 10. 라이브 커머스 제작 제어실

영상, 상품, 검수, 재고, 성과 데이터를 실제 운영 위계에 맞춘 제작 인터페이스입니다.

#### 프롬프트

```text
Create a high-fidelity desktop interface for a fictional live-commerce production suite named "Northstar Live". The central area shows a 16:9 livestream preview of a presenter demonstrating a compact espresso machine in a bright studio. Surround it with production controls that follow a real operator's hierarchy rather than a generic dashboard.

Left rail: scene list, camera sources, lower thirds, product overlays, and media bin. Right panel: active product card with price, inventory, pinned offer, moderation queue, and compact live chat. Bottom timeline: microphone and music meters, cue markers, clip replay, and stream-health indicators. Top bar: elapsed time, viewer count, connection status, record state, and an emergency stop control separated from routine actions. Include a small performance panel for conversion, click-through, and stock velocity using plausible fictional data.

Use neutral light-gray surfaces, sharp black type, blue operational states, amber warnings, and red only for destructive or live states. Keep all labels legible and consistent. Avoid copied platform branding, impossible analytics, excessive rounded cards, dark cyberpunk styling, random charts, or decorative controls without function.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/image%20-%202026-07-21T003739.706.png" width="100%" alt="라이브 커머스 제작 제어실"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/image%20-%202026-07-21T003745.645.png" width="100%" alt="라이브 커머스 제작 제어실"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 인터페이스와 세계 지식
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 11. 곤충 사진을 연구 도판으로

표본을 그대로 보존하며 분류 구조, 해부 표기, 확대 보기와 축척을 추가하는 과학 편집입니다.

#### 프롬프트

```text
Transform the supplied macro photograph of an insect into a publication-ready entomology plate while preserving the exact specimen, pose, camera angle, body proportions, colors, lighting, and background relationship.

Keep the original photograph as the dominant central panel. Add a clean taxonomic header with placeholders clearly marked for expert verification: "Order: [VERIFY]", "Family: [VERIFY]", "Genus: [VERIFY]". Create three magnified inset views derived from the same specimen: antenna structure, wing venation, and leg articulation. Add fine leader lines labeling head, compound eye, antenna, thorax, forewing, hindwing, abdomen, femur, tibia, and tarsus. Include a calibrated-looking scale bar labeled "Scale bar: verify against capture metadata" rather than inventing a measurement.

Use a warm-white scientific-journal background, graphite rules, restrained forest-green accents, exact alignment, and compact readable type. Do not change the insect, hallucinate hidden anatomy, assign an unverified species, add decorative leaves, or turn the plate into a children's poster.
```

<table><tr>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/c8fef88f-9379-4826-9860-af1b4d2f6f00.png" width="100%" alt="곤충 사진을 연구 도판으로"></td>
<td width="50%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update4.png" width="100%" alt="곤충 사진을 연구 도판으로"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 참조 편집 및 복원
- **참조 이미지 필요:** 예

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 12. 시대를 넘나드는 미술사 라이브

역사적 시각 지식, 현대 UI, 명확한 허구 표시를 결합한 교육 방송 장면입니다.

#### 프롬프트

```text
Create a fictional educational livestream titled "BRUSHWORK ACROSS WORLDS" in which respectful illustrated representations of Qi Baishi and Vincent van Gogh discuss how artists build motion with marks. Frame the scene as an art-history interpretation, not a real event or endorsement.

The two artists sit at a split studio table: the left side uses rice paper, ink stone, shrimp studies, and open negative space; the right side uses thick oil paint, reed pens, a night-sky color study, and visible impasto samples. Between them, place a neutral display comparing four concepts: line economy, directional stroke, color rhythm, and the role of empty space. The livestream interface should include a clear "FICTIONAL EDUCATIONAL RECREATION" label, chapter markers, translated captions, and a small source-notes panel without fabricated quotations.

Use museum-quality editorial illustration rather than photoreal impersonation. Preserve period-appropriate clothing and tools, balanced representation, readable English labels, and a calm educational tone. Avoid meme styling, commercial product promotion, false direct quotes, copied platform branding, or claims that the historical artists used modern technology.
```

<table><tr>
<td width="100%"><img src="https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/case_06.png" width="100%" alt="시대를 넘나드는 미술사 라이브"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Qwen Team](https://qwen.ai/)
- **공식 쇼케이스:** [Qwen Image 3.0](https://qwen.ai/blog?id=qwen-image-3.0)
- **게시일:** 2026-07-21
- **분류:** 인터페이스와 세계 지식
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 13. 정확한 일본어 대사가 있는 2단 흑백 만화

패널 연속성, 절제된 만화 표현, 세로쓰기 일본어와 정확한 말풍선 문구를 시험하는 커뮤니티 기반 제작 재구성입니다.

#### 프롬프트

```text
Create a finished black-and-white manga page titled "目次だけの夜" using two wide horizontal panels stacked vertically. The characters are fictional adult online creators and must not resemble real people or copyrighted characters.

Top panel: over-the-shoulder view of a dark-haired creator wearing cat-ear headphones and a track jacket, seated in a dim bedroom and facing a monitor. On the monitor, a pale-haired creator appears in a sparse video-call frame. Add exactly two vertical speech bubbles: the person on the monitor says "……ごめん" and the seated person says "昨日の配信の話しよ".

Bottom panel: closer three-quarter view of the pale-haired creator wearing large headphones and a light hoodie, softly holding a thin translucent booklet. Only a table of contents is visible; the other pages contain no readable body text. Faint particles of light dissolve from the pages. The dark-haired creator appears only as a tiny chibi silhouette at the lower-left edge with dot eyes. Add exactly three vertical speech bubbles: "あらすじしか残ってないんだ", "日記の目次だけ持ってるみたいな", and the chibi reply "……ワロタ".

Use clean seinen-manga linework, natural gray screentone, controlled white space, consistent clothing and headphone design across both panels, clear right-to-left reading order, and crisp natural Japanese lettering. Keep every quoted string exact. No color, no extra bubbles, no garbled glyphs, no logos, no watermarks, and no additional characters. 3:2 landscape page.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HNv679EbwAAW6Ou.jpg" width="100%" alt="정확한 일본어 대사가 있는 2단 흑백 만화"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HNv68WbaEAAKITj.jpg" width="100%" alt="정확한 일본어 대사가 있는 2단 흑백 만화"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Yasun](https://x.com/yasun_ai)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/yasun_ai/status/2079531572919996636)
- **게시일:** 2026-07-21
- **분류:** 타이포그래피 및 출판
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 14. 한 줄기 빛으로 떠오르는 수중 인물

수중 천, 자연스러운 인체, 입자 깊이, 여백과 수많은 뻗은 손에 집중한 커뮤니티 결과의 제작 재구성.

#### 프롬프트

```text
Create a vertical cinematic underwater photograph of a fictional adult woman suspended in deep dark-blue water. She wears a translucent layered white dress that drifts naturally around her body. Her long black hair fans sideways with the current. Position her in the lower-middle of the frame, looking upward and extending one arm toward a narrow shaft of white light descending from the surface. From the darkness below, many pale hands reach upward without touching her; vary their scale and focus to create depth while keeping every hand anatomically plausible. Fine bubbles and particles catch the overhead light. Use cold cyan highlights, deep navy negative space, realistic water attenuation, restrained contrast, and a quiet surreal mood. Full-body vertical composition, no gore, no extra limbs on the main subject, no text, no logos, no watermark.
```

<table><tr>
<td width="100%"><img src="https://pbs.twimg.com/media/HN0jqoUaQAAfC8i.jpg" width="100%" alt="한 줄기 빛으로 떠오르는 수중 인물"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Zidan](https://x.com/liluocheng13)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/liluocheng13/status/2079857838676209967)
- **게시일:** 2026-07-22
- **분류:** 사실적 표현과 소재 디테일
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 15. 중첩 코드 편집기와 채팅 포스터 워크플로

읽기 쉬운 UI 텍스트, 공간 깊이, 채팅 작업공간 안의 포스터 생성을 검증하는 레이어형 프롬프트.

#### 프롬프트

```text
Create a layered picture-in-picture interface scene with strong visual depth. The outer layer is a realistic VS Code programming workspace on a desktop monitor. Inside that workspace, show a Qwen-style chat application window where the user is sending the message: "Create a hand-brewed coffee poster." The assistant reply contains a polished coffee poster, and the poster remains clearly visible inside the chat window.

Keep every layer visually distinct: code editor chrome, chat sidebar, message bubbles, poster frame, toolbar buttons, timestamps, and small UI labels. Make the micro-text crisp enough to read, avoid distorted pseudo-letters, preserve realistic spacing, and use clean modern interface lighting. The coffee poster should feel like a premium specialty-cafe campaign with warm paper texture, elegant typography, roasted-bean details, and a clear headline. 16:9, high-resolution, sharp layout.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HN-ydubbcAAPs_n.png" width="100%" alt="중첩 코드 편집기와 채팅 포스터 워크플로"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HN-yelfakAAjQN9.png" width="100%" alt="중첩 코드 편집기와 채팅 포스터 워크플로"></td>
</tr></table>

#### 출처 근거

- **제작자:** [比特小师妹｜KiKi](https://x.com/bit_sister)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/bit_sister/status/2080577815376957798)
- **게시일:** 2026-07-24
- **분류:** 사실적 표현과 소재 디테일
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 17. 빈티지 코케트 참조 인물 클로즈업

정체성 보존, 사실적인 피부 질감, 올드 로즈 스타일링, 근접 편집 구도에 초점을 둔 참조 이미지 프롬프트.

#### 프롬프트

```text
Use the attached image as the main facial reference while preserving recognizable identity, natural facial proportions, facial harmony, realistic skin texture, visible pores, and subtle natural asymmetry.

Create a premium extreme close-up studio beauty portrait using a dreamy vintage coquette rendering style, translated into a richer old-rose editorial palette. Frame tightly from the upper shoulders upward. Use soft diffused key light, pearl highlights, muted rose makeup, delicate lace or satin styling, shallow depth of field, and refined film-grain texture. Keep the expression calm and natural, preserve believable eyes and hair detail, avoid over-smoothed skin, and make the result feel like a high-end magazine beauty cover rather than a plastic retouch. Square format, crisp detail.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HN5YtbNaYAAOIFV.jpg" width="100%" alt="빈티지 코케트 참조 인물 클로즈업"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HN5Yum6bAAAIApb.jpg" width="100%" alt="빈티지 코케트 참조 인물 클로즈업"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Rich · Atom Tan Studio](https://x.com/atomtanstudio)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/atomtanstudio/status/2080197723429711958)
- **게시일:** 2026-07-23
- **분류:** 사실적 표현과 소재 디테일
- **참조 이미지 필요:** 예

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 18. 반항적인 록스타 아이덴티티 편집

검증 가능한 결과 미디어와 재사용 가능한 지침으로 '반항적인 록스타 아이덴티티 편집'을 테스트하는 출처 기반 사례입니다.

#### 프롬프트

```text
Candid photography. Use facial identity, facial geometry and make-up but not original hair from [uploaded image] to create a rebellious female rockstar with an hourglass figure. Her new hair is long, blonde and professionally styled with a side-parting. She wears a strapless black sequin pencil-dress and black leather high-heels with 3 tiers of straps upto her ankle. She sits on the edge of a messy, after-party hotel bed using a confident pose which exudes authority, leaning forward slightly, direct look of disdain at camera and one finger pressing on her lower lip. 8k photorealistic head-to-toe wide framing, natural light, sharp shadows, very detailed photo, vintage film grain and shallow depth of field. Ensure facial consistency and perfect female anatomy.
```

<table><tr>
<td width="50%"><img src="https://pbs.twimg.com/media/HN1vClvW4AA8M-H.jpg" width="100%" alt="반항적인 록스타 아이덴티티 편집"></td>
<td width="50%"><img src="https://pbs.twimg.com/media/HN1vDMGWoAAHCnh.jpg" width="100%" alt="반항적인 록스타 아이덴티티 편집"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Ash](https://x.com/asheem01)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/asheem01/status/2079940712322199938)
- **게시일:** 2026-07-22
- **분류:** 참조 편집 및 복원
- **참조 이미지 필요:** 예

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 19. 정제된 수묵과 사진 조명으로 표현한 송대풍 초상

송대에서 영감을 받은 구도, 읽기 쉬운 서예, 비단 질감, 절제된 에디토리얼 컬러를 결합한 출처 기반 Qwen Image 3 포트레이트입니다.

#### 프롬프트

```text
Create a vertical close-up portrait in a refined Song-dynasty aesthetic, combining meticulous silk-based painting with photographic light. Show a young East Asian woman from the chest up, turned slightly and occupying the right two-thirds of the frame, with generous breathing room on the left. Use a very pale moon-white silk background with fine woven texture and a faint blue-gray wash. Let a delicate ink-painted plum branch enter from the upper left, softly out of focus. A gentle beam of daylight from the upper left should fall across her cheek, nose bridge, and collarbone like morning light filtered through Song-era paper windows, with a fine rim of light along her hair.

Give her luminous pale skin with visible fine texture and tiny vellus hairs, lightly brushed distant-mountain eyebrows, long slightly lifted eyes with a trace of pale rouge at the outer corners, long lashes, a calm gaze directed beyond the frame, a refined nose, full delicate lips with muted sandalwood tint, a clear jawline, long neck, and subtly visible collarbones. Her expression sits between composure and quiet pride, never coquettish or empty. Style her hair in a low, loose coiled bun with a few wind-lifted strands, black with a cool blue sheen. Add one plain silver hairpin, a small pearl flower, one pearl earring, and a tiny pearl forehead ornament; no heavy headdress.

    Dress her in a moon-white bandeau and a pale aqua-blue straight-collar robe with a deep blue-green edge and extremely realistic woven texture. Let one apricot blossom fall onto her shoulder and two or three petals hover softly beside her, suggesting wind. In the left negative space, render the vertical Chinese calligraphic inscription 淡妆浓抹总相宜 in thin brown-gold regular script with a small vermilion seal. Keep the palette low-saturation moon white, aqua, and light sandalwood; lips and seal are the only warm accents. Use coherent soft Rembrandt-like light, very shallow depth of field, sharp eyes, ultra-detailed skin and fabric, 8K detail, and a quiet, contemporary portrait-photography breath within Song painting stillness.
```

<table><tr>
<td width="100%"><img src="https://pbs.twimg.com/media/HN1YAvkagAAoW3N.jpg" width="100%" alt="정제된 수묵과 사진 조명으로 표현한 송대풍 초상"></td>
</tr></table>

#### 출처 근거

- **제작자:** [岚叔](https://x.com/LufzzLiz)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/LufzzLiz/status/2079925505634234856)
- **게시일:** 2026-07-22
- **분류:** 참조 편집 및 복원
- **참조 이미지 필요:** 아니요

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

### 20. 빗방울 맺힌 잡지 표지와 유리 체스 나이트

정확한 표지 타이포그래피, 반사 유리, 투명 오브젝트와 야간 에디토리얼 조명을 결합한 출처 기반 Qwen Image 3 출판 사례입니다.

#### 프롬프트

```text
Create a vertical 4:5 photorealistic fashion-editorial magazine cover photographed through rain-speckled glass at night. Use the uploaded reference image for the transparent glass chess knight and preserve its exact silhouette, bevels, internal reflections, and scale. Place the knight on a dark walnut table with a soft city-light bokeh beyond the glass. At the top, render the exact masthead “LOOK CLOSER.” in a clean condensed serif. Add the exact small cover lines “ONE PROMPT. ZERO FIXES.” and “JULY 2026 · ISSUE 03” with precise spacing and readable punctuation. Use cool blue street reflections, a narrow warm key light on the knight, realistic droplets in the foreground, and balanced negative space. Keep all typography crisp and correctly spelled. No extra cover lines, fake logos, melted glass, duplicated chess pieces, or watermarks.
```

<table><tr>
<td width="100%"><img src="https://pbs.twimg.com/media/HN2kFdfWsAEQTO-.jpg" width="100%" alt="빗방울 맺힌 잡지 표지와 유리 체스 나이트"></td>
</tr></table>

#### 출처 근거

- **제작자:** [Ivana](https://x.com/ivanainai)
- **공식 쇼케이스:** [Qwen Image 3.0](https://x.com/ivanainai/status/2080000842959106328)
- **게시일:** 2026-07-22
- **분류:** 타이포그래피 및 출판
- **참조 이미지 필요:** 예

**[ImagineVid에서 이 프롬프트 사용](https://imaginevid.io/ko/ai-image-generator)**

---

<a id="contribute"></a>

## 기여하기

Qwen Image 3.0을 명시하고 재사용 가능한 프롬프트, 원문 출처, 확인 가능한 결과 미디어를 갖춘 사례만 제출해 주세요.

[검증된 프롬프트 제출](https://github.com/imagineVid/Awesome-qwen-image-3-0-prompts-and-skills/issues/new?template=submit-prompt.yml)

<a id="license-and-attribution"></a>

## 라이선스 및 출처

ImagineVid가 작성한 코드, 제작 프롬프트 재구성, 번역 및 편집 문구는 CC BY 4.0으로 제공됩니다. Qwen 공식 사례와 미디어의 권리는 각 소유자에게 있으며 공식 출시 글로 연결됩니다. Qwen과 Alibaba는 각 소유자의 상표입니다. 이 독립 컬렉션은 양사와 제휴하거나 보증받지 않았습니다.

ImagineVid를 위해 Rowan Hale가 큐레이션했습니다.
