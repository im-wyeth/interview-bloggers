<template>
  <button
    @click="onClick"
    :class="{ 'hamburger-menu-button_close': close }"
    class="hamburger-menu-button"
    data-cursor-pointer
  >
    <span
      class="hamburger-menu-button__line hamburger-menu-button__line-1"
    ></span>
    <span
      class="hamburger-menu-button__line hamburger-menu-button__line-2"
    ></span>
    <span
      class="hamburger-menu-button__line hamburger-menu-button__line-3"
    ></span>
  </button>
</template>

<script>
  export default {
    data: () => ({
      close: false,
    }),

    methods: {
      onClick() {
        this.close = !this.close;
      },
    },
  };
</script>

<style lang="scss">
  .hamburger-menu-button {
    z-index: 1000;

    width: 34px;
    height: 30px;

    background: none;

    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    &_close {
      .hamburger-menu-button__line {
        transform-origin: center center;
      }

      .hamburger-menu-button__line-1 {
        transform: translate(0, 15px) rotate(45deg);
      }

      .hamburger-menu-button__line-2 {
        display: none;
      }

      .hamburger-menu-button__line-3 {
        transform: translate(0, 15px) rotate(-45deg);
      }
    }

    &__line {
      position: absolute;

      display: block;

      width: 100%;
      height: 4px;

      background-color: white;

      transform-origin: top center;

      transition: transform ease 0.3s;
    }

    &__line-1 {
      top: 0;

      transform: translate(0, 0);
      // transform: rotate(45deg);
    }

    &__line-2 {
      top: 0;

      transform: translate(0, 13px);
    }

    &__line-3 {
      top: 0;

      transform: translate(0, 26px);
    }
  }
</style>
