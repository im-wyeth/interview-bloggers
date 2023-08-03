<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__inner">
        <img src="@/assets/images/logo.png" alt="logo" width="98" height="98" />

        <the-header-nav />

        <the-header-lang />

        <div class="header__hamburger-wrapper">
          <app-hamburger-menu-button @click="toggleMenu" />
        </div>
      </div>
      <div
        :class="{ 'header__adaptive-menu_active': menuActive }"
        class="header__adaptive-menu"
      >
        <the-header-nav />
        <the-header-lang />
      </div>
    </div>
  </header>
</template>

<script>
  import TheHeaderNav from "./TheHeaderNav.vue";
  import TheHeaderLang from "./TheHeaderLang.vue";
  import AppHamburgerMenuButton from "./AppHamburgerMenuButton.vue";

  export default {
    components: {
      TheHeaderNav,
      TheHeaderLang,
      AppHamburgerMenuButton,
    },

    data: () => ({
      menuActive: false,
    }),

    methods: {
      toggleMenu() {
        this.menuActive = !this.menuActive;
      },
    },
  };
</script>

<style lang="scss">
  $header-height: 98px;

  .header {
    height: $header-height;

    background-color: black;

    position: sticky;
    top: 0;
    left: 0;

    z-index: 999;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__hamburger-wrapper {
      display: none;
    }

    &__adaptive-menu {
      z-index: 999;

      position: fixed;
      right: 0;
      top: $header-height;

      display: none;
      flex-direction: column;

      padding: 22px;

      min-height: 100vh;
      min-width: 300px;

      transform: translate(100%, 0);

      transition: transform ease 0.4s;

      background-color: black;

      &_active {
        transform: translate(0%, 0);
      }
    }
  }

  @media screen and (max-width: $adaptive-second-point) {
    .header {
      padding: 0 12px 0 12px;

      &__inner {
        & .header-nav {
          display: none;
        }

        & .header-lang {
          display: none;
        }
      }

      &__hamburger-wrapper {
        display: block;
      }

      &__adaptive-menu {
        display: flex;
      }
    }
  }
</style>
