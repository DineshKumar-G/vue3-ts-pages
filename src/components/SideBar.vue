<template>
  <q-drawer
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    :width="200"
    :breakpoint="500"
    class="bg-grey-9"
  >
    <q-list v-for="page in routeOpts" :key="page.path">
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
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { routeOpts } from '@/contants/pages';

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
    return {
      drawer: ref(false),
      miniState: ref(true),
      routeOpts,
    };
  },
});
</script>

<style></style>
