# react-native-image-uploader [![NPM version](https://badge.fury.io/js/react-native-image-upload.svg)](https://npmjs.org/package/react-native-image-uploader) [![Build Status](https://travis-ci.org/Redmond%20Perez/react-native-image-upload.svg?branch=master)](https://travis-ci.org/Redmond%20Perez/react-native-image-upload)

> React Native module that uses Expo functions to Open Camera and Camera Roll and also upload to API using react-native-api-client-wrapper

## Dependencies
> Pure React Native Project compiled by Expo
```sh
$ npm install --save react-native-api-client-wrapper
```


## Installation

```sh
$ npm install --save react-native-image-uploader
```

## Usage

```js
import { ImageUploader } from 'react-native-image-uploader'

openCamera = async () => {
  /**
   * 
   * @param {*} aspectratio should be an array ex. [1,1] [3,4]
   */
  ImageUploader.openCamera(aspectratio).then((result) => {
    /** result
     * Object {
     * base64: base64code,
     * cancelled: false
     * height: 123,
     * type: image
     * uri: directoryfromstorage
     * width: 123
     * }
     */
    }).catch((error) => {
    //error
    })
}

openCameraRoll = async () => {
  /**
   * 
   * @param {*} aspectratio should be an array ex. [1,1] [3,4]
   */
  ImageUploader.openCameraRoll(aspectratio).then((result) => {
    /** result
     * Object {
     * base64: base64code,
     * cancelled: false
     * height: 123,
     * type: image
     * uri: directoryfromstorage
     * width: 123
     * }
     */
    }).catch((error) => {
    //error
    })
}

uploadtoAPi(base64) {
  let url = 'https://api.imgur.com/3/image';
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'this is your Token'
  };
  let params = {
    image: base64,
  };

    ImageUploader.uploadtoServer(url, headers, params).then((response)  => {
      //response
    }).catch((error) => {
      //error
    })
}

```

## License

ISC © [Redmond Job V. Perez](https://bitbucket.org/redmond-ingenuity/)
