<template>
  <div class="bg-grey-12">
    <div class="fit column content-center">
      <search class="q-pt-md self-center" style="width: 400px"></search>
      <h4 v-if="showNoRes" class="self-center">
        Uh. oh! News Not Found! &#x1F44E;
      </h4>
      <h5 v-if="showNoRes" class="self-center">
        Try your luck with different search query! &#x1F609;
      </h5>
    </div>
    <div class="fit row wrap justify-center" v-if="!isLoading">
      <div v-for="news in articles" :key="news">
        <q-card
          class="my-card q-mb-xl q-mr-md q-ml-md col-5"
          style="width: 770px; height: 530px"
        >
          <img
            style="width: 770px; height: 400px"
            src="http://www.mercuryminds.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
            v-if="!news.image"
          />
          <img
            v-else
            :src="news.image.thumbnail.contentUrl"
            style="width: 770px; height: 400px"
          />
          <q-card-section>
            <div class="text-h6 non-selectable" style="width: 750px">
              {{ title(news.name) }}
              <q-icon
                size="2rem"
                class="q-pr-md cursor-pointer"
                @click="navigateToExternal(news.url)"
                color="primary"
                name="zoom_out_map"
                style="float: right"
              />
            </div>
            <div class="text-subtitle2">
              Published : {{ news.datePublished.substring(0, 10) }} by
              {{ news.provider[0].name }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none" style="width: 770px">
            {{ news.description.substring(0, 200) + '...' }}
            <q-tooltip
              class="bg-amber text-black shadow-4 text-subtitle1"
              :offset="[10, 10]"
              max-width="45rem"
            >
              <span class="text-weight-bold">
                {{ news.name }}
              </span>
              <br />
              {{ news.description }}
            </q-tooltip>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import News from '@/server/News';
import _ from 'lodash';
import { useQuasar } from 'quasar';
import Search from '@/components/SearchBar.vue';
import { useStore } from 'vuex';
import { NewsResult } from '@/interfaces/interfaces';
import { defineComponent, onMounted, ref, computed, watch } from 'vue';

export default defineComponent({
  components: {
    Search,
  },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    let isLoading = ref(false);
    let total = ref(0);
    let articles = ref();
    function title(str: string): string {
      if (str.length >= 65) return str.substring(0, 65) + '...';
      return str;
    }
    let search = computed(() => {
      return store.getters.getSearchText;
    });
    let showNoRes = computed(() => {
      return !isLoading.value && _.get(articles, 'value.length', 0) === 0;
    });
    onMounted(async () => {
      await loadData();
    });
    const loadData = async () => {
      isLoading.value = true;
      $q.loading.show();
      const result: NewsResult = await News.getNews({
        q: search.value,
      });
      ({ total: total.value, articles: articles.value } = result);
      isLoading.value = false;
      $q.loading.hide();
    };
    watch(search, () => loadData());
    const navigateToExternal = (url) => {
      window.open(url);
    };
    return {
      isLoading,
      articles,
      title,
      search,
      showNoRes,
      navigateToExternal,
    };
  },
});
</script>

<style></style>
