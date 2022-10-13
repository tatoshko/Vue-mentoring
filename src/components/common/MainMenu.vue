<template>
  <div
    class="flex align-items-center sticky top-0 w-full z-5 mb-8 bg-gray-800 border-round-xs h-5rem"
  >
    <div class="flex flex-grow-1 justify-content-end">
      <Button label="Создать запрос" @click="addNewRequest" />
    </div>
    <div class="m-4">
      <Avatar shape="circle" size="xlarge" :image="avatar" />
    </div>
  </div>
</template>
<script>
import NewVacation from "@/components/NewVacation.vue";
import { getCurrentUser } from "@/services/serverAPI";
import { openDialog } from "@/services/dialog";

export default {
  data() {
    return {
      name: "",
      avatar: null,
    };
  },
  mounted() {
    getCurrentUser().then(({ name, avatar }) => {
      this.name = name;
      this.avatar = avatar;
    });
  },
  methods: {
    async addNewRequest() {
      const result = await openDialog(NewVacation, "Добавить новый отпуск");
      console.log(result);
    },
  },
};
</script>
