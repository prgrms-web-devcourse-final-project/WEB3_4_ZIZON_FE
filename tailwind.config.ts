import type { Config } from 'tailwindcss';
import 'tailwindcss-preset-px-to-rem';
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
  presets: [],
} satisfies Config;
