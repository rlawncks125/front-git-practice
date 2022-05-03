<template>
  <div class="bg-yellow-300">
    <p @click="onClickEvent">연습1</p>
    <section id="sec1" class="bg-red-400">
      <p>연습2</p>
    </section>
    <section id="sec2" class="bg-red-400">
      <p>연습3</p>
    </section>
    <footer>바닥</footer>
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

<style scoped></style>
