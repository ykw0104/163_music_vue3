<template>
  <div class="list-view" v-if="playList">
    <!-- 歌单顶部 -->
    <list-view-top :play-list="playList"></list-view-top>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ListViewTop from "@/components/ListViewTop";
import { getPlayListDetail } from "@/api";

export default defineComponent({
  components: { ListViewTop },
  setup() {
    const route = useRoute();
    const playList = ref(null); // 歌单详情

    getPlayListDetail(route.query.id).then((res) => {
      playList.value = res.data.playlist;
    });

    return {
      playList,
    };
  },
});
</script>

<style lang="scss" scoped></style>
