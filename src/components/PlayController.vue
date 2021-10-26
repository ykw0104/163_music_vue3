<template>
  <div class="play-controller" v-if="playlist.length > 0">
    <div class="left" @click="isShow = !isShow">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <!-- 播放或暂停列表 -->
      <svg v-if="isPaused" class="icon" aria-hidden="true" @click="play">
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

    <play-music
      v-show="isShow"
      :play-detail="playlist[playCurrentIndex]"
      :is-paused="isPaused"
      :play="play"
      @back="isShow = !isShow"
    ></play-music>

    <!-- 播放音频 -->
    <audio
      ref="audioRef"
      :src="
        `https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`
      "
    ></audio>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, onUpdated } from "vue";
import { mapState, useStore } from "vuex";

import PlayMusic from "@/components/PlayMusic";

export default defineComponent({
  // computed: {
  //   ...mapState(["playlist", "playCurrentIndex"]),
  // },
  components: {
    PlayMusic,
  },
  setup() {
    const store = useStore();
    const playlist = computed(() => store.state.playlist);
    const playCurrentIndex = computed(() => store.state.playCurrentIndex);

    const audioRef = ref(null); // 获取音频对象
    const isPaused = ref(true); // 默认暂停
    const isShow = ref(false); // PlayMusic音乐播放页是否显示

    const play = () => {
      /* 暂停或停止播放 */
      if (audioRef.value.paused) {
        audioRef.value.play();
        isPaused.value = false;
      } else {
        audioRef.value.pause();
        isPaused.value = true;
      }
    };
    onMounted(() => {
      // console.log("mounted", playlist.value);
    });

    onUpdated(() => {
      // console.log("updated", playlist.value);
      /* 同步歌词 */
      if (playlist.value.length > 0) {
        store.dispatch("reqLyric", {
          id: playlist.value[playCurrentIndex.value].id,
        });
      }
    });

    return {
      audioRef,
      play,
      isPaused,
      playlist,
      playCurrentIndex,
      isShow,
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
