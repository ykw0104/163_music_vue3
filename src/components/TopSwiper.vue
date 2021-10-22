<template>
  <div id="swiperCom">
    <swiper
      id="swiperIndex"
      class="top-swiper"
      :slides-per-view="1"
      :autoplay="swiper_options.autoplay"
      :loop="swiper_options.loop"
      :speed="swiper_options.speed"
      :pagination="swiper_options.pagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="top-swiper-slide"
        v-for="(item, index) in imgs"
        :key="index"
      >
        <img :src="item.pic" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, onMounted } from "vue";
import { getBanner } from "@/api/index";

/* 引入swiper相关 */
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    /* swiper参数设置 */
    const swiper_options = reactive({
      // 自动播放
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true, // 循环
      speed: 500, // 分页按钮
      pagination: {
        clickable: true,
      },
    });
    const imgs = ref(null);

    /* 获取轮播图片 */
    getBanner(1).then((res) => {
      imgs.value = res.data.banners;
    });
    /* ----------------------------------------------------------------------------------------------------- */
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      swiper_options,
      imgs,

      onSwiper,
      onSlideChange,
    };
  },
});
</script>
<style lang="scss">
#swiperCom {
  width: 7.5rem;

  #swiperIndex {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;

    .top-swiper-slide {
      width: 100%;
    }

    .swiper-pagination-bullet-active {
      background-color: orange;
    }
  }
}
</style>
