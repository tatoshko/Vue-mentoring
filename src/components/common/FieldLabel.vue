<template>
  <template v-if="isOnTop">
    <div :class="fontSize" class="font-bold">{{ value }}</div>
    <div class="mt-2 mb-4">
      <slot></slot>
    </div>
  </template>
  <template v-if="isOnLeft">
    <div class="flex flex-row align-items-center mb-4">
      <div class="text-l font-bold mr-2">{{ value }}</div>
      <div class="flex-grow-1">
        <slot></slot>
      </div>
    </div>
  </template>
</template>
<script>
export default {
  props: {
    value: String,
    position: {
      type: String,
      default: "top",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  computed: {
    isOnTop() {
      return this.position === "top";
    },
    isOnLeft() {
      return this.position === "left";
    },
    fontSize() {
      // eslint-disable-next-line no-empty
      switch (this.size) {
        case "small":
          return "text-base";
        case "medium":
          return "text-l";
        case "large":
          return "text-2xl";
        default:
          return "text-l";
      }
    },
  },
};
</script>
