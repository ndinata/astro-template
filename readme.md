# Astro starter template

```sh
pnpm create astro@latest --template ndinata/astro-template#with-tailwindcss
```

This is the version of the [`ndinata/astro-template`](https://github.com/ndinata/astro-template)
starter project with additional [Tailwind CSS](https://tailwindcss.com) setup
out-of-the-box.

## Project structure

The project structure is similar to that of a default basic Astro project, but
with the extra ESLint and Prettier config files.

`./src/styles/global.css` is the main CSS entrypoint of the site and is imported
by the base `src/layouts/Layout.astro` file.

To learn more about the folder structure of an Astro project, refer to
[Astro's guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Commands

All commands are run from the root of the project:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm lint`      | Runs `eslint` on `./src/`                        |
| `pnpm fmt-check` | Runs `prettier --check` on the project root      |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Learn more

Feel free to check [Astro's documentation](https://docs.astro.build).
