<template>
  <main class="bloggers">
    <h1 class="bloggers__title">
      <div class="wrapper">Блогеры</div>
    </h1>
    <section class="bloggers__sort">
      <div class="wrapper">
        <span class="bloggers__sort-by">Сортировка по:</span>
        <app-sort-bloggers title="выберите площадку" />
        <app-sort-bloggers title="выберите направление" />
      </div>
    </section>
    <section class="bloggers__list">
      <div class="wrapper">
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
      const htmlEnd =
        document.documentElement.scrollTop >=
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

      if (htmlEnd) {
        this.$store.dispatch("fetchBloggers");
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.nextBloggers);
  },
};
</script>

<style lang="scss" scoped>
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
  }

  &__loading {
    width: 100%;

    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;

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
}
</style>
