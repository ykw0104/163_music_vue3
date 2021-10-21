<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn active">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <svg class="icon search" aria-hidden="true">
        <use xlink:href="#icon-sousuo_o"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  height: 1rem;
  padding: 0 0.2rem;

  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }

  .search {
    width: 0.45rem;
    height: 0.45rem;
  }

  .topCenter {
    display: flex;
    justify-content: space-around;
    width: 4.5rem;

    .active {
      font-weight: 900;
    }
  }
}
</style>
