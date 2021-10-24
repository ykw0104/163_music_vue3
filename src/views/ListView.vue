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
import { useStore } from "vuex";

import ListViewTop from "@/components/ListViewTop";
import ListViewPlayList from "@/components/ListViewPlayList";

import { getPlayListDetail } from "@/api";

export default defineComponent({
  components: { ListViewTop, ListViewPlayList },
  setup() {
    const store = useStore();
    const route = useRoute();
    const state = reactive({
      playList: null, // 歌单详情
    });

    /* 获取播放列表详情 */
    getPlayListDetail(route.query.id).then((res) => {
      state.playList = res.data.playlist;
      store.commit("setPlaylist", state.playList.tracks); // 保存播放列表
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
