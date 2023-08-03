<template>
  <cursor></cursor>
  <component :is="'default-layout'"> </component>
</template>

<script>
  import Cursor from "@/components/Cursor.vue";
  import DefaultLayout from "@/layouts/DefaultLayout.vue";

  export default {
    components: {
      Cursor,
      DefaultLayout,
    },
  };
</script>
