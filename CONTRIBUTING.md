## Rules to follow for a good PR
- Start a new branch from master
- Make sure that your PRs do not contain unnecessary commits or merge commits
- Use Prettier to format the files you changed before committing
- Try to give extra care to your commit messages

## Tools for your preferred editor to install
- [EditorConfig](https://editorconfig.org/)
- [Prettier](https://prettier.io/docs/en/editors.html) with the following settings:
```bash
# Atom config.cson
"prettier-atom":
  prettierOptions:
    arrowParens: "always"
    bracketSpacing: false
    printWidth: 100

# VS Code User Settings
"prettier.arrowParens": "always",
"prettier.bracketSpacing": false,
"prettier.printWidth": 100
```
