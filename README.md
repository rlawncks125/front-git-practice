# Tailwind쓸떄

```
// class=''  자동완성 쓸려면 postcss도 설치 해야 자동완성이 된다
npm install -D tailwindcss postcss autoprefixer

// 여기 프로젝트는 postcss & autoprefixer plugin를 사용하여 저장할떄마다 class를 갱신


// postcss8 호한 에러시
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^8 autoprefixer@^9

```

## tailwind 임의의 값 사용시

```

// package.json
{
  ...
  "serve": "TAILWIND_MODE=watch vue-cli-service serve", // TAILWIND_MODE=watch 추가
  ...
}

// tailwind.config.js 추가
module.exports {
...
mode: "jit",
purge: ["./public/**/*.html", "./src/**/*.{html,vue}"],
...
}

```

## swiper 에러시 버전 다운

사용 방법도 6버전에 맞게 사용해야한다 ( 모듈 선언 방식이 다름)
6버전 사이트 : [아카이브](http://web.archive.org/web/20210824143327/https://swiperjs.com/demos/)

```
"swiper": "^6.8.4",

```
