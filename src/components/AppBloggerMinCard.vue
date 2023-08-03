<template>
  <article class="blogger-min-card" data-cursor-pointer>
    <router-link :to="'/bloggers/' + id">
      <img :src="getImageUrl" alt="bloger" />
      <div class="blogger-min-card__rect">
        <h2 class="blogger-min-card__name">
          {{ blogger.firstName + " " + blogger.lastName }}
        </h2>
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
              />
            </svg>
            <span v-subs-mask data-cursor-pointer>{{ blogger.yt_subs }}</span>
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
              />
            </svg>
            <span v-subs-mask data-cursor-pointer>{{ blogger.vk_subs }}</span>
          </div>
          <div class="blogger-min-card__stat">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              enable-background="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M505,257c0,34.8-0.7,69.7,0.2,104.5c1.5,61.6-37.2,109.2-86.5,130.4c-19.8,8.5-40.6,13-62.1,13c-67.3,0.1-134.7,1-202-0.3   c-50.7-1-92.4-22.2-122.3-64c-15.7-22-23.2-47-23.2-74.1c0-71.7,0-143.3,0-215c0-58.5,28.5-99.4,79.1-126C110.2,14,134.1,9.1,159,9   c65.3,0,130.7-0.4,196,0.2c50.7,0.4,93,19.8,124.2,60.6c17.4,22.8,25.8,49,25.8,77.8C505,184,505,220.5,505,257z M46,257   c0,36.7,0,73.3,0,110c0,16.4,3.8,31.8,12.3,45.7c22.3,36.5,56,54.3,97.8,55c67.1,1,134.3,0.4,201.5,0.2c16.5,0,32.5-3.4,47.4-10.5   c40.6-19.4,63.3-50.3,63.1-96.7c-0.4-71-0.1-142-0.1-213c0-20.1-5.7-38.5-17.6-54.7c-23-31.1-54.8-46.4-92.8-46.8   c-67-0.8-134-0.3-201-0.2c-14.3,0-28.1,2.9-41.5,7.9c-36.8,13.7-71,48.4-69.4,99.5C46.9,188,46,222.5,46,257z"
                />
                <path
                  d="M257.6,363c-64.5,0-116.5-51.4-116.6-115.4c-0.1-63,52.3-114.6,116.4-114.6c64.3-0.1,116.5,51.4,116.6,114.9   C374,311.3,321.9,362.9,257.6,363z M257.6,326c43.9,0,79.5-35.1,79.4-78.3c-0.1-42.8-35.7-77.8-79.4-77.8   c-43.9,0-79.7,34.9-79.7,78C178,291.1,213.7,326.1,257.6,326z"
                />
                <path
                  d="M387.5,98c13.5,0,24.5,11.5,24.5,25.6c-0.1,14.1-11.2,25.5-24.7,25.4c-13.3-0.1-24.2-11.5-24.2-25.3   C363,109.6,374,98,387.5,98z"
                />
              </g>
            </svg>
            <span v-subs-mask data-cursor-pointer>{{ blogger.inst_subs }}</span>
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
    },
    computed: {
      blogger() {
        return this.$store.getters.getBloggers.find(
          (blogger) => blogger.id === this.id
        );
      },
      getImageUrl() {
        return require("../assets/images/bloggers/" + this.blogger.img);
      },
    },
  };
</script>

<style lang="scss">
  .blogger-min-card {
    width: 310px;
    height: 310px;

    position: relative;

    margin-top: 50px;
    margin-right: 20px;

    &:hover &__rect {
      opacity: 0;
    }

    a {
      color: #fff;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;

      z-index: 1;
    }

    &__rect {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      flex-direction: column;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      justify-content: flex-end;
      -webkit-box-pack: flex-end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: flex-end;
      align-items: flex-start;
      -webkit-box-align: flex-start;
      -webkit-align-items: flex-start;
      -ms-flex-align: flex-start;

      transition: linear 0.3s;
      -webkit-transition: linear 0.3s;
      -moz-transition: linear 0.3s;
      -o-transition: linear 0.3s;

      width: 100%;
      height: 100%;

      padding: 20px 12px;

      background: rgba(0, 0, 0, 0.4);

      z-index: 2;
    }

    &__name {
      font-weight: 700;
      font-size: 25px;
    }

    &__stats {
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
    }

    &__stat {
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      justify-content: flex-start;
      align-items: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;

      margin-top: 10px;
      margin-right: 20px;

      font-weight: 500;
      font-size: 20px;

      svg {
        margin-right: 10px;

        fill: white;
      }
    }
  }
</style>
