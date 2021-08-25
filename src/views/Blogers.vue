<template>
  <main class="home-main">
    <div class="wrapper">
      <h1 class="home-main__title">Блогеры</h1>
      <div class="home-main__sort">
        <span class="home-main__sort-by">Сортировка по:</span>
        <app-sort-bloggers title="выберите площадку" />
        <app-sort-bloggers title="выберите направление" />
      </div>
    </div>
  </main>
</template>

<script>
import AppSortBloggers from "@/components/AppSortBloggers.vue";

export default {
  components: {
    AppSortBloggers,
  },
};
</script>

<style lang="scss" scoped>
.home-main {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  flex: 1;

  margin-top: 30px;

  &__title {
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
}

.home-main__sort {
  margin-top: 50px;

  &-by {
    font-weight: 600;
    font-size: 20px;

    display: inline-block;

    margin-right: 40px;
  }
}
</style>
