<template>
  <nav
    class="flex-col-center h-[10.4rem] px-[2.5rem] sm:px-[7.2rem] sticky top-0 left-0 text-[1.8rem]"
  >
    <div class="flex justify-between gap-[1rem]">
      <a href="#/st1">
        <div class="logo-sprite" alt="logo" />
      </a>
      <div class="hidden sm:block">
        <ul class="flex gap-[3.2rem] font-bold">
          <li>
            <a href="#/st1" alt="ESG"> ESG </a>
          </li>
          <li>
            <a href="#/st1" alt="항공"> 항공 </a>
          </li>
          <li>
            <a href="#/st1" alt="렌터카"> 렌터카 </a>
          </li>
          <li>
            <a href="#/st1" alt="숙박"> 숙박 </a>
          </li>
          <li>
            <a href="#/st1" alt="맛집"> 맛집 </a>
          </li>
          <li>
            <a href="#/st1" alt="카페패스"> 카페패스 </a>
          </li>
        </ul>
      </div>
      <div class="search-border-bar cursor-pointer pl-[3rem]">검색</div>
    </div>
  </nav>
  <section id="event-trigger">
    <!-- 이벤트 트리거 -->
    <div class="flex justify-center gap-[2rem] my-[2rem]">
      <div
        class="event-trigger-sprite-0 cursor-pointer w-[5rem] h-[5rem] broder rounded-md shadow-lg"
        @click="actiaveEventtriggerNumber = 0"
        :class="actiaveEventtriggerNumber === 0 ? 'active' : ''"
      ></div>
      <div
        class="event-trigger-sprite-1 cursor-pointer w-[5rem] h-[5rem] broder rounded-md shadow-lg"
        @click="actiaveEventtriggerNumber = 1"
        :class="actiaveEventtriggerNumber === 1 ? 'active' : ''"
      ></div>
      <div
        class="event-trigger-sprite-2 cursor-pointer w-[5rem] h-[5rem] broder rounded-md shadow-lg"
        @click="actiaveEventtriggerNumber = 2"
        :class="actiaveEventtriggerNumber === 2 ? 'active' : ''"
      ></div>
      <div
        class="event-trigger-sprite-3 cursor-pointer w-[5rem] h-[5rem] broder rounded-md shadow-lg"
        @click="actiaveEventtriggerNumber = 3"
        :class="actiaveEventtriggerNumber === 3 ? 'active' : ''"
      ></div>
      <div
        class="event-trigger-sprite-4 cursor-pointer w-[5rem] h-[5rem] broder rounded-md shadow-lg"
        @click="actiaveEventtriggerNumber = 4"
        :class="actiaveEventtriggerNumber === 4 ? 'active' : ''"
      ></div>
    </div>
    <!-- 트리거 콘텐츠 -->
    <div class="h-[8.45rem] mt-[2rem] mb-[3rem] text-[1.4rem] text-left">
      <!-- 트리거 0 -->
      <div
        v-show="actiaveEventtriggerNumber === 0"
        class="flex justify-between gap-3"
      >
        <div
          class="w-[40%] border border-blue-400 rounded-3xl p-[2.3rem] flex justify-between shadow-lg"
        >
          <div class="">
            <p>출발</p>
            <p class="text-gray-400">어디서 떠나시나요?</p>
          </div>
          <p
            class="w-[32px] h-[32px] bg-blue-400 rounded-full cursor-pointer"
          ></p>
          <div>
            <p>도착</p>
            <p class="text-gray-400">어디로 떠나시나요?</p>
          </div>
        </div>

        <div class="w-[25%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>탑승일</p>
          <p class="text-gray-400">탑승일을 선택해주세요</p>
        </div>

        <div class="w-[25%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>인원 및 좌석 등급</p>
          <p class="text-gray-400">성인2, 일반석</p>
        </div>

        <div
          class="w-[9.2rem] border bg-blue-400 rounded-3xl p-[2.3rem] text-white text-center shadow-lg"
          :style="{ lineHeight: '4.25rem', fontSize: '1.5rem' }"
        >
          검색
        </div>
      </div>
      <!-- 트리거 1 -->
      <div
        v-show="actiaveEventtriggerNumber === 1"
        class="flex justify-between gap-3"
      >
        <div
          class="w-[30%] border border-blue-400 rounded-3xl p-[2.3rem] shadow-lg"
        >
          <p>대여/반납일</p>
          <p class="text-gray-400">대여/반납일을 선택해주세요.</p>
        </div>

        <div class="w-[25%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>대여/반납 시간</p>
          <p class="text-gray-400">시간을 선택해주세여</p>
        </div>

        <div class="w-[25%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>차량조건</p>
          <p class="text-gray-400">조건을 선택해주세요.</p>
        </div>

        <div class="w-[30%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>운전자 조건</p>
          <p class="text-gray-400">운전자 조건을 선택해주세여.</p>
        </div>
      </div>
      <!-- 트리거 2 -->
      <div
        v-show="actiaveEventtriggerNumber === 2"
        class="flex justify-between gap-3"
      >
        <div
          class="w-[50%] border rounded-3xl border-blue-400 p-[2.3rem] shadow-lg"
        >
          <p>여행지</p>
          <p class="text-gray-400">여행지를 선택하세요.</p>
        </div>

        <div class="w-[25%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>숙박일</p>
          <p class="text-gray-400">여행일정을 선택해주세요.</p>
        </div>

        <div class="w-[25%] border rounded-3xl p-[2.3rem] shadow-lg">
          <p>인원</p>
          <p class="text-gray-400">인원을 선택하세요.</p>
        </div>
      </div>
      <!-- 트리거 3 -->
      <div
        v-show="actiaveEventtriggerNumber === 3"
        class="flex justify-center gap-3 px-[20%]"
      >
        <div
          class="w-[100%] border rounded-3xl border-blue-400 p-[2.3rem] shadow-lg text-gray-400"
        >
          맛집을 검색하세요.
        </div>
        <div
          class="w-[7.15rem] h-[6.4rem] bg-blue-400 text-center text-white border rounded-3xl shadow-lg"
          :style="{ lineHeight: '6.4rem' }"
        >
          검색
        </div>
      </div>
      <!-- 트리거 4 -->
      <div
        v-show="actiaveEventtriggerNumber === 4"
        class="flex justify-center gap-3 px-[20%]"
      >
        <div
          class="w-[100%] border rounded-3xl border-blue-400 p-[2.3rem] shadow-lg text-gray-400"
        >
          상호명 혹은 키워드를 입력하세요.
        </div>
        <div
          class="w-[7.15rem] h-[6.4rem] bg-blue-400 text-center text-white border rounded-3xl shadow-lg"
          :style="{ lineHeight: '6.4rem' }"
        >
          검색
        </div>
      </div>
    </div>
  </section>

  <footer class="h-[10rem] bg-blue-400">하단</footer>
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

  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const swiperItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actiaveEventtriggerNumber = ref(0);

    return {
      actiaveEventtriggerNumber,
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
.search-border-bar {
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: gray;
    width: 0.5px;
    height: 80%;
    top: 10%;
    left: 0;
  }
}

