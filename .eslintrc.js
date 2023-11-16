module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [
		{
			"files": ["src/**/*", "client/src/**/*"],
			"env": {
				"browser": true,
				"es2021": true
			},
			"rules": {
				"indent": [
					"error",
					"tab"
				],
				"linebreak-style": [
					"error",
					"windows"
				],
				"quotes": [
					"error",
					"double"
				],
				"semi": [
					"error",
					"always"
				],
				'@typescript-eslint/ban-ts-comment': 'off',
			}
		},
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "12",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],

};
