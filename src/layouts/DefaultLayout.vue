<template>
  <TheHeader />
  <TheNav />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheNav,
    TheFooter,
  },
};
</script>