.swiper-pagination-bullet.pagin1 {
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  color: white;
}

// sprite 이미지 위치
@mixin sprite() {
  background-image: url("https://static-www.jejupass.com/resource/PC/images/common/spr_layout.png");
  background-position: 0 0;
}

.logo-sprite {
  width: 14rem;
  height: 2.6rem;
  @include sprite;
}

.event-trigger-sprite-0 {
  position: relative;
  &::after {
    @include sprite;
    content: "";
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;

    background-position: 0 -98px;
    width: 3.2rem;
    height: 3.2rem;
  }
  &.active {
    background-color: rgba(96, 165, 250, 1);
    &::after {
      background-position: 0 -64px;
    }
  }
}
.event-trigger-sprite-1 {
  position: relative;
  &::after {
    @include sprite;
    content: "";
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;

    background-position: -34px -98px;
    width: 3.2rem;
    height: 3.2rem;
  }
  &.active {
    background-color: rgba(96, 165, 250, 1);
    &::after {
      background-position: -34px -64px;
    }
  }
}
.event-trigger-sprite-2 {
  position: relative;
  &::after {
    @include sprite;
    content: "";
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;

    background-position: -68px -98px;
    width: 3.2rem;
    height: 3.2rem;
  }
  &.active {
    background-color: rgba(96, 165, 250, 1);
    &::after {
      background-position: -68px -64px;
    }
  }
}
.event-trigger-sprite-3 {
  position: relative;
  &::after {
    @include sprite;
    content: "";
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;

    background-position: -102px -98px;
    width: 3.2rem;
    height: 3.2rem;
  }
  &.active {
    background-color: rgba(96, 165, 250, 1);
    &::after {
      background-position: -102px -64px;
    }
  }
}
.event-trigger-sprite-4 {
  position: relative;
  &::after {
    @include sprite;
    content: "";
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;

    background-position: -170px -98px;
    width: 3.2rem;
    height: 3.2rem;
  }
  &.active {
    background-color: rgba(96, 165, 250, 1);
    &::after {
      background-position: -170px -64px;
    }
  }
}
</style>
