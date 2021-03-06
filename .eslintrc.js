
module.exports = {
	parser: '@typescript-eslint/parser',
	globals: {
		process: true,
	},
	env: {
		es6: true,
		browser: true,
	},
	parserOptions: {
		ecmaFeatures: { jsx: true },
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react-hooks'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'prettier/prettier': [2, { useTabs: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};