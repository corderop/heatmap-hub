/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
