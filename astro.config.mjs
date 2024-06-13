import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import siteInfo from "./src/EDIT_ME/site_info.json";

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: siteInfo.domainName,
  // base: siteInfo.basePath,
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
});
