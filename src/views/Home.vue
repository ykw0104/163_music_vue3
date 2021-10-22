<template>
  <div class="home">
    <top-nav></top-nav>
    <top-swiper></top-swiper>
    <icon-list></icon-list>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import TopSwiper from "@/components/TopSwiper";
import IconList from "@/components/IconList";

export default {
  name: "Home",
  components: {
    TopNav,
    TopSwiper,
    IconList,
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
