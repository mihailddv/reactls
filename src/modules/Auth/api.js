import axios from 'axios';

var config = {
  timeout: 3000
};

export const auth = (username, password) =>
  axios
    .get(
      `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`,
      config
    )
    .then(response => {
      const { data, status } = response;

      const { error } = data;

      if (status !== 200) {
        const exception = { message: error || 'unable to auth' };
        throw exception;
      }

      return data;
    });
