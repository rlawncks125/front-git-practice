<template>
  <nav class="flex justify-between mx-[1rem] text-[1.6rem]">
    <div>logo</div>
    <div>
      <ul class="flex gap-[2rem]">
        <li>
          <a href="#/st3"> 링크1 </a>
        </li>
        <li>
          <a href="#/st3"> 링크2 </a>
        </li>
        <li>
          <a href="#/st3"> 링크3 </a>
        </li>
        <li>
          <a href="#/st3"> 링크4 </a>
        </li>
        <li>
          <a href="#/st3"> 링크5 </a>
        </li>
        <li>
          <a href="#/st3"> 링크6 </a>
        </li>
      </ul>
    </div>
  </nav>
  <section class="block bg-purple-400 h-[40rem]">
    <div class="grid grid-cols-3 center">
      <div class="mx-auto">
        <img
          class="w-[4rem] h-[4rem] border rounded-full overflow-hidden"
          src="#"
          alt="이미지"
        />
        <p>sss</p>
        <p>www</p>
      </div>
      <div class="mx-auto">
        <img
          class="w-[4rem] h-[4rem] border rounded-full overflow-hidden"
          src="#"
          alt="이미지"
        />
        <p>sss</p>
        <p>www</p>
      </div>
      <div class="mx-auto">
        <img
          class="w-[4rem] h-[4rem] border rounded-full overflow-hidden"
          src="#"
          alt="이미지"
        />
        <p>sss</p>
        <p>www</p>
      </div>
      <div class="mx-auto">
        <img
          class="w-[4rem] h-[4rem] border rounded-full overflow-hidden"
          src="#"
          alt="이미지"
        />
        <p>sss</p>
        <p>www</p>
      </div>
    </div>
  </section>
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
