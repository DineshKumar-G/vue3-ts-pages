import axios from 'axios';
function baseConfig() {
  const url = 'https://newsapi.org';
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
