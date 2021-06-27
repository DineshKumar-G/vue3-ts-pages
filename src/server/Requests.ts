import axios from 'axios';
const proxyUrl = "https://cors-anywhere.herokuapp.com/"

function baseConfig() {
  const url = `${proxyUrl}https://newsapi.org`;
  return {
    baseURL: `${url}/v2`,
    timeout: 30000,
  };
}
const Request = function Request() {
  const baseInstance = axios.create(baseConfig());
  return baseInstance;
};

export default Request;
