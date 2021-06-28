import axios from 'axios';
import { NewsApiResponse, NewsResult } from '@/interfaces/interfaces';
const defaultResult = {
  articles: [],
  total: 0,
};
import GenerateRequest from './Requests';
const req = GenerateRequest();
export default {
  async getNews(params): Promise<NewsResult> {
    try {
      params = {
        ...params,
        safeSearch: 'Off',
        textFormat: 'Raw',
        freshness: 'Day',
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
