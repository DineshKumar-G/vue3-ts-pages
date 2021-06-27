export interface RouteObjects {
  name: string;
  path: string;
  icon: string;
}

export interface News {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsApiResponse {
  articles: News[];
  status: 'ok' | 'error';
  totalResults: number;
}

export interface NewsResult {
  articles: News[],
  total: number;
}
