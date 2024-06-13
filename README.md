# Simple Resume Template for Astro

Simplistic text-based resume template utilizing Markdown and [Tailwind CSS](https://tailwindcss.com). Built with [Astro](https://astro.build).

Focused with ease-of-use in mind, you can easily modify all your information from one central location, with the help of Markdown for formatting.

# Site deployment

There is already a workflow file included for deploying the site to Github Pages (this is what was used to deploy the demo site): `.github/workflows/deploy.yml`. If you are not deploying your site to Github Pages, feel free to remove this file, as well as the `.nojekyll` file. Otherwise, look at the [Astro documentation](https://docs.astro.build/en/guides/deploy/github/) for more details on how to deploy your Astro site to Github Pages.

## Running Prettier

In the command line, `cd` into your root folder, or the folder with content you want to format and run:

```
npx prettier --write .
```

## 📖 Handy resources

- [Astro documentation](https://docs.astro.build/en/getting-started/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs/installation)
- [Prettier plugin for Astro](https://github.com/withastro/prettier-plugin-astro)
- [Last updated time plugin tutorial](https://docs.astro.build/en/recipes/modified-time/)
- [Dark/light mode toggle tutorial](https://docs.astro.build/en/tutorial/6-islands/2/#add-client-side-interactivity)
