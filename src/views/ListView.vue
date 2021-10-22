<template>
  <div>333333</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { getPlayListDetail } from "@/api";

export default defineComponent({
  setup() {
    const route = useRoute();
    const playList = ref(null); // 歌单详情

    onMounted(async () => {
      const result = await getPlayListDetail(route.query.id);
      console.log(result);
    });
    return {
      playList,
    };
  },
});
</script>

<style lang="scss" scoped></style>
