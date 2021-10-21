<template>
  <div class="home">
    <div id="d1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>

      <span class="iconfont icon-bofang"></span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
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
