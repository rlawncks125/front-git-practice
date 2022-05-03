<template>
  <div class="bg-yellow-400">
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
      class="bg-blue-400 h-[20rem]"
      :navigation="true"
      :pagination="pagination"
    >
      <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
      ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
      ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
      ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
      ><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
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
