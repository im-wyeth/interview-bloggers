<template>
  <component :is="'default-layout'">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: {
    DefaultLayout,
  },
};
</script>
