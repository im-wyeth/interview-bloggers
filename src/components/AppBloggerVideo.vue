<template>
  <div class="blogger-video">
    <img :src="getImageUrl" alt="preview" />
    <svg
      width="45"
      height="52"
      viewBox="0 0 45 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.75129L43 26L1 50.2487L1 1.75129Z"
        stroke="#EFF3F5"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    preview: String,
  },
  computed: {
    getImageUrl() {
      return require("../assets/images/videos-preview/" + this.preview);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogger-video {
  width: 420px;
  height: 215px;

  position: relative;

  margin-top: 30px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 45px;
    height: 52px;

    position: absolute;
    top: 50%;
    left: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
