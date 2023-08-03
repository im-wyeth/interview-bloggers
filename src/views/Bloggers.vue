<template>
  <main class="bloggers">
    <h1 class="bloggers__title">
      <div class="wrapper">Блогеры</div>
    </h1>
    <section class="bloggers__sort">
      <div class="wrapper">
        <div class="bloggers__sort-inner">
          <span class="bloggers__sort-by">Сортировка по:</span>
          <div class="bloggers__sort-types">
            <app-sort-bloggers title="Площадка" />
            <app-sort-bloggers title="Направление" />
          </div>
        </div>
      </div>
    </section>
    <section class="bloggers__list">
      <div class="bloggers__list-inner">
        <app-blogger-min-card
          v-for="blogger of bloggers"
          :key="blogger.id"
          :id="blogger.id"
        />
      </div>
    </section>
    <div class="bloggers__loading">
      <div class="bloggers__loading-line"></div>
      <span class="bloggers__loading-text">Подгружаем...</span>
      <div class="bloggers__loading-line"></div>
    </div>
  </main>
</template>

<script>
  import AppSortBloggers from "@/components/AppSortBloggers.vue";
  import AppBloggerMinCard from "@/components/AppBloggerMinCard.vue";

  export default {
    components: {
      AppSortBloggers,
      AppBloggerMinCard,
    },
    mounted() {
      this.setUpNextBloggers();
    },
    computed: {
      bloggers() {
        return this.$store.getters.getBloggers;
      },
    },
    methods: {
      setUpNextBloggers() {
        window.addEventListener("scroll", this.nextBloggers);
      },
      nextBloggers() {
        // const htmlEnd =
        //   document.documentElement.scrollTop >=
        //   document.documentElement.scrollHeight -
        //     document.documentElement.clientHeight;
        // if (htmlEnd) {
        //   this.$store.dispatch("fetchBloggers");
        // }
      },
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.nextBloggers);
    },
  };
</script>

<style lang="scss">
  .bloggers {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    flex: 1;

    margin-top: 30px;

    &__title {
      font-size: 50px;
      font-weight: 800;
      text-align: center;
    }

    &__sort {
      margin-top: 50px;

      &-by {
        font-weight: 600;
        font-size: 20px;

        display: inline-block;

        margin-right: 40px;
      }

      &-types {
        display: inline-block;
      }

      .sort-bloggers {
        margin-right: 30px;
      }
    }

    &__loading {
      width: 100%;

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

      margin-top: 50px;
    }

    &__loading-line {
      width: 100%;
      height: 1px;

      background-color: #fff;
    }

    &__loading-text {
      font-weight: 300;
      font-size: 15px;

      margin-left: 60px;
      margin-right: 60px;
    }

    &__list {
      &-inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin: 0 auto;

        max-width: 1320px;
      }
    }
  }

  @media screen and (max-width: $adaptive-first-point) {
    .bloggers__list-inner {
      max-width: 1020px;
    }
  }

  @media screen and (max-width: $adaptive-second-point) {
    .bloggers__sort {
      padding-left: 20px;
    }

    .blogger-min-card {
      margin-right: 12px;
      margin-top: 20px;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: $adaptive-third-point) {
    .blogger-min-card {
      margin-right: 60px;
      margin-top: 60px;

      &:nth-child(3n) {
        margin-right: 60px;
      }

      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: $adaptive-fourth-point) {
    .bloggers__sort {
      padding-left: 0;

      &-by {
        display: block;

        text-align: center;
      }

      &-types {
        display: flex;
        justify-content: center;

        margin-top: 20px;
      }
    }

    .sort-bloggers {
      margin-right: 24px;

      &:last-child {
        margin-right: 0;
      }
    }

    .bloggers__list {
      margin-top: 40px;
    }

    .blogger-min-card {
      width: 250px;
      height: 250px;

      margin-right: 40px;
      margin-top: 20px;

      &:nth-child(3n) {
        margin-right: 40px;
      }

      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: $adaptive-fifth-point) {
    .bloggers__list {
      padding: 0 30px 30px 30px;
    }

    .blogger-min-card {
      width: 100%;
      height: 100%;

      aspect-ratio: 1/1;

      margin-right: 0;
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:nth-child(even) {
        margin-right: 0;
      }
    }

    .bloggers__sort-types {
      display: block;

      padding: 0 30px 0 30px;
    }

    .sort-bloggers {
      display: block;

      width: 100%;
      min-width: 0;

      &:last-child {
        margin-top: 20px;
      }

      &__drop {
        width: 100%;
      }
    }
  }
</style>
