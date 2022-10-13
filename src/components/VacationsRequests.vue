<template>
  <FieldLabel value="Мои запросы" size="large">
    <DataTable
      id="vacationTable"
      :value="vacations"
      :paginator="true"
      :rows="10"
    >
      <Column field="type" header="Тип"></Column>
      <Column field="status" header="Статус">
        <template #body="{ data }">
          <span :class="'customer-badge status-qualified'">{{
            data.status
          }}</span>
        </template>
      </Column>
      <Column field="start" header="Период"></Column>
      <Column field="approver" header="Согласовал"></Column>
    </DataTable>
  </FieldLabel>
</template>
<script>
import { getVacations } from "@/services/serverAPI";
export default {
  data() {
    return {
      vacations: [],
    };
  },
  mounted() {
    getVacations(2).then((data) => (this.vacations = data));
  },
};
</script>
