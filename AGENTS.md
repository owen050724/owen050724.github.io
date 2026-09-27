# Repository Handoff for Editing Agents

This repository is the source for Yeonoh Park's public academic security research website. Preserve its conservative disclosure posture, Jekyll architecture, and restrained research-oriented design.

## Stack and source files

- The site uses Jekyll, the Minima theme, Markdown/HTML, custom SCSS, and minimal vanilla JavaScript.
- Global metadata and theme configuration live in `_config.yml`.
- `_layouts/default.html` is the shared page shell.
- `_includes/sidebar.html` owns desktop and mobile navigation markup.
- `assets/main.scss` owns the visual system and responsive behavior.
- `assets/site.js` owns progressive enhancement for the mobile drawer and the short hero typing effect.
- `_site/` is generated output. It is ignored by Git and must not be edited or committed.
- `AGENTS.md` is an internal editing handoff and is excluded from the generated public site.
- There is no custom deployment workflow in this repository. Do not change GitHub Pages deployment behavior without an explicit request.

## Route and content map

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `index.md` | Concise identity, key outcomes, and three representative works |
| `/vulnerabilities/` | `vulnerabilities.md` | Authoritative public vulnerability research record |
| `/vulnerabilities/<cve-id>/` | `vulnerabilities/<cve-id>/index.md` | Technical write-ups for the four published findings |
| `/publications/` | `publications.md` | Academic publications, proceedings, and award certificate |
| `/research/` | `research.md` | Research interests and high-level methodology |
| `/honors/` | `honors.md` | Chronological awards and honors |
| `/about/` | `about.md` | Education, affiliations, and interests |
| `/contact/` | `contact.md` | Professional contact links and secondary social profiles |

When adding or changing a route, update the shared sidebar once instead of copying navigation into pages. Preserve each page's explicit permalink and active-page `aria-current` behavior.

Published write-ups use `_layouts/writeup.html`. The four current routes are `cve-2026-57590`, `cve-2026-73068`, `cve-2026-94609`, and `cve-2026-84677`. Link to them with `Technical write-up` before the external record links; internal links open in the same tab. Keep the Vulnerability Research sidebar item active with `aria-current="location"` on detail routes, and `aria-current="page"` on the index. Each write-up includes a breadcrumb and a return link to its existing record anchor. Do not add a separate sidebar menu for details.

Homepage Selected Work entries deep-link to stable detail anchors. Preserve the CVE/GHSA record IDs in `vulnerabilities.md` and the `messenger-based-local-ai-agent-security` publication ID, or update every inbound link in the same change.

## Public vulnerability facts

Treat `vulnerabilities.md` as the current public source of truth. At this handoff, the public summary is:

- 14 vendor-confirmed outcomes
- 6 findings with CVE identifiers (published or reserved)
- 40 researched products/workspaces
- 1 conference paper award on the homepage outcome strip

The fourteen outcomes are eight identified representative outcomes plus six anonymous coordinated outcomes; each finding counts once regardless of CVE assignment or timeline milestones. Current representative wording must remain conservative:

