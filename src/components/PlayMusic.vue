<template>
  <div class="play-music">
    <!-- 背景图 ------------------------------------------------------------------->
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetail.al.picUrl}) ` }"
    ></div>
    <!-- 头部 ------------------------------------------------------------------->
    <div class="play-top">
      <!-- 返回 -->
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <!-- 中间歌名 -->
      <div class="center">
        <div class="title">
          <!-- 跑马灯效果 -->
          <vue3-marquee direction="right">
            {{ playDetail.al.name }}
          </vue3-marquee>
        </div>
      </div>
      <!-- 分享 -->
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <!--  ------------------------------------------------------------------->

    <div class="play-content"></div>
    <!--  ------------------------------------------------------------------->

    <div class="play-lyric"></div>
    <!--  ------------------------------------------------------------------->

    <div class="process"></div>
    <!--  ------------------------------------------------------------------->
    <div class="play-footer"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Vue3Marquee from "vue3-marquee";

export default defineComponent({
  components: { Vue3Marquee },
  props: ["playDetail"],
  setup(props) {
    console.log(props.playDetail);
    return {};
  },
});
</script>

<style lang="scss" scoped>
.play-music {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    background-size: auto 100%;
    // background-size: cover;
    background-position: center;
    filter: blur(60px);
  }

  .play-top {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 1.2rem;
    padding: 0 0.4rem;

    color: #fff;

    .title {
      width: 5rem;
    }

    .icon {
      width: 0.4rem;
      height: 0.4rem;
      fill: #fff;
    }
  }
}
</style>
