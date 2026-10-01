# 幼兒園安心查 — 全台幼兒園裁罰與收費查詢地圖

Independent, ad-free browser tool by [Upliftorch](https://upliftorch.com/).

[線上使用 / Official demo](https://upliftorch.com/tools/preschool-map/) · [更多免費工具 / Free tools](https://upliftorch.com/tools)

## 功能與執行 / Usage

此專案公開瀏覽器端功能，不包含 Upliftorch 私有後端。原本的公司 API 已改為本機 `http://localhost:7001`（閒人地圖使用 7010 / 7011）；請自行提供相容 API，或調整程式中的 API URL。離線或缺少後端時，資料查詢、登入、回報及提交功能可能無法使用。

This is the browser frontend, not the private Upliftorch backend. Configure your own compatible API endpoints before using server-dependent features.

使用任何靜態 HTTP server 提供此資料夾，例如：

```sh
npx --yes http-server . -p 8080 -c-1
```

Open `http://localhost:8080/`. Files are not sample customer uploads. This repository contains only the selected tool frontend and required local assets.

## Privacy / 隱私

- Removed advertising loaders, placements, ad account identifiers and tracking scripts.
- No personal identity, customer records, environment files, deployment credentials, account tokens or original Git history are included.
- Do not commit user-entered files, passwords, spreadsheet contents or credentials.
- External libraries, data providers and configured APIs can receive requests; local processing does not mean zero network activity.
- Public datasets are not bundled. Any existing public data-feed URLs remain dependencies, not a promise of continued availability or a license to redistribute the data.

## License

Upliftorch-authored source is MIT licensed; see [LICENSE](LICENSE). Third-party libraries, map tiles, data and optional media retain their upstream terms; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). The MIT license does not grant trademark rights or override third-party licenses.

## About Upliftorch

[Upliftorch 官網](https://upliftorch.com/) — tools and software development. The links above identify the original creator and official demo; they are not a search-ranking guarantee.
