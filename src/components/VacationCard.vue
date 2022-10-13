<template>
  <div class="col">
    <Card>
      <template #title>
        <div class="flex">
          <div class="flex-grow-1">{{ title }}</div>
          <i class="pi pi-info-circle"></i>
        </div>
      </template>
      <template #content>
        <ProgressCircle :value="value" :max="max" :size="250" />
      </template>
    </Card>
  </div>
</template>

<script>
import ProgressCircle from "./common/ProgressCircle.vue";
export default {
  name: "VacationCard",
  components: { ProgressCircle },
  props: {
    title: String,
    value: Number,
    max: Number,
  },
};
</script>
