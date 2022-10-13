<template>
  <div class="flex flex-column">
    <FieldLabel value="Общая информация" size="large">
      <div class="flex">
        <VacationCard
          title="Отпуска"
          :value="vacationsTaken"
          :max="vacationsBalance"
        />
        <VacationCard title="Больничные" />
        <VacationCard title="Овертаймы" />
      </div>
    </FieldLabel>
  </div>
</template>

<script>
import { getVacationBalance } from "@/services/serverAPI";
import VacationCard from "./VacationCard.vue";

export default {
  components: {
    VacationCard,
  },
  data() {
    return {
      vacationsTaken: null,
      vacationsBalance: null,
    };
  },
  mounted() {
    getVacationBalance().then((data) => {
      this.vacationsTaken = data.taken;
      this.vacationsBalance = data.balance;
    });
  },
};
</script>
