<template>
  <div class="home">
    <top-nav></top-nav>
    <top-swiper></top-swiper>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import TopSwiper from "@/components/TopSwiper";

export default {
  name: "Home",
  components: {
    TopNav,
    TopSwiper,
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
