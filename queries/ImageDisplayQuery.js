import Diode from 'react-diode';
// import Diode from '../react-diode/src/DiodePublic';

export default {
  type: 'fetchImage',
  request(fragment, params, options) {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const method = 'get';

    const payload = '';

    return Diode.queryRequest(url, method, payload);
  },
  resolve(response, fragment, options) {
    return response.data;
  },
};
