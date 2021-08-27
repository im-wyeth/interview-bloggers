<template>
  <article class="blogger-min-card">
    <router-link :to="'/bloggers/' + id">
      <img :src="getImageUrl" alt="bloger" />
      <div class="blogger-min-card__rect">
        <h2 class="blogger-min-card__name">{{ name }}</h2>
        <div class="blogger-min-card__stats">
          <div class="blogger-min-card__stat">
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4937 2.52073C23.3571 2.0331 23.0897 1.58848 22.7181 1.2314C22.3466 0.874314 21.884 0.61728 21.3766 0.486024C19.5082 1.47301e-07 12 0 12 0C12 0 4.49183 1.47301e-07 2.62336 0.486024C2.11599 0.61728 1.6534 0.874314 1.28186 1.2314C0.910331 1.58848 0.642899 2.0331 0.506332 2.52073C0.157447 4.35219 -0.0118575 6.21107 0.00064491 8.07294C-0.0118575 9.9348 0.157447 11.7937 0.506332 13.6251C0.642899 14.1128 0.910331 14.5574 1.28186 14.9145C1.6534 15.2716 2.11599 15.5286 2.62336 15.6599C4.49183 16.1459 12 16.1459 12 16.1459C12 16.1459 19.5082 16.1459 21.3766 15.6599C21.884 15.5286 22.3466 15.2716 22.7181 14.9145C23.0897 14.5574 23.3571 14.1128 23.4937 13.6251C23.8426 11.7937 24.0119 9.9348 23.9994 8.07294C24.0119 6.21107 23.8426 4.35219 23.4937 2.52073ZM9.60013 11.5328V4.61311L15.8312 8.07294L9.60013 11.5328Z"
                fill="#EFF3F5"
              />
            </svg>
            <span v-subs-mask>{{ ytSubs }}</span>
          </div>
          <div class="blogger-min-card__stat">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.435 1.68514C23.613 1.1107 23.435 0.693107 22.6475 0.693107H20.029C19.3685 0.693107 19.0635 1.05876 18.8855 1.44987C18.8855 1.44987 17.5385 4.79061 15.6575 6.95649C15.0475 7.58288 14.768 7.79167 14.4375 7.79167C14.2595 7.79167 14.0305 7.58288 14.0305 7.00894V1.65815C14.0305 0.97982 13.8275 0.666626 13.268 0.666626H9.15001C8.74301 0.666626 8.48901 0.979821 8.48901 1.29302C8.48901 1.94538 9.42951 2.10223 9.53101 3.92894V7.89811C9.53101 8.75926 9.38101 8.91663 9.04801 8.91663C8.15851 8.91663 5.99801 5.54991 4.70201 1.71366C4.45001 0.953848 4.19401 0.666626 3.533 0.666626H0.889501C0.127 0.666626 0 1.03176 0 1.42339C0 2.1282 0.889501 5.67723 4.14301 10.3746C6.30351 13.583 9.37901 15.3073 12.1495 15.3073C13.8275 15.3073 14.0305 14.9157 14.0305 14.2633V11.8362C14.0305 11.0535 14.183 10.9231 14.717 10.9231C15.098 10.9231 15.7845 11.1314 17.335 12.6714C19.114 14.4981 19.419 15.3333 20.4105 15.3333H23.0285C23.791 15.3333 24.147 14.9417 23.9435 14.1849C23.715 13.4282 22.8505 12.3322 21.732 11.0275C21.122 10.2972 20.207 9.48802 19.9275 9.09639C19.5465 8.5744 19.648 8.36561 19.9275 7.89607C19.902 7.89607 23.105 3.25061 23.435 1.68311"
                fill="#EFF3F5"
              />
            </svg>
            <span v-subs-mask>{{ vkSubs }}</span>
          </div>
          <div class="blogger-min-card__stat">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
                fill="#EFF3F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2L0 16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0L7.2 0ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z"
                fill="#EFF3F5"
              />
            </svg>
            <span v-subs-mask>{{ instSubs }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    img: String,
    ytSubs: Number,
    vkSubs: Number,
    instSubs: Number,
  },
  computed: {
    getImageUrl() {
      return require("../assets/images/bloggers/" + this.img);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogger-min-card {
  display: inline-block;

  width: 310px;
  height: 310px;

  position: relative;

  margin-top: 50px;
  margin-right: 20px;

  &:hover &__rect {
    cursor: url("../assets/images/cursor2.png") 39.5 39.5, auto;

    opacity: 0;
  }

  a {
    color: #fff;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 310px;
    height: 310px;

    z-index: 1;
  }

  &__rect {
    position: absolute;
    top: 0;
    left: 0;

    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    -webkit-transition: linear 0.3s;
    -moz-transition: linear 0.3s;
    -o-transition: linear 0.3s;
    transition: linear 0.3s;

    width: 310px;
    height: 310px;

    padding: 20px 12px;

    background: rgba(189, 28, 159, 0.5);

    z-index: 2;
  }

  &__name {
    font-weight: 700;
    font-size: 25px;
  }

  &__stats {
    display: flex;
    flex-wrap: wrap;
  }

  &__stat {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 10px;
    margin-right: 20px;

    font-weight: 500;
    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }
}
</style>
