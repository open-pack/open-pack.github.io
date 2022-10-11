# OpenPack Dataset - Official Website

## Build Setup

```bash
# clone this repo and switch to dev branch
$ git clone git@github.com:open-pack/web-dev.git
$ git checkout -b dev origin/dev

# install dependencies
$ npm install

# If you are using node>=17.x.x, set `NODE_OPTIONS` variable to avoid errors.
# (for macos/linux)
$ export NODE_OPTIONS=--openssl-legacy-provider
# (for powershell)
>> $ENV:NODE_OPTIONS="--openssl-legacy-provider"

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Dev Settings

### VSCode Extention

- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
