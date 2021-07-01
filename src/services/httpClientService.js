import axios from 'axios';

export function httpClientPost(url, body) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(url, body);
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
}


export default {httpClientPost};
