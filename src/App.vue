<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}

.icon {
  width: 0.3rem;
  height: 0.3rem;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
