<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <SideBar :leftDrawerOpen="leftDrawerOpen"> </SideBar>
      <Header @toggle-side-bar="toggleSideBar"> </Header>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'App',

  components: {
    SideBar,
    Header,
  },

  setup() {
    let leftDrawerOpen = ref(false);
    const toggleSideBar = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      toggleSideBar,
    };
  },
});
</script>
