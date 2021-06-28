<template>
  <q-input
    standout="bg-grey-10 text-white"
    bottom-slots
    debounce="500"
    v-model="state.text"
    label="Search"
    @update:model-value="state.debounceSearchSet"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="state.clearSearch" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script lang="ts">
import _ from 'lodash';
import { useStore } from 'vuex';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const state = reactive({
      text: store.getters.getSearchText || 'Euro',
      clearSearch: () => {
        state.text = '';
        store.commit('resetSearchText');
      },
      debounceSearchSet: () => {
        store.commit('setSeachText', state.text);
      },
    });
    state.debounceSearchSet();
    return {
      state,
    };
  },
});
</script>

<style></style>
