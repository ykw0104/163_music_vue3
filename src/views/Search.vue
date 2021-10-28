<template>
  <div id="search-page">
    <search-top></search-top>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SearchTop from "@/components/SearchTop";

export default defineComponent({
  components: { SearchTop },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
