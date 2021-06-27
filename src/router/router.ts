import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import News from '@/views/News.vue';
import Todos from '@/views/Todos.vue';
import Weather from '@/views/Weather.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () =>
  //   //   import(/* webpackChunkName: "about" */ '../views/About.vue'),
  //   component: About,
  // },
  {
    path: "/:catchAll(.*)",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
