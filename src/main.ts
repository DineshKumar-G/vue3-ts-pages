import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import firebase from 'firebase/app';
import fireConfig from './server/FirebaseAuth';

import 'firebase/auth';
import 'firebase/firestore';
// import { devtools } from '@/devtools';

import store from './store/index';
require('./directives/filters');
import { Quasar, Loading } from 'quasar';
import quasarUserOptions from '@/quasar-user-options.js';

firebase.initializeApp(fireConfig.firebaseConfig);
console.log('env', JSON.stringify(process.env));

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
