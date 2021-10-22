<template>
  <div class="list-view-top">
    <img class="bg" :src="playList.coverImgUrl" alt="" />
    <!--  -->
    <div class="list-view-top-nav">
      <div class="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["playList"],
  setup(props) {
    console.log(props.playList);

    return {};
  },
});
</script>

<style lang="scss" scoped>
.list-view-top {
  width: 7.5rem;
  padding: 0 0.4rem;
  height: 6rem;

  img.bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 7.5rem;
    height: auto;
    filter: blur(40px);
  }

  .list-view-top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    font-size: 0.35rem;

    .back {
      display: flex;
      color: #fff;

      .title {
        margin-left: 0.4rem;
      }
    }

    .right {
      display: flex;
      color: #fff;

      .search {
        margin-right: 0.5rem;
      }
    }

    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
  }
}
</style>
