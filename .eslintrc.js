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
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "project": "./FreeBoard/tsconfig.json",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
        
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off"
    }
}
