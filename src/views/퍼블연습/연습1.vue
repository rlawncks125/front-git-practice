<template>
  <div class="bg-yellow-400 text-base">
    <p @click="onClickEvent">연습1</p>
    <section id="sec1" class="bg-red-400">
      <p class="content-text-test after:block after:h-[2rem] after:text-white">
        연습2
      </p>
    </section>
    <section id="sec2" class="apply-test bg-red-400 text-[1rem]">
      <p>연습3</p>
    </section>
    <footer
      class="text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-green-300"
    >
      <p>바탁 폰트 그라데이션</p>
      <p>바탁 폰트</p>
    </footer>

    <swiper
      class="overflow-none h-[20rem] max-w-[1136px] my-4"
      :slidesPerView="3"
      :slidesPerGroup="1"
      :space-between="25"
      :loop="true"
      :navigation="false"
      :pagination="pagination"
    >
      <swiper-slide
        v-for="item in swiperItems"
        class="border rounded-3xl border-black"
        :key="item.id"
      >
        slide {{ item }}
      </swiper-slide>
    </swiper>
    <div>내용</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const swiperItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return {
      swiperItems,
      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: any) {
          return `<span class="${className} pagin1">${index + 1}</span>`;
        },
      },
    };
  },
});
</script>

<style lang="scss">
.swiper-pagination-bullet.pagin1 {
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  color: white;
}
</style>
