<template>
  <span class="nav__elem">
    <router-link :to="to" :class="{ nav__elem_active: elemActive }" exact>
      {{ elemText }}
    </router-link>
    /
  </span>
</template>

<script>
export default {
  props: {
    to: String,
    name: String,
    text: String,
    lastItem: Boolean,
  },
  computed: {
    elemActive() {
      if (this.$route.path === this.to || this.lastItem) return true;
    },
    elemText() {
      if (this.name === "Blogger") {
        return "Максим Максимов";
      }

      return this.text;
    },
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
