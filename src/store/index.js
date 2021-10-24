import { createStore } from "vuex";

export default createStore({
  state: {
    playlist: [], // 播放列表
    playCurrentIndex: 0, // 当前播放位置
  },
  mutations: {
    /* 设置播放列表 */
    setPlaylist(state, payload) {
      state.playlist = payload;
    },
  },
  actions: {},
  modules: {},
});
