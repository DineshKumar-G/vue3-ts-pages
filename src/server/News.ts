import axios from 'axios';
import { NewsApiResponse, NewsResult } from '@/interfaces/interfaces';
const defaultResult = {
  articles: [],
  total: 0,
};
import GenerateRequest from './Requests';
const req = GenerateRequest('https://bing-news-search1.p.rapidapi.com/news/', {
  'x-bingapis-sdk': true,
  'x-rapidapi-key': '31ca66a49dmsh55c1bc1408158b7p11978ajsnff78c9d86a0f',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  useQueryString: true,
});

export default {
  async getNews(params): Promise<NewsResult> {
    try {
      params = {
        ...params,
        safeSearch: 'Off',
        textFormat: 'Raw',
        freshness: 'Day',
        count: 20,
      };
      const { data } = await req.get('search', {
        params,
      });
      data as NewsApiResponse;
      if (data) {
        return {
          articles: data.value,
          total: data.totalEstimatedMatches,
        };
      }
      return defaultResult;
    } catch (error) {
      console.error('Error fetching Notes', params);
      return defaultResult;
    }
  },
};
