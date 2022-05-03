<template>
  <div>
    <p class="text-2xl mt-2 font-bold text-blue-500">home</p>

    <div id="nav" class="flex flex-col w-full items-start gap-3">
      <router-link to="/">Home</router-link>
      <router-link to="/">Home2</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
