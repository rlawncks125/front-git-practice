# Tailwind쓸떄

```
// class=''  자동완성 쓸려면 postcss도 설치 해야 자동완성이 된다
npm install -D tailwindcss postcss autoprefixer

<!-- 여기 프로젝트는 autoprefixer를 사용하여 저장할떄마다 class를 갱신 -->

// postcss8 호한 에러시
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

```
