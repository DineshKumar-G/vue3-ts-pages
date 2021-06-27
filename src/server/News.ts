import axios from 'axios';
import { NewsApiResponse, NewsResult } from '@/interfaces/interfaces';
const defaultResult = {
  articles: [],
  total: 0,
};
import GenerateRequest from './Requests';
const req = GenerateRequest();
// 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2021-06-27&' +
//           'sortBy=popularity&' +
//           'apiKey=a492a14165184b7ebb3e1161a782c140';
export default {
  async getNews(params): Promise<NewsResult> {
    try {
      params = {
        ...params,
        apiKey: 'a492a14165184b7ebb3e1161a782c140',
        from: '2021-06-27',
        sortBy: 'popularity',
      };
      const { data }: { data: NewsApiResponse } = await req.get('everything', {
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
