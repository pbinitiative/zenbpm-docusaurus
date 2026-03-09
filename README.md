# ZenBPM Documentation

This is a service repository only.<br>
All changes of documentation must be made in `https://github.com/pbinitiative/zenbpm/actions` repository, `docs` directory.

## Documentation rules
- Separate your docs into four types: tutorials, how‑to guides, reference, and explanations - don’t mix them
- Use **tutorials** for guided learning, step‑by‑step for beginners 
- Use **how‑to** guides for goal‑focused tasks with clear, concise steps
- Use **reference** for factual, structured lookup—no instructions or theory.
- Use **explanations** for background and “why” context—no procedures or specs

## Versions
To add a new version of documentation, run:
```
npm run version -- v1.2.3
```
This automatically:
- Copies the current OpenAPI spec and proto file with version suffix
- Creates the Docusaurus docs version
- Updates versioned docs to reference version-specific specs

The `docusaurus.config.js` dynamically generates redocusaurus spec entries from `versions.json`.

## Run local
Using node.js, you can see live changes from `zenbpm/docs`.<br>
If the ZenBPM repository is cloned inside the folder `zenbpm` next to this repository, you can just run the
commands.<br>
In case the main repository is in another path, please define the path in the `.env` file as `ZENBPM_SRC`.

```
npm install
npm run preview
```

## Publishing
Changes of documentation in `main` branch will be automatically deployed.
Documents from the `docs` folder in the ZenBPM repository's `main` branch will be automatically pushed into this
repository.
