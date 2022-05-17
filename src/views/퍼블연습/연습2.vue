<template>
  <!-- 유틸 -->
  <div
    class="util hidden laptop:flex justify-end my-[1rem] gap-[1rem] px-[2rem]"
  >
    <a href="#/st2">어린이 박물관</a>
    <a href="#/st2">학예사자격증</a>
    <a href="#/st2">박물관신문</a>
    <a href="#/st2">속속박문관 바로가기</a>
    <a href="#/st2">Language</a>
    <div class="util-social flex gap-[1rem]">
      <a href="#/st2">
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item1.png"
          alt=""
        />
      </a>
      <a href="#/st2">
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item2.png"
          alt=""
        />
      </a>
      <a href="#/st2">
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item3.png"
          alt=""
        />
      </a>
      <a href="#/st2">
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item4.png"
          alt=""
        />
      </a>
      <a href="#/st2">
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item5.png"
          alt=""
        />
      </a>
      <a href="#/st2">
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item6.png"
          alt=""
        />
      </a>
    </div>
  </div>
  <!-- nav -->
  <nav
    class="w-full relative flex px-[2rem] py-[4rem] justify-between items-center"
  >
    <div class="logo w-[22rem] mr-[3rem]">
      <img
        src="https://www.museum.go.kr/ux/content/images/common/header_logo.png"
        alt=""
      />
    </div>
    <ul
      class="nav-item w-full hidden laptop:flex justify-start text-[1.8rem] font-bold gap-[3rem]"
    >
      <li>관란 정보</li>
      <li>전시</li>
      <li>교육</li>
      <li>소장품</li>
      <li>학술ㆍ출판</li>
      <li>소식ㆍ참여</li>
      <li>박물관 소개</li>
    </ul>
    <div
      class="relative laptop:absolute flex items-center text-[1.5rem] gap-[2rem] top-0 right-[2rem]"
    >
      <span class="hidden laptop:inline-block">로그인</span>
      <span class="hidden laptop:inline-block">회원가입</span>
      <img
        class="object-contain h-full"
        src="https://www.museum.go.kr/ux/content/images/common/btn/btn_search_open.png"
        alt=""
      />
      <img
        class="object-contain h-full laptop:hidden"
        src="https://www.museum.go.kr/ux/content/images/common/btn/m_btn_menu_open.png"
        alt=""
      />
    </div>
  </nav>
  <!-- main banner swuper -->
  <swiper
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    @swiper="setmainSwiperController"
    class="mySwiper h-[105vw] laptop:h-[40vw]"
  >
    <swiper-slide v-for="item in mainBannerSwiperSlide" :key="item.id">
      <picture>
        <source
          class="w-full object-contain"
          media="(min-width: 900px)"
          :srcset="item.laptopImage"
        />
        <img :src="item.mobileImage" class="w-full object-contain" alt="" />
      </picture>
    </swiper-slide>
    <div
      class="swiper-control-btn cursor-pointer"
      :class="{ pause: isMainSwiperAutoPlay }"
      @click="onMainBannerChangeAutoPlay"
    ></div>
  </swiper>
  <!-- 오는 방법 & 입장료 & 관람시간 & 예약 -->
  <section class="laptop:flex">
    <!-- 관람 시간 & 관람료 -->
    <div
      class="flex flex-col gap-[2rem] px-[2rem] py-[4rem] border-b-2 border-black laptop:px-0 laptop:mx-[2rem]"
    >
      <!-- 관람시간 -->
      <div class="flex flex-col text-[1.8rem]">
        <div class="h-[3.5rem] flex items-center gap-[1rem]">
          <img
            class="h-full"
            src="https://www.museum.go.kr/ux/content/images/common/ico/ico_main_cont_img_1.png"
            alt=""
          />
          <strong class="text-[2.2rem]">관람시간</strong>
        </div>
        <div class="flex gap-[2rem] pl-[2rem] flex-wrap">
          <p><strong>월/화/목/금/일</strong><span>10:00 ~ 18:00</span></p>
          <p><strong>수/토</strong> <span>10:00 ~ 21:00</span></p>
          <p>*입장 마감은 폐관 30분 전까지</p>
        </div>
      </div>
      <!-- 관람료 -->
      <div
        class="h-[3.5rem] flex justify-start items-center gap-[2rem] text-[1.8rem]"
      >
        <img
          src="https://www.museum.go.kr/ux/content/images/common/ico/ico_main_cont_img_2.png"
          alt=""
        />
        <strong>관람료</strong>
        <strong>무료</strong>
        <p>특별전시는 유로</p>
      </div>
    </div>
    <!-- 오는길 & 예약 -->
    <div
      class="p-[10rem] laptop:p-0 laptop:w-[22rem] flex items-center justify-around gap-[2rem] font-bold text-[4rem] laptop:text-[2rem]"
    >
      <div
        class="font-bg-ani cursor-pointer w-full h-full flex flex-col justify-center text-purple-400"
      >
        <p>오시는길</p>
      </div>
      <div
        class="font-bg-ani cursor-pointer w-full h-full flex flex-col justify-center text-purple-400"
      >
        <p>예약 하기</p>
      </div>
    </div>
  </section>
  <!-- 전시 -->

  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script lang="ts">
