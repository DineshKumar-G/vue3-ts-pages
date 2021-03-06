import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import News from '@/views/News.vue';
import Todos from '@/views/Todos.vue';
import Weather from '@/views/Weather.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
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
    path: '/:catchAll(.*)',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
