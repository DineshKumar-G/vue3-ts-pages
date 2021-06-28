import axios from 'axios';

const Request = function Request(baseURL, headerConfigs) {
  const baseInstance = axios.create({
    baseURL,
    timeout: 20000,
  });
  baseInstance.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      ...headerConfigs,
    };
    return config;
  });
  return baseInstance;
};

export default Request;