import Swiper from "swiper";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // main
    const {
      isSwiperAutoPlay: isMainSwiperAutoPlay,
      setSwiperController: setmainSwiperController,
      onChangeAutoPlay: onMainBannerChangeAutoPlay,
    } = useSwiper();

    const mainBannerSwiperSlide = [
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650760.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650760_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650777.png?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650777_m.png?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650242.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650242_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650691.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650691_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650698.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650698_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/648212.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/648212_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650225.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650225_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/631285.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/631285_m.jpg?_=1652787257674",
      },
      {
        laptopImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650047.jpg?_=1652787257674",
        mobileImage:
          "https://www.museum.go.kr/uploadfile/ecms/visual/650988_m.jpg?_=1652787257675",
      },
    ];

    return {
      // main banner swiper
      mainBannerSwiperSlide,
      setmainSwiperController,
      isMainSwiperAutoPlay,
      onMainBannerChangeAutoPlay,
      //
    };
  },
});

const useSwiper = () => {
  const isSwiperAutoPlay = ref(true);
  const SwiperController = ref<Swiper | null>(null);

  const setSwiperController = (swiper: Swiper) => {
    SwiperController.value = swiper;
  };

  const onChangeAutoPlay = () => {
    isSwiperAutoPlay.value = !isSwiperAutoPlay.value;

    if (!SwiperController.value) return;

    isSwiperAutoPlay.value
      ? SwiperController.value.autoplay.start()
      : SwiperController.value.autoplay.stop();
  };

  return {
    isSwiperAutoPlay,
    SwiperController,
    setSwiperController,
    onChangeAutoPlay,
  };
};
</script>

<style lang="scss">
.util {
  font-size: 1.5rem;
  & > div,
  & > a {
    border-top: 3px solid black;
    padding: 1rem;
  }
}

.util-social {
  img {
    object-fit: contain;
  }
}

.mySwiper {
  .swiper-pagination {
    text-align: right;
    padding: 0 10rem 2rem 0;

    .swiper-pagination-bullet {
      $cir-scale: 2rem;
      width: $cir-scale;
      height: $cir-scale;

      background-color: white;
      opacity: 1;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: blue;
    }
  }
}

.swiper-control-btn {
  $btn-size: 4rem;
  width: $btn-size;
  height: $btn-size;
  background-color: white;
  position: absolute;
  bottom: 2rem;
  right: 5rem;
  z-index: 101;

  background: url("https://www.museum.go.kr/ux/content/images/common/btn/main_btn_play.png")
    no-repeat center/cover;

  &.pause {
    background: url("https://www.museum.go.kr/ux/content/images/common/btn/main_btn_stop.png")
      no-repeat center/cover;
  }
}
.font-bg-ani {
  position: relative;
  height: 12rem;

  &:hover {
    color: white;

    &::before {
      height: 6rem;
    }
  }
  &::before {
    transition: height 0.25s ease-in;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    z-index: -1;

    left: 0;
    bottom: 3rem;
    background-color: rgba(167, 139, 250, 1);

    @media (min-width: 900px) {
      bottom: 3rem;
    }
  }
}
</style>
