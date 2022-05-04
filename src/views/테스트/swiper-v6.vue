<template>
  <swiper
    class="swiper-pagination-outside bg-blue-400 h-[20rem]"
    :navigation="true"
    :pagination="pagination"
  >
    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
  </swiper>
  <div>내용 더 추가</div>
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
          return `<span class="${className} pagin-v1">${index + 1}</span>`;
        },
      },
    };
  },
});
</script>

<style lang="scss">
.swiper-pagination-bullet.pagin-v1 {
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  color: white;
}

.swiper-pagination-outside {
  &.swiper-container {
    overflow: unset;
    margin-bottom: 3rem;
  }

  .swiper-pagination {
    bottom: -2.5rem;
  }
}
</style>
