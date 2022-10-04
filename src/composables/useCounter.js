import { computed, nextTick, ref, watch } from "vue";

export const useCounter = () => {
  const counter = ref(0);

  const increaseCounter = () => {
    counter.value++;
    nextTick(() => {
      console.log("Do something after value update");
    });
  };

  const decreaseCounter = () => {
    counter.value--;
  };

  const oddEven = computed(() => {
    if (counter.value % 2 === 0) {
      return "even";
    }
    return "odd";
  });

  watch(
    () => counter.value,
    (newCounter, oldCounter) => {
      if (newCounter === 20) {
        alert("Reached 20!");
      }
    }
  );

  return { counter, increaseCounter, oddEven, decreaseCounter };
};
