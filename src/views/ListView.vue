<template>
  <div class="list-view" v-if="state.playList">
    <!-- 歌单顶部 -->
    <list-view-top :play-list="state.playList"></list-view-top>

    <!-- 播放列表 -->
    <list-view-play-list :play-list="state.playList"></list-view-play-list>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { useRoute } from "vue-router";

import ListViewTop from "@/components/ListViewTop";
import ListViewPlayList from "@/components/ListViewPlayList";

import { getPlayListDetail } from "@/api";

export default defineComponent({
  components: { ListViewTop, ListViewPlayList },
  setup() {
    const route = useRoute();
    const state = reactive({
      playList: null, // 歌单详情
    });

    getPlayListDetail(route.query.id).then((res) => {
      state.playList = res.data.playlist;
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