- Dify, CVE-2026-59210: Accepted; fix shipped since 1.16.0 and remains in 1.17.0 based on release-lineage review and focused local verification; CVE reserved; advisory/CVE publication pending; Medium 6.3.
- Apache DolphinScheduler, CVE-2026-57590: Vendor confirmed with reporter credit; advisory and CVE published September 24 with Finder credit. Apache's advisory rates it Low without a numeric score, while CISA-ADP rates it High 8.1 (CVSS 3.1). Display both evaluations with their sources together; do not attribute the 8.1 score to Apache or NIST. Follow the published CVE Details: Apache lists versions before 3.4.3 as affected and recommends 3.4.3. Attribute this remediation claim to Apache without claiming independent runtime verification; do not publish private fix follow-up details. CVE-2026-66082 remains vendor confirmed with reporter credit, reserved, with severity, remediation, and advisory details pending.
- ToolJet, GHSA-2jhv-482p-4php: Accepted and published; the report currently lists CVE-2026-73068 and rates it Moderate 6.8 (CVSS 3.1). Attribute 6.8 and the technical explanation to this linked GHSA. The official CVE record has different references, but the user requests that the public site retain its established CVE/GHSA pairing without a discrepancy note or another identifier. Do not imply that the CVE record independently verifies this report. Preserve the old non-visible inbound anchor without adding its identifier to visible copy. The fix commit is absent from `v3.20.206-lts` and present in the official August 4 `v3.20.207-lts` release, so remediation may be described as source-verified and released in `v3.20.207-lts`; patched-release runtime verification has not been repeated. Keep the report's GHSA anchor for inbound links.
- ToolJet, separate CVE-pending outcome: Accepted September 2 with reporter credit; remediation, CVE assignment, public severity, and advisory publication pending. Do not expose the private advisory identifier, technical title, draft score, endpoints, or affected versions.
- Grafana via Intigriti: Accepted; vendor-final Medium 4.3; $656 bounty; CVE, remediation, and advisory coordination pending.
- authentik, CVE-2026-94609 / GHSA-h6c5-mpvq-j4jc: Vendor validated on August 28 after a July 29 report and consolidated it into the canonical advisory, published September 9. The public advisory gives High 8.8 (CVSS 3.1), lists 2026.2.7, 2026.5.7, and 2026.8.2 as patched, and credits @owen050724 as Reporter. Independent patched-release verification has not been recorded. The original private report is not a separate CVE or additional vendor-confirmed outcome. Do not expose private advisory identifiers or unpublished report details.
- Jenkins, CVE-2026-84677: Published in the September 2 Jenkins security advisory as a stored XSS vulnerability in update-center2; affects 3.18.3 and earlier and is fixed in 3.18.4; public Medium 5.4; reporter credit published. Its official title, affected range, fixed release, and reporter attribution may be shown because the vendor advisory is public. Keep non-public report and patch details withheld.

For the six anonymous coordinated outcomes, expose only these aggregate ratings: High 7.1, Medium 6.1, Medium 5.7, Moderate without a numeric score, and two vendor ratings pending. The additional outcome was recognized by its vendor as a valid first submission with a bounty decision by September 13; severity, CVE, and advisory remain pending under coordinated disclosure. Do not identify its vendor or product publicly. A separate report submitted September 2 remains under vendor review and changes only the aggregate submission count; do not identify it or infer vendor confirmation. In the timeline, keep each date's event type explicit: DolphinScheduler CVE-2026-57590 is a September 24 advisory-publication date; authentik is a September 9 advisory-publication date and August 28 vendor-validation date; Jenkins is a September 2 advisory-publication date; the separate ToolJet outcome is a September 2 acceptance date; Dify has a September 2 fix-release verification; ToolJet's GHSA publication is dated August 7 and its source-verified fix release August 4; Grafana is an acceptance date; and the DolphinScheduler/Dify original entries are report-submission dates. Keep current status in the separate detail text.

If any metric changes, audit every occurrence across the homepage and vulnerability page so totals remain consistent.
The homepage Key Outcomes strip shows only the 6 findings with CVE IDs, 14 vendor-confirmed outcomes, and 1 conference paper award. The vulnerability page's Research Summary shows 14 vendor-confirmed outcomes, 6 findings with CVE IDs, and 40 products/workspaces in three columns. Submitted-report volume is not displayed.

Never:

- strengthen `Confirmed` into `Accepted`, `Fix recorded` into `Fixed`, or `Reserved` into `Published` without explicit newer vendor or publication evidence;
- convert pending status into confirmed status;
- invent CVSS scores, titles, affected endpoints, report IDs, exploit chains, PoC details, or release metadata;
- identify vendors or products behind the six anonymous coordinated outcomes;
- treat researcher-proposed severity as vendor-final severity.
- infer validation, acceptance, a fix, or a CVE decision from private tracker assignment, sprint, priority, review, or credit-field metadata alone.

If a separate local `Vuln-analysis` repository is available, it is a read-only factual reference. Never modify, add, delete, rename, or generate files inside it, and never copy unpublished technical material into this public repository.

