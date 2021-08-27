<template>
  <main class="blogger-main">
    <section class="blogger-info">
      <div class="wrapper">
        <app-blogger-big-card
          :name="blogger.firstName + ' ' + blogger.lastName"
          :img="blogger.img"
          :yt-subs="blogger.yt_subs"
          :vk-subs="blogger.vk_subs"
          :inst-subs="blogger.inst_subs"
        />
        <div class="blogger-info__last-videos"></div>
      </div>
    </section>
    <section class="blogger-main__other"></section>
  </main>
</template>

<script>
import AppBloggerBigCard from "@/components/AppBloggerBigCard.vue";

export default {
  components: {
    AppBloggerBigCard,
  },
  computed: {
    blogger() {
      return this.$store.getters.getBloggerWithId(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogger-main {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  flex: 1;

  margin-top: 30px;
}
</style>
