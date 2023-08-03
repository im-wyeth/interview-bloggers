<template>
  <nav class="nav">
    <div class="wrapper">
      <app-nav-elem
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
  import AppNavElem from "@/components/AppNavElem.vue";

  export default {
    components: {
      AppNavElem,
    },
    computed: {
      breadCrumbs() {
        return this.$route.meta?.breadCrumbs;
      },
    },
  };
</script>

<style lang="scss">
  .nav {
    margin-top: 32px;
  }

  @media screen and (max-width: $adaptive-second-point) {
    .nav {
      padding-left: 20px;
    }
  }
</style>
