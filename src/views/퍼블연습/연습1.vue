<template>
  <div class="min-w-[900px]">
    <nav
      ref="navRef"
      :class="isNavActive ? 'bg-blue-400 shadow-2xl' : 'bg-white'"
      class="flex-col-center h-[10.4rem] px-[2.5rem] sm:px-[7.2rem] sticky top-0 left-0 text-[1.8rem] z-[1000] transition"
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
    <section id="video-sec">
      <div class="relative w-full my-[4rem]">
        <div
          class="z-[101] absolute text-white text-[2.5rem] font-bold left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <p>MAKE JEJU BETTER</p>
          <br />
          <p>청정 제주를 지키는 여행,</p>
          <p>제주 패스와 함께해 주세요</p>
          <br />
          <p>참여하기</p>
        </div>
        <video autoplay loop muted>
          <source
            src="https://static-www.jejupass.com/resource/PC/images/esg/main_home_video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
    <section id="promotion">
      <swiper
        class="swiper-pagination-outside-0 h-[20rem] max-w-[1136px] my-4"
        :slidesPerView="2.5"
        :slidesPerGroup="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :navigation="false"
        :pagination="pagination"
        @swiper="setSwiperController"
      >
        <swiper-slide
          v-for="item in promotionItems"
          class="border rounded-3xl border-transparent overflow-hidden"
          :key="item.id"
        >
          <img class="h-full w-full object-cover" :src="item.imageUrl" alt="" />
        </swiper-slide>
        <div
          class="swiper-auto-btn cursor-pointer z-[101]"
          @click="onChangeAutoPlay"
        >
          auto {{ isSwiperAutoPlay }}
        </div>
      </swiper>
    </section>
    <section id="story" class="mb-[6rem] mt-[12rem]">
      <!-- 타이틀 -->
      <h1 class="text-4xl font-bold mb-[5rem]">테마스토리</h1>
      <!-- 이미지 -->
      <div class="flex gap-3">
        <a
          href="#/st1"
          class="gradinet-shadow-b rounded-3xl overflow-hidden relative"
        >
          <figure class="h-full">
            <img
              class="h-full hover:scale-110 transition duration-700"
              src="https://static-file.jejupass.com/download/691150?width=736&height=872"
              alt="빈집프로젝트"
            />
          </figure>
          <div
            class="z-[1] absolute bottom-[10%] left-[10%] font-bold text-left pointer-events-none"
          >
            <p class="text-white text-3xl">
              #다자요 빈집프로젝트 <br />
              하천 바람집
            </p>
            <br />
            <p class="text-gray-400 text-2xl">
              #다자요 #감성숙소 #서귀포숙소 #독채펜션
            </p>
          </div>
        </a>
        <a
          href="#/st1"
          class="gradinet-shadow-b rounded-3xl overflow-hidden relative"
        >
          <figure class="h-full">
            <img
              class="h-full hover:scale-110 transition duration-700"
              src="https://static-file.jejupass.com/download/675824?width=736&height=872"
              alt="빈집프로젝트"
            />
          </figure>
          <div
            class="z-[1] absolute bottom-[10%] left-[10%] font-bold text-left pointer-events-none"
          >
            <p class="text-white text-3xl">
              아이에게 만점 <br />
              부모에겐 만족
            </p>
            <br />
            <p class="text-gray-400 text-2xl">
              #예스키즈존 #테마카페 #가족여행 #이색적인
            </p>
          </div>
        </a>
        <a
          href="#/st1"
          class="gradinet-shadow-b rounded-3xl overflow-hidden relative"
        >
          <figure class="h-full">
            <img
              class="h-full hover:scale-110 transition duration-700"
              src="https://static-file.jejupass.com/download/675875?width=736&height=872"
              alt="빈집프로젝트"
            />
            <div
              class="z-[1] absolute bottom-[10%] left-[10%] font-bold text-left pointer-events-none"
            >
              <p class="text-white text-3xl">한 빵 한 빵 장인 정신</p>
              <br />
              <p class="text-gray-400 text-2xl">
                #제주맛집 #제주베이커리 #제주도 카페 #빵지순례
              </p>
            </div>
          </figure>
        </a>
      </div>
      <!-- 태그 -->
      <div class="h-[5rem] text-2xl my-[3rem] flex justify-center gap-[3rem]">
        <div class="p-6 bg-gray-300 rounded-[5rem] font-bold">전체</div>
        <div class="p-6 bg-gray-300 rounded-[5rem] font-bold">#디저트</div>
        <div class="p-6 bg-gray-300 rounded-[5rem] font-bold">#이색적인</div>
        <div class="p-6 bg-gray-300 rounded-[5rem] font-bold">#뷰맛집</div>
        <div class="p-6 bg-gray-300 rounded-[5rem] font-bold">#혼밥</div>
        <div class="p-6 bg-gray-300 rounded-[5rem] font-bold">#국수맛집</div>
      </div>
    </section>
    <section id="service" class="my-[8rem]">
      <h1 class="text-5xl font-bold">서비스 이용안내</h1>
      <!-- 서비스 -->
      <div class="flex justify-center gap-[4rem]">
        <a href="#/st1">
          <div
            class="service-sprite-0 w-[9.6rem] h-[9.6rem] border border-blue-200 rounded-full my-12 mx-auto"
          ></div>
          <strong class="text-3xl">렌터카 예약 안내</strong>
        </a>
        <a href="#/st1">
          <div
            class="service-sprite-2 w-[9.6rem] h-[9.6rem] border border-blue-200 rounded-full my-12 mx-auto"
          ></div>
          <strong class="text-3xl">렌터카 보험안내</strong>
        </a>
        <a href="#/st1">
          <div
            class="service-sprite-3 w-[9.6rem] h-[9.6rem] border border-blue-200 rounded-full my-12 mx-auto"
          ></div>
          <strong class="text-3xl">렌터카 인수 반납</strong>
        </a>
        <a href="#/st1">
          <div
            class="service-sprite-4 w-[9.6rem] h-[9.6rem] border border-blue-200 rounded-full my-12 mx-auto"
          ></div>
          <strong class="text-3xl">카페패스 이용안내</strong>
        </a>
        <a href="#/st1">
          <div
            class="service-sprite-5 w-[9.6rem] h-[9.6rem] border border-blue-200 rounded-full my-12 mx-auto"
          ></div>
          <strong class="text-3xl">결항 안내</strong>
        </a>
      </div>
    </section>
    <footer class="h-[10rem] bg-blue-400">하단</footer>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script lang="ts">
