# Open Packing Dataset

https://getty708.github.io/open-pack-dataset/


## Project setup

### For Mac

Procedure

Install nodebrew by:

```bash
brew update
brew install nodebrew
echo 'export PATH="${HOME}/.nodebrew/current/bin:${PATH}" >> ~/.bash_profile'
source ~/.bash_profile
nodebrew
# >> nodebrew 1.1.0
```

Install Node.js by:

```bash
nodebrew install-binary stable 
nodebrew list
nodebrew use stable
nodebrew list
# >> v16.13.2
# >> current: v16.13.2
```

Note: If you got error with curl, please try this command `$ mkdir -p ~/.nodebrew/src`.

Install required packages by:

```
npm install
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
