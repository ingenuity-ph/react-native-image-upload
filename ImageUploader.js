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
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: aspectratio,
      base64: true,
    });

    if (!result.cancelled) {
      return result;       
    }else {
      throw new Error('Cancelled')
    }

  },

  /**
   * 
   * @param {*} aspectratio should be an array ex. [1,1] [3,4]
   */
  async openCameraRoll(aspectratio = []){
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: aspectratio,
      base64: true,
    });

    if (!result.cancelled) {
      return result;       
    }else {
      throw new Error('Cancelled')
    }

  },

  /**
   * 
   * @param {*} APIEndpoint endpoint where to POST.
   * @param {*} headers
   * header ex.   
   * let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Client-ID e2afa72d74237d8'
  };
   * @param {*} params same format as headers.
   * params ex. 
   * let params = {
        image: base64,
        };
   */
  async uploadtoServer(APIEndpoint, headers, params) {
    let url = APIEndpoint;
    let client = new APIClient(url, APIConstants.HTTPMethod.POST);
    return client.sendRequest(headers, params);
  }




}