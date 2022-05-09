<template>
  <div class="">
    <!-- <swiper
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
    </swiper> -->
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
