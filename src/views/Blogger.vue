<template>
  <main class="blogger">
    <section class="blogger__info">
      <div class="wrapper">
        <app-blogger-big-card
          :name="blogger.firstName + ' ' + blogger.lastName"
          :img="blogger.img"
          :yt-subs="blogger.yt_subs"
          :vk-subs="blogger.vk_subs"
          :inst-subs="blogger.inst_subs"
        />
        <div class="blogger__videos">
          <h1 class="blogger__videos-title">Последние ролики</h1>
          <div class="blogger__videos-list">
            <app-blogger-video
              v-for="(preview, idx) of blogger.videos"
              :key="idx"
              :preview="preview"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="blogger__other">
      <div class="wrapper">
        <h1 class="blogger__other-title">Другие блогеры</h1>
        <div class="blogger__other-list">
          <app-blogger-min-card
            v-for="blogger of otherBloggers"
            :key="blogger.id"
            :id="blogger.id"
          />
        </div>
        <div class="blogger__other-indicator">
          <div @click="leftArr" class="blogger__other-btn" data-cursor-pointer>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99999 0.999998C7.23365 0.999541 7.46008 1.08092 7.64 1.23C7.74125 1.31395 7.82496 1.41705 7.88631 1.5334C7.94766 1.64974 7.98546 1.77705 7.99753 1.90803C8.00961 2.039 7.99573 2.17107 7.95668 2.29668C7.91764 2.42228 7.8542 2.53895 7.77 2.64L3.28999 8L7.60999 13.37C7.69306 13.4723 7.75509 13.59 7.79252 13.7163C7.82996 13.8427 7.84205 13.9752 7.82811 14.1062C7.81417 14.2372 7.77447 14.3642 7.7113 14.4798C7.64813 14.5955 7.56272 14.6975 7.45999 14.78C7.35653 14.871 7.23536 14.9397 7.1041 14.9817C6.97284 15.0237 6.83431 15.0381 6.69722 15.024C6.56013 15.0099 6.42743 14.9676 6.30744 14.8998C6.18746 14.832 6.08279 14.7402 5.99999 14.63L1.16999 8.63C1.02291 8.45107 0.942507 8.22662 0.942507 7.995C0.942507 7.76337 1.02291 7.53893 1.16999 7.36L6.16999 1.36C6.27031 1.23898 6.39775 1.14332 6.54196 1.08077C6.68617 1.01822 6.84309 0.990547 6.99999 0.999998Z"
                fill="#EFF3F5"
              />
            </svg>
          </div>

          <div class="blogger__other-bar1">
            <div
              class="blogger__other-bar2"
              :style="{ width: otherBarPercent + '%' }"
            ></div>
          </div>

          <div @click="rightArr" class="blogger__other-btn" data-cursor-pointer>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00001 15C1.76635 15.0005 1.53992 14.9191 1.36 14.77C1.25875 14.6861 1.17504 14.583 1.11369 14.4666C1.05234 14.3503 1.01454 14.223 1.00247 14.092C0.990393 13.961 1.00427 13.8289 1.04332 13.7033C1.08236 13.5777 1.1458 13.4611 1.23 13.36L5.71001 8L1.39001 2.63C1.30694 2.52771 1.24491 2.41002 1.20748 2.28368C1.17004 2.15734 1.15795 2.02485 1.17189 1.89382C1.18583 1.76279 1.22553 1.63581 1.2887 1.52017C1.35187 1.40454 1.43728 1.30252 1.54001 1.22C1.64347 1.12897 1.76464 1.0603 1.8959 1.01831C2.02716 0.976319 2.16569 0.961916 2.30278 0.976001C2.43987 0.990085 2.57257 1.03236 2.69256 1.10016C2.81254 1.16796 2.91721 1.25983 3.00001 1.37L7.83001 7.37C7.97709 7.54893 8.05749 7.77338 8.05749 8.005C8.05749 8.23663 7.97709 8.46107 7.83001 8.64L2.83001 14.64C2.72969 14.761 2.60225 14.8567 2.45804 14.9192C2.31383 14.9818 2.15691 15.0095 2.00001 15Z"
                fill="#EFF3F5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import AppBloggerBigCard from "@/components/AppBloggerBigCard.vue";
  import AppBloggerVideo from "@/components/AppBloggerVideo.vue";
  import AppBloggerMinCard from "@/components/AppBloggerMinCard.vue";

  export default {
    components: {
      AppBloggerBigCard,
      AppBloggerVideo,
      AppBloggerMinCard,
    },
    data: () => ({
      otherPos: 0,
      viewOtherQuantity: 4,
      allOtherQuantity: 8,
    }),
    methods: {
      leftArr() {
        if (this.otherPos !== 0) --this.otherPos;
      },
      rightArr() {
        if (this.otherPos + 4 < this.allOtherQuantity) ++this.otherPos;
      },
    },
    computed: {
      blogger() {
        return this.$store.getters.getBloggers.find(
          (blogger) => blogger.id === Number(this.$route.params.id)
        );
      },
      otherBloggers() {
        return this.$store.getters.getBloggers.slice(
          this.otherPos,
          this.otherPos + this.viewOtherQuantity
        );
      },
      otherBarPercent() {
        return (
          ((this.otherPos + this.viewOtherQuantity) / this.allOtherQuantity) *
          100
        );
      },
    },
    watch: {
      "$route.params.id": () => {
        window.scroll(0, 0);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .blogger {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    flex: 1;

    margin-top: 50px;

    &__videos {
      margin-top: 80px;

      &-title {
        text-align: center;

        font-weight: 800px;
        font-size: 50px;
      }

      &-list {
        margin-top: 50px;

        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
      }
    }

    &__other {
      margin-top: 80px;

      &-title {
        text-align: center;

        font-weight: 800;
        font-size: 50px;
      }

      &-indicator {
        margin-top: 50px;

        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        justify-content: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        align-items: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
      }

      &-bar1 {
        width: 310px;
        height: 1px;

        position: relative;

        margin-left: 24px;
        margin-right: 24px;

        background-color: #969696;
      }

      &-bar2 {
        position: absolute;
        top: -1px;
        left: 0;

        width: 50%;
        height: 3px;

        transition: width linear 0.3s;
        -webkit-transition: width linear 0.3s;
        -moz-transition: width linear 0.3s;
        -o-transition: width linear 0.3s;

        background-color: #eff3f5;
      }

      &-btn {
        width: 20px;
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
