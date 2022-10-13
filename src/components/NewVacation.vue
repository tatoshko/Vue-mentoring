<template>
  <div class="grid">
    <div class="col-12 p-fluid">
      <div class="card">
        <FieldLabel value="Тип отпуска">
          <Dropdown
            v-model="selectedType"
            :options="vacationTypes"
            optionLabel="name"
          />
        </FieldLabel>

        <FieldLabel value="Даты">
          <Calendar
            v-model="selectedRange"
            selectionMode="range"
            showIcon
            showButtonBar=""
            selectOtherMonths
          />
        </FieldLabel>

        <FieldLabel value="С проектом согласованно" position="left">
          <Checkbox v-model="noObjections" value="С проектом согласованно" />
        </FieldLabel>
      </div>
      <div class="flex justify-content-end">
        <Button
          label="Отмена"
          @click="cancel"
          class="p-button-secondary max-w-max mr-3"
        />
        <Button label="OK" @click="close" class="max-w-max" />
      </div>
    </div>
  </div>
</template>

<script>
import { getVacationTypes } from "@/services/serverAPI";
import FieldLabel from "./common/FieldLabel.vue";

export default {
  inject: ["dialogRef"],
  name: "NewVacation",
  data() {
    return {
      selectedRange: null,
      selectedType: null,
      noObjections: false,
      vacationTypes: [],
    };
  },
  methods: {
    close() {
      this.dialogRef.close({
        selectedType: this.selectedType,
        selectedRange: this.selectedRange,
        noObjections: this.noObjections,
      });
    },
    cancel() {
      this.dialogRef.close();
    },
  },
  mounted() {
    getVacationTypes().then((data) => (this.vacationTypes = data));
  },
  components: { FieldLabel },
};
</script>
