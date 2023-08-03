<template>
  <div v-if="isPC" ref="cursor" class="cursor">
    <div ref="cursor-circle" class="cursor__circle"></div>
  </div>
</template>

<script>
  import { elemOrParentsHavePointerCursor } from "../utils/elemOrParentsHavePointerCursor";
  import { thisIsNotPC } from "../utils/thisIsNotPC";

  export default {
    data: () => ({
      isPC: true,
    }),

    mounted() {
      if (thisIsNotPC()) {
        this.isPC = false;

        return;
      }

      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("scroll", this.onMouseMove);
      document.addEventListener("mouseenter", this.onMouseEnter);
      document.addEventListener("mouseleave", this.onMouseLeave);
    },
    unmounted() {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("scroll", this.onMouseMove);
      document.removeEventListener("mouseenter", this.onMouseEnter);
      document.removeEventListener("mouseleave", this.onMouseLeave);
    },
    methods: {
      onMouseMove(e) {
        const cursorElem = this.$refs["cursor"];
        const cursorCircle = this.$refs["cursor-circle"];

        cursorElem.style.transform = `translate(${e.clientX}px,${e.clientY}px`;

        if (elemOrParentsHavePointerCursor(e.target)) {
          cursorCircle.classList.add("cursor__circle_hover");
        } else {
          cursorCircle.classList.remove("cursor__circle_hover");
        }
      },
      onMouseEnter() {
        const cursorElem = this.$refs["cursor"];

        if (cursorElem.style.visibility === "hidden") {
          cursorElem.style.visibility = "visible";
        }
      },
      onMouseLeave() {
        const cursorElem = this.$refs["cursor"];

        cursorElem.style.visibility = "hidden";
      },
    },
  };
</script>

<style lang="scss">
  .cursor {
    z-index: 99999999;

    position: fixed;

    border-radius: 30px;

    width: 15px;
    height: 15px;

    background-color: orange;

    pointer-events: none;

    box-shadow: 0px 0px 12px orange;

    &__circle {
      border-radius: 30px;

      width: 46px;
      height: 46px;

      border: 2px solid orange;

      transform: translate(-16px, -16px) scale(0, 0);

      transition: transform ease 0.3s;

      pointer-events: none;

      box-shadow: 0px 0px 12px orange;

      &_hover {
        transform: translate(-16px, -16px) scale(1, 1);
      }
    }
  }
</style>
