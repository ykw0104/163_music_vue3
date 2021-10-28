<template>
  <div class="search-top">
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
    <div class="history">
      <div class="history-left">历史</div>
      <div class="history-right">
        <div class="keyword-item" v-for="(item, i) in keywordList" :key="i">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 顶部图标列表 -->
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";

export default defineComponent({
  setup(props) {
    const placeholder = ref("陈奕迅");
    const keywordList = ref([]);
    const searchKeyWord = ref("");

    onBeforeMount(() => {
      keywordList.value = localStorage.getItem("keywordList")
        ? JSON.parse(localStorage.getItem("keywordList"))
        : [];
    });

    const saveKeyWord = () => {
      keywordList.value.push(searchKeyWord.value);
      localStorage.setItem("keywordList", JSON.stringify(keywordList.value));
    };
    return {
      placeholder,
      searchKeyWord,
      keywordList,

      saveKeyWord,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-top {
  width: 7.5rem;
  padding: 0 0.4rem;

  .search-top-nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.2rem;

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
</style>
