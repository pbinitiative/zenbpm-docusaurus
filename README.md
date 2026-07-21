# ZenBPM Documentation

This repository builds and publishes the **ZenBPM documentation website** using
[Docusaurus](https://docusaurus.io/). It pulls Markdown content from the main
[zenbpm](https://github.com/pbinitiative/zenbpm) repository, renders the OpenAPI
and proto API references, and deploys the finished site.

📖 **Read the docs:**

[ZenBPM Documentation Website](https://zenbpm.pbinitiative.org/)

## ⚠️ Where to edit documentation

**Do not edit documentation content in this repository.**

This repo only *builds and publishes* the site. All documentation content lives in
the [`docs/` folder of the main zenbpm repository](https://github.com/pbinitiative/zenbpm/tree/main/docs).

Edit it there - changes merged into the `main` branch of `zenbpm` are synced into
this repository and deployed automatically.

## Documentation rules

Structure content into four distinct types (based on the
[Diátaxis](https://diataxis.fr/) framework) and don't mix them:

- **Tutorials** - guided, step-by-step learning for beginners.
- **How-to guides** - goal-focused tasks with clear, concise steps.
- **Reference** - factual, structured lookup. No instructions or theory.
- **Explanations** - background and "why" context. No procedures or specs.

## Run the site locally

Requires [Node.js](https://nodejs.org/). Running locally lets you preview live
changes from `zenbpm/docs`.

By default, this expects the ZenBPM repository to be cloned in a folder named
`zenbpm` next to this repository:

```
parent/
├── zenbpm/                 # main repo (docs content)
└── zenbpm-docusaurus/      # this repo
```

If the main repository lives elsewhere, set its path in a `.env` file:

```
ZENBPM_SRC=/path/to/zenbpm
```

Then start the preview:

```
npm install
npm run preview
```

## Versioning

To publish a new version of the documentation, run:

```
npm run version -- v1.2.3
```

This automatically:

- Copies the current OpenAPI spec and proto file with a version suffix.
- Creates the Docusaurus docs version.
- Updates versioned docs to reference the version-specific specs.

`docusaurus.config.js` dynamically generates the redocusaurus spec entries from
`versions.json`.

## Publishing

Deployment is automatic. Documentation from the `docs/` folder of the `zenbpm`
repository's `main` branch is pushed into this repository, and any change to this
repository's `main` branch is deployed to the live site.
