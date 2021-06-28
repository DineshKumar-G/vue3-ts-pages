import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoBY5rNU88_pcVlnX5zWxuwRWI1BP_I-A',
  authDomain: 'vue3-ts-pages.firebaseapp.com',
  projectId: 'vue3-ts-pages',
  storageBucket: 'vue3-ts-pages.appspot.com',
  messagingSenderId: '249686246402',
  appId: '1:249686246402:web:f5223097278e7b3ba4531b',
  measurementId: 'G-8V270EP3D7',
};

// firebase.initializeApp(firebaseConfig);

export default {
  firebaseConfig,
  async signup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword('test@abc.com', '123456789')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('AUTHHHH', user);
        // ...
      })
      .catch((error) => {
        console.log('ERrror', error);
      });
  },
  async signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword('test@abc.com', '123456789')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('AUTHHHH', user);
        // ...
      })
      .catch((error) => {
        console.log('ERrror', error);
      });
  },
  async signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  },
};
