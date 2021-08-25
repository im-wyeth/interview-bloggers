<template>
  <nav class="nav">
    <div class="wrapper">
      <nav-elem
        v-for="(link, idx) of breadCrumbs"
        :key="idx"
        :to="link.path"
        :name="link.name"
        :text="link.text"
        :lastItem="idx + 1 === breadCrumbs.length"
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
