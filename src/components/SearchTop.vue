<template>
  <div class="search-top">
    <!--  -->
    <div class="search-top-nav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="right">
        <input
          v-model="searchKeyWord"
          type="text"
          :placeholder="placeholder"
          @keydown.enter="saveKeyWord"
        />
      </div>
    </div>
    <!-- 顶部历史 -->
    <div v-show="searchSongs.length === 0" class="history">
      <div class="history-left">历史</div>
      <div class="history-right">
        <div
          class="keyword-item"
          v-for="(item, i) in keywordList"
          :key="i"
          @click="historySearch(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 播放列表 -->
    <div v-show="searchSongs.length !== 0" class="play-list">
      <!-- 播放列表顶部 -->
      <div class="play-list-top">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <div class="text">
            <div class="title">播放全部</div>
            <div class="num">(共{{ searchSongs.length }}首)</div>
          </div>
        </div>
      </div>

      <!-- 播放列表详情 -->
      <div class="play-list-detail">
        <div
          class="play-list-detail-item"
          v-for="(item, index) in searchSongs"
          :key="index"
        >
          <div class="left">
            <div class="left-index">{{ index + 1 }}</div>
            <div class="content">
              <div class="title">{{ item.name }}</div>
              <div class="author">
                <!-- tags数据接口暂时没找到,随机模拟 -->
                <!-- <span
                  class="tag"
                  v-for="(tag, tIndex) in getRandomArrayElements(
                    ['SQ', '试听', 'VIP', '独家'],
                    rangeRandom(0, 4)
                  )"
                  :key="tIndex"
                >
                  {{ tag }}
                </span> -->
                <span class="al-name">{{ item.album.name }}</span>
              </div>
            </div>
          </div>
          <div class="right">
            <!-- 播放第index首歌 -->
            <svg class="icon" aria-hidden="true" @click="setPlayIndex(index)">
              <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gf-playlistMusic"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { searchMusic } from "@/api";
import { changeValue, getRandomArrayElements, rangeRandom } from "@/api/util";

export default defineComponent({
  setup(props) {
    const placeholder = ref("陈奕迅");
    const keywordList = ref([]); // 保存历史关键字的数组
    const searchKeyWord = ref(""); // 搜索关键字
    const searchSongs = ref([]); // 搜索结果

    onBeforeMount(() => {
      keywordList.value = localStorage.getItem("keywordList")
        ? JSON.parse(localStorage.getItem("keywordList"))
        : [];
    });

    /* 保存关键字 */
    const saveKeyWord = async () => {
      keywordList.value.push(searchKeyWord.value);
      keywordList.value = Array.from(new Set(keywordList.value)); // 去重复
      // 大于10个,保留后10个
      if (keywordList.value.length > 10) {
        keywordList.value = keywordList.value.slice(
          keywordList.value.length - 10,
          keywordList.value.length
        );
      }
      localStorage.setItem("keywordList", JSON.stringify(keywordList.value));

      // 搜索关键词
      const result = await searchMusic(searchKeyWord.value);
      searchSongs.value = result.data.result.songs;
    };

    /* 关键字搜索 */
    const historySearch = (keyword) => {
      searchKeyWord.value = keyword;
      saveKeyWord();
    };
    return {
      placeholder,
      searchKeyWord,
      keywordList,
      searchSongs,

      saveKeyWord,
      changeValue,
      getRandomArrayElements,
      rangeRandom,
      historySearch,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-top {
  width: 7.5rem;
  height: calc(100vh - 1.2rem);
  padding: 0 0.4rem;

  .search-top-nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.2rem;
    padding: 0 0.4rem;

    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }

    .right {
      flex: 1;
      padding: 0 0 0 0.4rem;

      input {
        width: 100%;
        height: 0.5rem;
        border: none;
        outline: none;
        border-bottom: 1px solid #666;
      }
    }
  }

  .history {
    display: flex;
    margin-top: 1.2rem;

    .history-left {
      width: 1.2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      margin: 0.2rem 0rem;
      font-weight: 700;
    }

    .history-right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      color: #666;

      .keyword-item {
        background-color: #eee;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        margin: 0.2rem 0.1rem;
      }
    }
  }
}

.play-list {
  position: fixed;
  top: 1.2rem;
  bottom: 1.2rem;
  width: 7.5rem;
  padding: 0 0.4rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  overflow: scroll;

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
