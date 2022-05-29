<template>
  <div>
    <div class="text-2xl mt-2 font-bold text-blue-800">
      <p>(html , css) 를 주로 연습 하는 곳 입니다.</p>
      <p class="text-yellow-800">home</p>
    </div>

    <div id="nav">
      <ul class="flex flex-col w-full items-start gap-3 text-3xl">
        <li>
          <router-link to="/st1">연습1 </router-link>
          <span>
            참고 사이트 :
            <a href="https://www.jejupass.com/web" target="_blank">제주패스</a>
          </span>
        </li>
        <li>
          <router-link to="/st2">연습2 </router-link>
          <span>
            참고 사이트 :
            <a href="https://www.museum.go.kr/site/main/home" target="_blank"
              >국립중앙박물관</a
            >
          </span>
        </li>
        <li>
          <router-link to="/st3">연습3 </router-link>
          <span> </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
