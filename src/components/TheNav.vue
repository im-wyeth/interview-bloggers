<template>
  <nav class="nav">
    <div class="wrapper">
      <NavElem
        v-for="(link, idx) of breadCrumbs"
        :key="idx"
        :text="link.text"
        :to="link.path"
      />
    </div>
  </nav>
</template>

<script>
import NavElem from "@/components/NavElem.vue";

export default {
  components: {
    NavElem,
  },
  computed: {
    breadCrumbs() {
      return this.$route.meta?.breadCrumbs;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 32px;
}
</style>
