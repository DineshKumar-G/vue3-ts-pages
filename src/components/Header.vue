<template>
  <q-header elevated>
    <q-toolbar class="bg-grey-10">
      <q-btn
        flat
        dense
        round
        v-if="showTools"
        @click="$emit('toggleSideBar')"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> Random Apps </q-toolbar-title>
      <q-toolbar-title style="text-align: end" class="text-grey-6">
        Built with Vue3 + TS + Quasar
      </q-toolbar-title>
    </q-toolbar>
    <q-tabs
      v-if="showTools"
      v-model="tab"
      :key="tab"
      class="bg-grey-10"
      indicator-color="yellow-6"
      active-color="yellow-4"
    >
      <q-tab
        v-for="page of routeOpts"
        :key="page.path"
        :name="page.name"
        :icon="page.icon"
        :label="page.name"
        @click="changeTab(page.path, page.name)"
      />
    </q-tabs>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import _ from 'lodash';
import { routeOpts } from '@/contants/pages';

export default defineComponent({
  name: 'Header',
  components: {},
  props: {
    showTools: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();
    let tab = ref(routeOpts[0].name);

    const changeTab = (path: string, name: string) => {
      router.push({ path });
    };

    watch(route, (val) => {
      tab.value = _.get(
        _.find(routeOpts, { path: route.path }),
        'name',
        routeOpts[0].name
      );
    });

    return {
      routeOpts,
      tab,
      changeTab,
    };
  },
});
</script>

<style></style>
