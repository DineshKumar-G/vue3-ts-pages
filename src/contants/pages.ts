import { RouteObjects } from '@/interfaces/interfaces';

const routeOpts: RouteObjects[] = [
  {
    name: 'News',
    path: '/news',
    icon: 'article',
  },
  {
    name: 'Weather',
    path: '/weather',
    icon: 'nightlight',
  },
  {
    name: 'Todos',
    path: '/todos',
    icon: 'fact_check',
  },
];

export { routeOpts };
