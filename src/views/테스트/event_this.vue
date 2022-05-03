<template>
  <div id="warp" class="bg-yellow-300">
    <p id="test1" @click="onClickEvent">vue onClick</p>
    <div class="bg-red-400">
      <p id="test2">addEventListener</p>
    </div>
  </div>
  <div ref="refHtml">ref Element</div>
  <button
    class="border border-black p-[0.4rem] rounded-lg hover:bg-red-200 transition-all hover:scale-[1.1]"
    @click="refClick"
  >
    refBtn
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const refHtml = ref<HTMLElement>();

    const onClickEvent = function (e: any) {
      // @ts-ignore
      const el = this.$el;
      const target = e.target as HTMLElement;

      // @ts-ignore
      console.log(this, el, target);
      // proxy() // vue Proxy 데이터 방식
      // div#wrap
      // p#test1
    };

    const eventListener = function (e: any) {
      // @ts-ignore
      const el = this;
      const target = e.target as HTMLElement;

      // @ts-ignore
      console.log(this, el, target);
      // p#test2
      // p#test2
      // p#test2
    };

    const refClick = () => {
      console.log(refHtml.value);
    };

    onMounted(() => {
      document
        .querySelector("#test2")
        ?.addEventListener("click", eventListener);
    });

    return { onClickEvent, refClick, refHtml };
  },
});
</script>

<style scoped></style>
