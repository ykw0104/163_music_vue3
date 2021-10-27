import { createStore } from "vuex";
import { getLyric } from "@/api";

export default createStore({
  state: {
    playlist: [], // 播放列表
    playCurrentIndex: 0, // 当前播放位置
    lyric: "", //歌词
    currentTime: 0, // 当前音乐时间
    intervalId: 0,
  },
  getters: {
    /* 处理歌词 */
    lyricList(state) {
      const arr = state.lyric.split(/\n/gis).map((item, i, lyricArr) => {
        const min = parseInt(item.slice(1, 3)); // 截取分
        const second = parseInt(item.slice(4, 6)); // 截取秒
        const mill = parseInt(item.slice(7, 10)); // 截取毫秒

        return {
          min,
          second,
          mill,
          lyric: item.slice(11), // 截取歌词
          // 歌词时间
          time: mill + second * 1000 + min * 60 * 1000,
          content: item, // 原内容
        };
      });

      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0;
        } else {
          item.pre = arr[i - 1].time;
        }
      });

      return arr;
    },
  },
  mutations: {
    /* 设置播放列表 */
    setPlaylist(state, payload) {
      state.playlist = payload;
    },

    /* 播放第几首歌 */
    setPlayIndex(state, payload) {
      state.playCurrentIndex = payload;
    },

    /* 设置歌词 */
    setLyric(state, payload) {
      state.lyric = payload;
    },

    /* 设置歌曲时间 */
    setCurrentTime(state, payload) {
      state.currentTime = payload;
    },

    setIntervalId(state, payload) {
      state.intervalId = payload;
    },
  },
  actions: {
    /* 请求歌词 */
    async reqLyric({ commit }, payload) {
      const result = await getLyric(payload.id);
      commit("setLyric", result.data.lrc.lyric);
    },
  },
  modules: {},
});
