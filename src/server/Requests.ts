import axios from 'axios';

function baseConfig() {
  const url = 'https://bing-news-search1.p.rapidapi.com/news/';
  return {
    baseURL: url,
    timeout: 30000,
  };
}
const Request = function Request() {
  const baseInstance = axios.create(baseConfig());
  baseInstance.interceptors.request.use((config) => {
    config.headers['x-bingapis-sdk'] = true;
    (config.headers['x-rapidapi-key'] =
      '31ca66a49dmsh55c1bc1408158b7p11978ajsnff78c9d86a0f'),
      (config.headers['x-rapidapi-host'] = 'bing-news-search1.p.rapidapi.com'),
      (config.headers['useQueryString'] = true);
    return config;
  });
  return baseInstance;
};

export default Request;
