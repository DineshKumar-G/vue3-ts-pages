import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
// import { devtools } from '@/devtools';

import store from './store/index';
require('./directives/filters');
import { Quasar, Loading } from 'quasar';
import quasarUserOptions from '@/quasar-user-options.js';

createApp(App)
  .use(Quasar, {
    plugins: {
      Loading,
    },
  })
  .use(quasarUserOptions)
  .use(store)
  // .use(devtools)
  .use(router)
  .mount('#app');
