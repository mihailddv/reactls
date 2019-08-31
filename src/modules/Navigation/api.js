import axios from 'axios';

var config = {
  timeout: 3000
};

export const route = (address1, address2) =>
  axios
    .get(
      `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
      config
    )
    .then(response => {
      const { data, status } = response;

      const { error } = data;

      if (status !== 200) {
        const exception = { message: error || 'unable to get route' };
        throw exception;
      }

      return data;
    });

export const addressList = () =>
  axios
    .get(`https://loft-taxi.glitch.me/addressList`, config)
    .then(response => {
      const { data, status } = response;

      const { error } = data;

      if (status !== 200) {
        const exception = { message: error || 'unable to get address list' };
        throw exception;
      }

      return data;
    });
