<template>
  <q-drawer
    v-if="leftDrawerOpen"
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    :width="200"
    :breakpoint="500"
    class="bg-grey-9"
  >
    <q-list>
      <div v-for="page in routeOpts" :key="page.path">
        <q-item
          clickable
          tag="a"
          :class="$route.path === page.path ? 'text-yellow-4' : 'text-grey-3'"
          @click="$router.push({ path: page.path })"
        >
          <q-item-section avatar>
            <q-icon :name="page.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ page.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <q-item clickable tag="a" class="text-grey-3" @click="signOut()">
        <q-item-section avatar>
          <q-icon class="text-red-12" name="logout"/>
        </q-item-section>
        <q-item-section>
          <q-item-label> Sign Out </q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        tag="a"
        style="position: fixed; bottom: 10px; width: 100%"
        class="text-grey-3"
        @click="goToExternal()"
      >
        <q-item-section avatar>
          <q-icon class="text-cyan-12" name="account_circle" />
        </q-item-section>
        <q-item-section>
          <q-item-label> Dinesh </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { routeOpts } from '@/contants/pages';
import { useRouter, useRoute } from 'vue-router';

import { useStore } from 'vuex';

import firebase from 'firebase/app';

export default defineComponent({
  name: 'SideBar',
  components: {},
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const goToExternal = () => {
      window.open('https://github.com/DineshKumar-G/vue3-ts-pages');
    };
    const signOut = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.commit('setAuthentic', false);
          router.push('/login');
        })
        .catch((error) => {
          // An error happened.
        });
    };
    return {
      drawer: ref(false),
      miniState: ref(true),
      routeOpts,
      goToExternal,
      signOut,
    };
  },
});
</script>

<style></style>
