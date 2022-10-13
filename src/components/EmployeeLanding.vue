<template>
  <VacationOverview />
  <VacationsRequests />
</template>

<script>
import VacationOverview from "./VacationsOverview.vue";
import VacationsRequests from "./VacationsRequests.vue";

export default {
  name: "EmployeeLanding",
  components: { VacationOverview, VacationsRequests },
};
</script>
