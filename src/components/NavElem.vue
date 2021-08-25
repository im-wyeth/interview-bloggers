<template>
  <span class="nav__elem">
    <router-link
      :to="to"
      :class="{ nav__elem_active: $route.path === to }"
      exact
    >
      {{ text }}
    </router-link>
    /
  </span>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
};
</script>

<style lang="scss" scoped>
.nav__elem {
  a {
    text-decoration: none;

    color: #eff3f5;

    font-weight: 300;
  }

  &_active {
    display: inline-block;

    padding: 0.1em 0.6em;

    border-radius: 20px;

    color: $darkpink !important;
    background-color: #eff3f5;
  }
}
</style>
