<template>
  <div>ReactDom Render</div>

  <jsx-app />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import jsxApp from "@/views/테스트/JSX/App";

export default defineComponent({
  components: { jsxApp },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
