import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/jsx-indent": [2, 2], // Enforce 2 spaces for JSX indentation
      "react/jsx-indent-props": [2, 2], // Enforce 2 spaces for props indentation
      "indent": [2, 2, {"SwitchCase": 1}], // Enforce 2 spaces for general indentation
      "react/jsx-closing-bracket-location": [2, "line-aligned"], // Align closing brackets
      "react/jsx-tag-spacing": [2, {"beforeSelfClosing": "always"}], // Add space before self-closing tags
      "@next/next/no-img-element": "off"
    },
  },
];

export default eslintConfig;
