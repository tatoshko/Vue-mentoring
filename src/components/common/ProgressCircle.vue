<template>
  <svg viewBox="0 0 100 100" :width="size" :height="size">
    <circle
      :r="radius"
      :stroke="rangeColor"
      :stroke-width="strokeWidth"
      :stroke-dasharray="strokeDasharray"
      stroke-dashoffset="0"
      cx="50"
      cy="50"
      fill="transparent"
    ></circle>
    <circle
      :r="radius"
      :stroke="valueColor"
      :stroke-width="strokeWidth"
      :stroke-dasharray="strokeDasharray"
      :stroke-dashoffset="strokeDashoffset"
      cx="50"
      cy="50"
      fill="transparent"
      transform="rotate(-90 50 50)"
    ></circle>
    <text
      x="50"
      y="57"
      text-anchor="middle"
      fill="#6c757d"
      class="text-xl text-center"
    >
      {{ this.value }}
    </text>
  </svg>
</template>

<script>
export default {
  name: "ProgressCircle",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    valueTemplate: {
      type: String,
      default: "{value}",
    },
    size: {
      type: Number,
      default: 100,
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
    rangeColor: {
      type: String,
      default: "#D4D2D2",
    },
    valueColor: {
      type: String,
      default: "#098EA8",
    },
    textColor: {
      type: String,
      default: "#6C757D",
    },
  },
  computed: {
    radius() {
      return 50 - this.strokeWidth;
    },
    strokeDasharray() {
      return Math.PI * (this.radius * 2);
    },
    percent() {
      return (this.value / this.max) * 100;
    },
    strokeDashoffset() {
      return ((100 - this.percent) / 100) * this.strokeDasharray;
    },
  },
};
</script>
