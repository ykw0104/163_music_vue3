<template>
  <div class="play-list">
    <!-- 播放列表顶部 -->
    <div class="play-list-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playList.tracks.length }}首)</div>
        </div>
      </div>
      <div class="btn right">
        + 收藏({{ changeValue(playList.subscribedCount) }})
      </div>
    </div>

    <!-- 播放列表详情 -->
    <div class="play-list-detail">
      <div
        class="play-list-detail-item"
        v-for="(item, index) in playList.tracks"
        :key="index"
      >
        <div class="left">
          <div class="left-index">{{ index + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="author">
              <!-- tags数据接口暂时没找到,随机模拟 -->
              <span
                class="tag"
                v-for="(tag, tIndex) in getRandomArrayElements(
                  ['SQ', '试听', 'VIP', '独家'],
                  rangeRandom(0, 4)
                )"
                :key="tIndex"
              >
                {{ tag }}
              </span>
              <span class="al-name">{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-playSquare"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gf-playlistMusic"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { changeValue, getRandomArrayElements, rangeRandom } from "@/api/util";

export default defineComponent({
  props: ["playList"],
  setup() {
    /* ----------------------------------------------------------------------------------------------------- */

    return {
      changeValue,
      getRandomArrayElements,
      rangeRandom,
    };
  },
});
</script>

<style lang="scss" scoped>
.play-list {
  width: 7.5rem;
  padding: 0 0.4rem;
  margin-top: 0.4rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  .play-list-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;

    .left {
      display: flex;
      align-items: center;

      .icon {
        width: 0.5rem;
        height: 0.5rem;
      }

      .text {
        display: flex;
        align-items: center;
        margin-left: 0.2rem;

        .title {
          font-size: 0.3rem;
          font-weight: 900;
        }

        .num {
          font-size: 0.24rem;
          color: #666;
        }
      }
    }

    .right {
      height: 0.6rem;
      padding: 0.1rem;
      font-size: 0.24rem;
      color: #fff;
      background-color: orange;
      border-radius: 0.4rem;
    }
  }

  .play-list-detail {
    .play-list-detail-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.1rem;

      .left {
        display: flex;
        align-items: center;
        color: #666;

        .left-index {
          width: 0.4rem;
        }

        .content {
          width: 4.2rem;
          margin-left: 0.4rem;

          .title {
            margin-bottom: 0.1rem;
            font-size: 0.3rem;
            font-weight: 700;
            color: #000;

            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .author {
            height: 0.36rem;
            line-height: 0.36rem;
            font-size: 0.22rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            .tag {
              border: 1px solid orange;
              margin-right: 0.05rem;
              font-size: 0.2rem;
              color: orange;
              border-radius: 0.1rem;
            }

            .al-name {
              color: #aaa;
            }
          }
        }
      }

      .right {
        .icon {
          margin: 0 0.2rem;
        }
      }
    }
  }
}
</style>
