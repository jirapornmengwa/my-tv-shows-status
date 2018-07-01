- Install [EditorConfig](https://editorconfig.org/) on your preferred editor
- Install [Prettier](https://prettier.io/docs/en/editors.html) on your preferred editor
- Before committing use Prettier to format the files you changed with the following settings:

```bash
# Atom config.cson
"prettier-atom":
  prettierOptions:
    arrowParens: "always"
    bracketSpacing: false
    printWidth: 100

#VS Code User Settings
"prettier.arrowParens": "always",
"prettier.bracketSpacing": false,
"prettier.printWidth": 100
```
