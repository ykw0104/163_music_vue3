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

    <!-- 中间内容 ------------------------------------------------------------------->
    <div class="play-content">
      <!-- active: 控制needle的旋转 -->
      <img
        class="needle"
        :class="{ active: !isPaused }"
        src="@/assets/img/needle-ab.png"
        alt=""
      />
      <img class="disc" src="@/assets/img/disc.png" alt="" />
      <img class="play-img" :src="playDetail.al.picUrl" alt="" />
    </div>
    <!--  ------------------------------------------------------------------->

    <div class="play-lyric"></div>
    <!--  ------------------------------------------------------------------->

    <div class="process"></div>
    <!-- 底部的控制播放键 ------------------------------------------------------------------->
    <div class="play-footer">
      <svg class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>

      <!-- 3.1 播放按钮 -->
      <svg
        v-if="isPaused"
        class="icon play-bofang"
        aria-hidden="true"
        @click="play"
      >
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <!-- 3.2 暂停按钮 -->
      <svg v-else class="icon play-bofang" aria-hidden="true" @click="play">
        <use xlink:href="#icon-weibiaoti519"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Vue3Marquee from "vue3-marquee";

export default defineComponent({
  components: { Vue3Marquee },
  props: ["playDetail", "isPaused", "play"],
  setup(props) {
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

  .play-content {
    position: absolute;
    left: 0;
    top: 1.5rem;
    width: 7.5rem;
    height: 7.5rem;

    img.needle {
      position: absolute;
      left: 3.5rem;
      z-index: 10;
      width: 2.5rem;
      height: auto;

      transform: rotate(-10deg);
      transform-origin: 0.3rem 0;
      transition: all 1s;
    }

    img.needle.active {
      transform: rotate(8deg);
      // transform-origin: 0.3rem 0;
      // transition: all 1s;
    }

    img.disc {
      position: absolute;
      top: 2.5rem;
      left: calc(50% - 2.75rem);
      width: 5.5rem;
      height: auto;
    }

    img.play-img {
      position: absolute;
      top: 3.55rem;
      left: calc(50% - 1.7rem);
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 1.7rem;
    }
  }

  .play-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 7.5rem;
    height: 1.5rem;
    padding: 0 0.4rem;

    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;

      &.play-bofang {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}
</style>
