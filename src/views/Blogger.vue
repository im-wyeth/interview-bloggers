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
    <section class="blogger-main__other"></section>
  </main>
</template>

<script>
import AppBloggerBigCard from "@/components/AppBloggerBigCard.vue";
import AppBloggerVideo from "@/components/AppBloggerVideo.vue";

export default {
  components: {
    AppBloggerBigCard,
    AppBloggerVideo,
  },
  computed: {
    blogger() {
      return this.$store.getters.getBloggerWithId(this.$route.params.id);
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
  }

  &__videos-title {
    text-align: center;

    font-weight: 800px;
    font-size: 50px;
  }

  &__videos-list {
    margin-top: 50px;

    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
