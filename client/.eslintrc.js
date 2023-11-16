module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    
    "overrides": [
        {
            "files": ["./src/*"],
			"env": {
				"browser": true,
				"es2021": true
			},
            "rules": {
                "indent": ["error", "tab"],
                "linebreak-style": ["error", "windows"],
                "quotes": ["error", "double"],
                "semi": ["error", "always"],
                "prettier/prettier": ["error", { "semi": true }]
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ]
}