import Swiper from "swiper";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  setup() {
    const promotionItems = [
      {
        imageUrl:
          "https://static-file.jejupass.com/download/687857?width=736&height=360",
      },
      {
        imageUrl:
          "https://static-file.jejupass.com/download/120176?width=736&height=360",
      },
      {
        imageUrl:
          "https://static-file.jejupass.com/download/682916?width=736&height=360",
      },
      {
        imageUrl:
          "https://static-file.jejupass.com/download/119626?width=736&height=360",
      },
      {
        imageUrl:
          "https://static-file.jejupass.com/download/120197?width=736&height=360",
      },
      {
        imageUrl:
          "https://static-file.jejupass.com/download/612133?width=736&height=360",
      },
    ];

    // swiper 컨트롤
    const isSwiperAutoPlay = ref(true);
    const swiperController = ref<Swiper | null>(null);

    const setSwiperController = (swiper: Swiper) => {
      swiperController.value = swiper;
    };

    const onChangeAutoPlay = () => {
      isSwiperAutoPlay.value = !isSwiperAutoPlay.value;

      if (!swiperController.value) return;

      isSwiperAutoPlay.value
        ? swiperController.value.autoplay.start()
        : swiperController.value.autoplay.stop();
    };

    // nav
    const navRef = ref<HTMLElement>();
    const isNavActive = ref(false);

    const navScrollTrigger = () => {
      const scrollY = window.scrollY;
      const navHeight = navRef.value?.clientHeight;

      if (navHeight && scrollY > navHeight) {
        isNavActive.value = true;
      } else {
        isNavActive.value = false;
      }
    };

    // sec 2 이벤트 트리거 넘버
    const actiaveEventtriggerNumber = ref(0);

    onMounted(() => {
      navScrollTrigger();
      window.addEventListener("scroll", navScrollTrigger);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", navScrollTrigger);
    });

    return {
      navRef,
      isNavActive,
      actiaveEventtriggerNumber,
      promotionItems,
      isSwiperAutoPlay,
      setSwiperController,
      onChangeAutoPlay,
      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: any) {
          return `<span class="${className} pagin1"></span>`;
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
  width: 1rem;
  height: 1rem;
  color: white;
}
.swiper-pagination-bullet-active {
  width: 3rem !important;
  border-radius: 3rem;
  background-color: black;
}

.swiper-pagination-outside-0 {
  &.swiper-container {
    overflow: unset;
    margin-bottom: 4rem;
  }

  .swiper-pagination {
    bottom: -3rem;
  }
}
.swiper-auto-btn {
  position: absolute;
  bottom: -2.8rem;
  left: 58%;
}

.gradinet-shadow-b {
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #000);
    opacity: 0.8;
  }
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

@mixin service-sprite() {
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    top: calc(50% - 16px);
    left: calc(50% - 16px);

    background: url("https://static-www.jejupass.com/resource/PC/images/main/spr_mainicon.png")
      no-repeat 0 0;
  }
}

.service-sprite-0 {
  @include service-sprite();
}
.service-sprite-1 {
  @include service-sprite();
  &::after {
    background-position: -32px 0;
  }
}
.service-sprite-2 {
  @include service-sprite();
  &::after {
    background-position: -62px 0;
  }
}
.service-sprite-3 {
  @include service-sprite();
  &::after {
    background-position: -96px 0;
  }
}
.service-sprite-4 {
  @include service-sprite();
  &::after {
    background-position: -128px 0;
  }
}
.service-sprite-5 {
  @include service-sprite();
  &::after {
    background-position: -160px 0;
  }
}
</style>
