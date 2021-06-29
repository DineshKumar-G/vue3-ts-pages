<template>
  <div class="bg-grey-12" style="height:48.5rem;">
    <section class="q-pt-xl" id="firebaseui-auth-container"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import firebase from 'firebase/app';
import _ from 'lodash';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    onMounted(() => {
      const store = useStore();

      let ui = firebaseui.auth.AuthUI.getInstance();
      firebase.auth().useDeviceLanguage();

      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            store.commit('setAuthentic', true);
            return true;
          },
        },
        signInFlow: 'popup',
        signInSuccessUrl: '/news',
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
              type: 'image', // 'audio'
              size: 'normal', // 'invisible' or 'compact'
              badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
            },
            defaultCountry: 'IN', // Set default country to the United Kingdom (+44).
            // For prefilling the national number, set defaultNationNumber.
            // This will only be observed if only phone Auth provider is used since
            // for multiple providers, the NASCAR screen will always render first
            // with a 'sign in with phone number' button.
            defaultNationalNumber: '1234567890',
            // You can also pass the full phone number string instead of the
            // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
            // the first country ID that matches the country code will be used to
            // populate the country selector. So for countries that share the same
            // country code, the selected country may not be the expected one.
            // In that case, pass the 'defaultCountry' instead to ensure the exact
            // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
            // will always have higher priority than 'loginHint' which will be ignored
            // in their favor. In this case, the default country will be 'GB' even
            // though 'loginHint' specified the country code as '+1'.
            loginHint: '+122132131212',
          },
        ],
      };
      ui.start('#firebaseui-auth-container', uiConfig);
    });
  },
});
</script>

<style></style>
