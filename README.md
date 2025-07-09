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
To add new version of documentation run command
```
npx docusaurus docs:version 1.2.3
```
The openapi version must be set manually.<br/>
Create new specification file in `openapi/redocusaurus` folder.<br>
In `docusaurus.config.js` file add new spec config in `redocusaurus` section,
then edit `docs/openapi.mdx` using new `id` and `route`.

 > ⚠ The `id` must be same as `filename` without extension,
 > due to automatic download link generation.

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
