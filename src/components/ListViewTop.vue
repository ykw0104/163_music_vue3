<template>
  <div class="list-view-top">
    <!-- 背景图, 做成定位 -->
    <img class="bg" :src="playList.coverImgUrl" alt="" />
    <!-- 顶部导航  -->
    <div class="list-view-top-nav">
      <div class="back" @click="$router.go(-1)">
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
    <!-- 顶部内容 -->
    <div class="list-view-top-content">
      <div class="content-left">
        <img :src="playList.coverImgUrl" alt="" />
        <div class="play-count">
          <i
            class="iconfont icon-24gl-playCircle"
            style="font-size:0.24rem; color:#ccc;"
          ></i>
          <span> {{ changeValue(playList.playCount) }}</span>
        </div>
      </div>
      <div class="content-right">
        <h3>{{ playList.name }}</h3>
        <div class="author">
          <img class="header" :src="playList.creator.avatarUrl" alt="" />
          <span>{{ playList.creator.nickname }}</span>
        </div>
        <div class="description">
          {{ playList.description }}
        </div>
      </div>
    </div>
    <!-- 顶部图标列表 -->
    <div class="list-view-top-iconlist">
      <div class="icon-item">
        <i class="iconfont icon-liaotian"></i>
        <span> {{ changeValue(playList.commentCount) }}</span>
      </div>
      <div class="icon-item">
        <i class="iconfont icon-fenxiang"></i>
        <span> {{ changeValue(playList.shareCount) }}</span>
      </div>
      <div class="icon-item">
        <i class="iconfont icon-yunduanxiazai"></i>
        <span>下载</span>
      </div>
      <div class="icon-item">
        <i class="iconfont icon-duoxuan"></i>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["playList"],
  setup(props) {
    /* ----------------------------------------------------------------------------------------------------- */
    const changeValue = (num) => {
      if (num > 100000000) {
        return (num / 100000000).toFixed(2) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(2) + "万";
      }
      return num;
    };
    return { changeValue };
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

  .list-view-top-content {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;

    .content-left {
      position: relative;

      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }

      .play-count {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        font-weight: 900;
        color: #ccc;
      }
    }

    .content-right {
      width: 3.5rem;

      h3 {
        margin: 0.2rem 0;
        color: #eee;
      }

      .author {
        display: flex;
        align-items: center;

        img.header {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }

        span {
          color: #ccc;
          font-size: 0.26rem;
        }
      }

      .description {
        margin-top: 0.2rem;
        font-size: 0.24rem;
        color: #aaa;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .list-view-top-iconlist {
    display: flex;
    justify-content: space-around;

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .iconfont {
        font-size: 0.55rem;
        color: #eee;
      }

      span {
        padding-top: 0.3rem;
        font-size: 0.28rem;
        color: #eee;
      }
    }
  }
}
</style>
