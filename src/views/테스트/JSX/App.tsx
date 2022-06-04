import { defineComponent } from "vue";
import Vuejsx, { Child } from "@/views/테스트/JSX/vueJsx";

const App = defineComponent({
  render() {
    return (
      <>
        <Vuejsx childMsg="vue jsxs" />
        <Child txt="jsxApp" />
      </>
    );
  },
});

export default App;
