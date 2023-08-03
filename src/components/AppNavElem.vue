<template>
  <span class="nav-elem">
    <router-link
      :to="to"
      :class="{ 'nav-elem__a_active': elemActive }"
      class="nav-elem__a"
      exact
      data-cursor-pointer
    >
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

<style lang="scss">
  .nav-elem {
    &__a {
      text-decoration: none;

      color: #eff3f5;

      font-weight: 300;

      &_active {
        display: inline-block;

        padding: 0.1em 0.6em;

        border-radius: 20px;

        color: black;
        background-color: #eff3f5;
      }
    }
  }
</style>
