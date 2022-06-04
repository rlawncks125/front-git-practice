// @ts-nocheck
// @ts-ignore

import { defineComponent, onMounted, ref, toRaw, toRefs } from "vue";

export const Child = defineComponent({
  props: {
    txt: String,
  },
  render(h) {
    return <div>child compoents {h.txt} </div>;
  },
});

export default defineComponent({
  props: { childMsg: String },
  setup() {
    const count = ref<number>(0);
    const increment = () => count.value++;

    return { count, increment };
  },
  render(h) {
    // this 또는 h파라미터로 setup,props 등등 컴포넌트 접근
    if (this.count > 10) {
      return <div>숫자가 넘쳐났어요 {h.count}</div>;
    }

    return (
      <div class={"text-[2rem]"}>
        <h2>Vue jsx test Main {this.count} </h2>
        <button
          className={"border bg-yellow-400 p-[1rem] "}
          onClick={this.increment}
        >
          +
        </button>
        <button
          className={"border bg-yellow-400 p-[1rem] "}
          onClick={() => {
            this.count--;
          }}
        >
          -
        </button>
        <Child txt={this.childMsg} />
      </div>
    );
  },
});
