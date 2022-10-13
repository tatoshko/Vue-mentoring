<template>
  <div>
    <MainMenu />
    <div class="card m-5">
      <EmployeeLanding />
    </div>
  </div>
  <DynamicDialog />
</template>

<script>
import EmployeeLanding from "./components/EmployeeLanding.vue";
import MainMenu from "./components/common/MainMenu.vue";

export default {
  name: "App",
  components: {
    EmployeeLanding,
    MainMenu,
  },
};
</script>

<style>
body {
  font-family: var(--font-family);
  color: var(--text-color);
}
</style>