## Publications, honors, and links

- The 2026 paper entry links to the conference proceedings/program-book notice at `https://dcs.or.kr/conference/summer2026/notice/article/1086` and the local certificate PDF.
- Do not restore the separate award-announcement link unless explicitly requested.
- Certificate source: `assets/documents/2026-kdcs-gold-prize-certificate.pdf`.
- The 2022 Busan Future Scientist Award links to its official Hall of Fame record at `https://www.fobst.org/kor/Ability/Ability0403.php?years=2022&idx=15305`.
- Preserve GitHub, LinkedIn, email, ToolJet NVD, authentik advisory, DolphinScheduler CVE/NVD, Discord, and Instagram links. Keep Discord and Instagram secondary to professional contact channels.
- On the vulnerability page, keep record titles as text. For each published CVE, place links in the `entry-links` row below its metadata in this order: NVD, CVE, then Vendor advisory when public; label the ToolJet GHSA link as its report. Do not add fix-release links or links to reserved or private records.
- For published vulnerability records, use the paragraph for a short public-advisory-backed explanation of the cause and impact. Keep chronology in the timeline and status, remediation, and severity in metadata. Do not display Credit metadata for published findings; their public sources remain linked. Keep unpublished records at approved status level only.
- Technical write-ups explain the public cause, expected boundary, impact, and remediation with primary-source links. Local reports are read-only corroboration, not permission to publish their private contents. Do not include private identifiers, correspondence, local filesystem paths, payloads, reproduction instructions, or operational exploit details. Distinguish vendor-reported fixes, source review, and runtime verification.
- Organize write-ups around the documented research question, interpretation of evidence, alternative explanations, and justified impact limits. Use case-specific narrative sections rather than an empty Proof of Concept section or a repeated generic report template. Distinguish the original research's recorded validation from any work done while editing the article; do not invent a first-discovery chronology. The private methodology may inform the reasoning, but keep its search heuristics, internal stages, tooling, prompts, and evaluation machinery out of public copy.
- External links opened in a new tab must use `target="_blank" rel="noopener noreferrer"`.
- Use Liquid `relative_url` for internal routes and assets. Encode `&` as `&amp;` in HTML query strings.
- Do not invent a direct paper PDF or proceedings item URL. The current conference page is a proceedings/program-book landing page.

## Design and accessibility invariants

- Keep the desktop sidebar restrained and persistent; use the drawer below the existing `899px` breakpoint and preserve the supporting `640px` and `390px` responsive rules.
- Navigation must remain usable without JavaScript. The document starts with `no-js`, and `assets/site.js` changes it to `nav-enhanced` only after drawer initialization succeeds.
- Preserve Escape-to-close, focus trapping/restoration, background `inert`/`aria-hidden`, scroll locking, destination-click close behavior, and 44px mobile targets.
- Preserve visible focus styles, logical heading order, one primary `h1` per page, meaningful landmarks, and `prefers-reduced-motion` handling.
- Keep ordinary content free of horizontal scrolling at approximately 1440px, 1024px, 768px, and 390px.
- Prefer typography, whitespace, and separators over additional cards, gradients, badges, or animation.

## Editing and validation workflow

1. Inspect `git status` and the relevant source files before editing. Preserve unrelated user changes.
2. Edit Jekyll source only; never use `_site/` as an input or commit it.
3. Compare vulnerability wording against the current public source before and after changes.
4. When the local bundle is available, run:

   ```sh
   bundle exec jekyll build
   ```

5. Verify all seven main routes and the four write-up routes, internal links, the certificate PDF, page titles, active navigation, and mobile drawer behavior.
6. Run at minimum:

   ```sh
   git diff --check
   git status --short
   git ls-files '_site/**'
   ```

   The final command should produce no output.

`Gemfile.lock` currently pins `github-pages` 232 and the `x86_64-linux-gnu` platform. The local Apple Silicon/Ruby 4 environment may not install that historical toolchain cleanly. Do not regenerate the lockfile merely to make a local preview work, and do not commit temporary preview builders, dependency directories, logs, or generated HTML as a workaround.
