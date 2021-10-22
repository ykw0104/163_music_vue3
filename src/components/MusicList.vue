<template>
  <div class="music-list">
    <div class="music-list-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>

    <!-- 歌单列表 -->
    <div class="music-list-detail">
      <swiper class="swiper-music" :slides-per-view="3" :space-between="10">
        <swiper-slide
          class="swiper-slide-music"
          v-for="(item, index) in musicList"
          :key="index"
          @click="handleSlideClick(item.id)"
        >
          <img :src="item.picUrl" :alt="item.name" />
          <div class="name">{{ item.name }}</div>
          <div class="count">
            <i
              class="iconfont icon-24gl-playCircle"
              style="font-size:0.24rem; color:#ccc;"
            ></i>
            <span> {{ changeValue(item.playCount) }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getMusicList } from "@/api";

/* 引入swiper相关 */
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();

    const musicList = ref(null);

    onMounted(async () => {
      let res = await getMusicList();
      musicList.value = res.data.result;
    });

    /* ----------------------------------------------------------------------------------------------------- */
    const changeValue = (num) => {
      if (num > 100000000) {
        return (num / 100000000).toFixed(2) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(2) + "万";
      }
      return num;
    };

    const handleSlideClick = (musicId) => {
      router.push({
        path: "/listview",
        query: {
          id: musicId,
        },
      });
    };
    return {
      musicList,

      changeValue,
      handleSlideClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.music-list {
  width: 7.5rem;
  padding: 0 0.4rem;

  .music-list-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      width: 1.2rem;
      height: 0.5rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.5rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
    }
  }
  .music-list-detail {
    .swiper-music {
      width: 100%;
      height: 3rem;

      .swiper-slide-music {
        display: flex;
        flex-direction: column;
        position: relative;

        img {
          width: 100%;
          height: auto;
          border-radius: 0.1rem;
        }

        .name {
          width: 100%;
          height: 0.6rem;
          line-height: 0.3rem;
          font-size: 0.24rem;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          text-overflow: ellipsis;
          overflow: hidden;
        }

        .count {
          display: flex;
          align-items: center;
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.24rem;
          color: #ccc;
        }
      }
    }
  }
}
</style>
