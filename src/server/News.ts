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
        q: 'apple',
        safeSearch: 'Off',
        textFormat: 'Raw',
        freshness: 'Day',
      };
      const { data }: { data: NewsApiResponse } = await req.get('search', {
        params,
      });
      if (data.status == 'ok') {
        return {
          articles: data.articles,
          total: data.totalResults,
        };
      }
      return defaultResult;
    } catch (error) {
      console.error('Error fetching Notes', params);
      return defaultResult;
    }
  },
};
