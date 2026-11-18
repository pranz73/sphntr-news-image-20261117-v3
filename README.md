# sphntr-news-image-20261117-v3

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/pranz73/sphntr-news-image-20261117-v3/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/pranz73/sphntr-news-image-20261117-v3/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

**The Midnight Wire** — a bold tabloid-poster edition that sums up the world news of Tuesday, 17 November 2026 in one 1024×1024 image. Cream paper, near-black ink and a single red accent, with giant condensed display type throughout. The Shenzhen trilateral summit leads under a drawn illustration of three silhouetted leaders at a summit table beneath three flags; the day's other stories run as bold poster blocks, each with its own drawn inline SVG illustration — a tanker and a naval mine in the Strait of Hormuz, missile arcs over Kyiv, a sun-and-leaf mark for the COP31 deal in Antalya, a crossing gate for Gaza, a microchip for the US AI chip export ban, a virus particle for the Congo Ebola outbreak and cricket stumps for the U19 Asia Cup final — with the day's biggest numbers (40 · $120bn · 11,000) blown up huge in red. A thin world strip-map along the bottom pins Shenzhen, the Strait of Hormuz, Kyiv, Antalya, Gaza and DR Congo. The design is authored as self-contained HTML and CSS in `page.html` with all artwork as inline SVG — no external assets, no photographs, no AI-generated imagery. `render.mjs` screenshots it with a headless Chromium shell; `main.ts` (Node standard library only) copies `entry.png` into the directory named by `MAKEFUN_OUTPUT_DIR`, or `/output` when the variable is unset.

## Run it

```sh
node render.mjs && node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
