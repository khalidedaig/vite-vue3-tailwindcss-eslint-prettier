import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
});

const increment = function () {
  state.count++;
};

const decrement = function () {
  state.count--;
};

export default { state: readonly(state), increment, decrement };
