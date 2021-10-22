<template>
  <div class="home">
    <top-nav></top-nav>
    <top-swiper></top-swiper>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import TopSwiper from "@/components/TopSwiper";
import IconList from "@/components/IconList";
import MusicList from "@/components/MusicList";

export default {
  name: "Home",
  components: {
    TopNav,
    TopSwiper,
    IconList,
    MusicList,
  },
};
</script>

<style lang="scss" scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: red;
}
</style>
