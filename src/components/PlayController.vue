<template>
  <div class="play-controller" v-if="playlist.length > 0">
    <div class="left">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <!-- 播放或暂停列表 -->
      <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-weibiaoti519"></use>
      </svg>
      <!-- 播放列表 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlistMusic"></use>
      </svg>
    </div>

    <!-- 跨域访问不了 -->
    <!-- <audio
      ref="audio"
      :src="
        `https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`
      "
    ></audio> -->
    <audio ref="audio" :src="require('./huatiancuo.mp3')"></audio>
  </div>
</template>

<script>
import { defineComponent, ref, onUpdated } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["playlist", "playCurrentIndex"]),
  },
  setup() {
    const audio = ref(null); // 音频对象
    const paused = ref(true); // 默认暂停

    const play = () => {
      /* 暂停或停止播放 */
      if (audio.value.paused) {
        audio.value.play();
        paused.value = false;
      } else {
        audio.value.pause();
        paused.value = true;
      }
    };

    return {
      audio,
      play,
      paused,
    };
  },
});
</script>

<style lang="scss" scoped>
.play-controller {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 7.5rem;
  height: 1.2rem;
  border-top: 1px solid #ccc;
  background-color: #fff;

  .left {
    display: flex;
    padding: 0 0.2rem;

    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }

    .content {
      padding: 0 0.2rem;

      .tips {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }

  .right {
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
