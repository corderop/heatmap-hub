module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
	extends: ["plugin:json/recommended"],
  overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {},
		},
		{
      files: ["*.jsx", "*.tsx"],
      extends: "plugin:react/recommended",
			rules: {
				"react/react-in-jsx-scope": "off", // Disabled for React 17+
			}
    },
    {
			files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      extends: "standard-with-typescript",
      parserOptions: {
				project: "./tsconfig.json",
      },
			rules: {
				"@typescript-eslint/no-floating-promises": "off",
				"@typescript-eslint/no-misused-promises": "off",
				"@typescript-eslint/no-dynamic-delete": "off",
				"@typescript-eslint/no-extraneous-class": "off",
			}
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
	
};
