/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,tsx,jsx,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
