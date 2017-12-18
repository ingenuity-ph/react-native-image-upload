import {
  ImagePicker
} from 'expo'

import { APIClient, APIConstants } from 'react-native-api-client-wrapper';


module.exports = {

  /**
   * 
   * @param {*} aspectratio should be an array ex. [1,1] [3,4]
   */
  async openCamera(aspectratio = []){
    return new Promise(async function(resolve, reject) {
      ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: aspectratio,
        base64: true,
      }).then((response) => {
        if (!response.cancelled) {
          resolve(response)
        }else {
          throw new error("Cancelled")
        }
      }).catch((error) => {
        reject(error)
      })
    })

  },

  /**
   * 
   * @param {*} aspectratio should be an array ex. [1,1] [3,4]
   */
  async openCameraRoll(aspectratio = []){
    return new Promise(async function(resolve, reject) {
      ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: aspectratio,
        base64: true,
      }).then((response) => {
        if (!response.cancelled) {
          resolve(response)
        }else {
          throw new error("Cancelled")
        }
      }).catch((error) => {
        reject(error)
      })
    })

  },

  /**
   * 
   * @param {*} APIEndpoint endpoint where to POST.
   * @param {*} headers
   * header ex.   
   * let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'This is your Token'
  };
   * @param {*} params same format as headers.
   * params ex. 
   * let params = {
        image: base64,
        };
   */
  async uploadtoServer(APIEndpoint, headers, params) {
    let url = APIEndpoint;
    let client = new APIClient(url, APIConstants.HTacTPMethod.POST);
    return client.sendRequest(headers, params);
  }




}