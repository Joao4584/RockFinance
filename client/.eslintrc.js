module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
		{
			"files": ["./src/*"],
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
				]
			}
		},
	],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
}
