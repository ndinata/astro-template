/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
  // This needs to point to the site's CSS entrypoint file.
  tailwindStylesheet: "./src/styles/global.css",
};
