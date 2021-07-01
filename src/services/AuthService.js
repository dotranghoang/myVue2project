import {httpClientPost} from './httpClientService';
import {developUrl} from './envService';

export function register(registerForm) {
  return new Promise((resolve, reject) => {
    try {
      let response = httpClientPost(developUrl.register, registerForm);
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
}

export default {register};
