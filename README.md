# Open Packing Dataset

https://getty708.github.io/open-pack-dataset/

## Dataset Description

OpenPack is an open access logistics-dataset for human activity recognition, which contains human movement and package information from ten subjects. The package information includes the size and number of items included in each packaging task. While the human movement information is subdivided into three types of data, acceleration, physiological, and depth-sensing.

In the "Humanware laboratory" at IST Osaka University, with the supervision of industrial engineers, an experiment to mimic logistic center labor was designed. Workers with previous packaging experience performed a set of packaging tasks according to an instruction manual from a real-life logistic center, during the experiment subjects were recorded using Lidar, Kinect, and Realsense depth sensors performing packing operations while also wearing four IMU devices and 2 Empatica E4 wearable sensors. Each subject was tasked with performing 20 packing jobs on 5 separate sessions for a total of 100 jobs. Approximately 50 hours of packaging operations have been labeled into 8 global operation classes and 17 sub-classes for this dataset.

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
