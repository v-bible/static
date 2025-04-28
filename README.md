<!-- prettier-ignore -->
> [!WARNING]
> **Archived**: The repo has moved to
> https://huggingface.co/datasets/v-bible/bible
> repository.

<div align="center">

  <h1>Static</h1>

  <p>
    Data for v-bible app
  </p>

<!-- Badges -->
<p>
  <a href="https://github.com/v-bible/static/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/v-bible/static" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/v-bible/static" alt="last update" />
  </a>
  <a href="https://github.com/v-bible/static/network/members">
    <img src="https://img.shields.io/github/forks/v-bible/static" alt="forks" />
  </a>
  <a href="https://github.com/v-bible/static/stargazers">
    <img src="https://img.shields.io/github/stars/v-bible/static" alt="stars" />
  </a>
  <a href="https://github.com/v-bible/static/issues/">
    <img src="https://img.shields.io/github/issues/v-bible/static" alt="open issues" />
  </a>
  <a href="https://github.com/v-bible/static/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/v-bible/static.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://github.com/v-bible/static/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/v-bible/static">Documentation</a>
  <span> · </span>
    <a href="https://github.com/v-bible/static/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/v-bible/static/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
- [Usage](#eyes-usage)
  - [Scripts](#scripts)
  - [Data Structure](#data-structure)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses [pnpm](https://pnpm.io/) as package manager:

```bash
npm install --global pnpm
```

Playwright:

Run the following command to download new browser binaries:

```bash
npx playwright install
```

<!-- Run Locally -->

### :running: Run Locally

Clone the project:

```bash
git clone https://github.com/v-bible/static.git
```

Go to the project directory:

```bash
cd static
```

Install dependencies:

```bash
pnpm install
```

<!-- Usage -->

## :eyes: Usage

### Scripts

- `generate-bible.js`: Generate markdown from data

> [!NOTE] > [v-bible/backend](https://github.com/v-bible/backend) is required to run this
> script

```bash
node ./scripts/generate-bible.js
```

- `generate-version.js`: Generate version metadata for `versions` folder.

```bash
node ./scripts/generate-version.js
```

- `generate-search-index.js`: Generate search index for `fuse.js` (**Removed**).

### Data Structure

- `calendar`: Generated Liturgical calendars using
  [v-bible/js-sdk](https://github.com/v-bible/js-sdk).

- `data/proper-names.json`: Name translation from
  [ktcgkpv.org](https://ktcgkpv.org/), generated from
  [v-bible/bible-scraper](https://github.com/v-bible/bible-scraper).

- `liturgical`: Liturgical data from [The Lectionary for Mass (1998/2002 USA
  Edition)](https://catholic-resources.org/Lectionary/1998USL.htm) compiled by Felix
  Just, S.J., Ph.D., generated from
  [v-bible/bible-scraper](https://github.com/v-bible/bible-scraper).

- `versions`: Generated bible using `generate-bible.js`.

<!-- Roadmap -->

## :compass: Roadmap

- [ ] Add YOUCAT data.

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/v-bible/static/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=v-bible/static" />
</a>

Contributions are always welcome!

Please read the [contribution guidelines](./CONTRIBUTING.md).

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the [Code of Conduct](./CODE_OF_CONDUCT.md).

<!-- License -->

## :warning: License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** License.

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

See the **[LICENSE.md](./LICENSE.md)** file for full details.

<!-- Contact -->

## :handshake: Contact

Duong Vinh - [@duckymomo20012](https://twitter.com/duckymomo20012) -
tienvinh.duong4@gmail.com

Project Link: [https://github.com/v-bible/static](https://github.com/v-bible/static).

<!-- Acknowledgments -->

## :gem: Acknowledgements

Here are useful resources and libraries that we have used in our projects:

- [bible.com](https://www.bible.com/): bible.com website.
- [biblegateway.com](https://www.biblegateway.com/): biblegateway.com website.
- [ktcgkpv.org](https://ktcgkpv.org/): Nhóm Phiên Dịch Các Giờ Kinh Phụng Vụ
  website.
- [The Lectionary for Mass (1998/2002 USA
  Edition)](https://catholic-resources.org/Lectionary/1998USL.htm): compiled by
  Felix Just, S.J., Ph.D.
