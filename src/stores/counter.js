import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    oddEven: "",
  }),
  actions: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.counter % 2 === 0) {
        return "even";
      }
      return "odd";
    },
  },
});
