export interface RouteObjects {
  name: string;
  path: string;
  icon: string;
}

export interface News {
  about: {
    name: string;
    readLink: string;
    _type: string;
  }[];
  datePublished: string;
  description: string;
  image: {
    thumbnail: {
      contentUrl: string;
      height: number;
      width: number;
      _type: string;
    };
    _type: string;
  };
  name: string;
  url: string;
  _type: string;
  provider: {
    name: string;
    _type: string;
    image: {
      _type: string;
      thumbnail: {
        contentUrl: string;
        _type: string;
      };
    };
  }[];
}

export interface returnSortObj {
  id: string;
  isSelected: boolean;
  name: string;
  url: string;
  _type: string;
}
export interface NewsApiResponse {
  totalEstimatedMatches: number;
  sort: returnSortObj[];
  value: News[];
  _type: string;
  queryContext: {
    adultIntent: boolean;
    originalQuery: string;
    _type: string;
  };
}

export interface NewsResult {
  articles: News[];
  total: number;
}
