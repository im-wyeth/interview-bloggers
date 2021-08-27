<template>
  <div class="blogger-big-card">
    <img src="../assets/images/bloggers/1.png" alt="blogger" />
    <div class="blogger-big-card__info">
      <h1 class="blogger-big-card__name">Максим Максимов</h1>
      <hr />
      <div class="blogger-big-card__stats">
        <div class="blogger-big-card__stat">
          <img src="../assets/images/yt.png" alt="youtube" />
          <div class="blogger-big-card__stat-wrapper">
            <div class="blogger-big-card__stat-subs" v-subs-mask>3600000</div>
            <div class="blogger-big-card__stat-text">Подписчиков</div>
          </div>
        </div>
        <div class="blogger-big-card__stat">
          <img src="../assets/images/vk.png" alt="youtube" />
          <div class="blogger-big-card__stat-wrapper">
            <div class="blogger-big-card__stat-subs" v-subs-mask>3600000</div>
            <div class="blogger-big-card__stat-text">Подписчиков</div>
          </div>
        </div>
        <div class="blogger-big-card__stat">
          <img src="../assets/images/ins.png" alt="youtube" />
          <div class="blogger-big-card__stat-wrapper">
            <div class="blogger-big-card__stat-subs" v-subs-mask>3600000</div>
            <div class="blogger-big-card__stat-text">Подписчиков</div>
          </div>
        </div>
      </div>
      <hr />
      <div class="blogger-big-card__about">
        <h3 class="blogger-big-card__info-title">Информация о канале</h3>
        <span class="blogger-big-card__info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit
          lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur
          sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla
          neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna,
          feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae
          venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget
          vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac.
          Egestas porta habitasse fermentum nulla neque. At eget leo sed
          bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit
          justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit
          enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu
          duis. Sit est, cursus sem facilisis sed ac
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blogger-big-card {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  height: 570px;

  border: 1px solid #fff;
  border-radius: 5px;

  img {
    border-radius: 5px 0px 0px 5px;
  }

  hr {
    width: 100%;
    height: 1px;

    margin-top: 30px;
  }

  &__info {
    width: 100%;

    background-color: #7b326f;

    padding: 30px 40px;
  }

  &__name {
    font-weight: 800;
    font-size: 50px;
  }

  &__stats {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }

  &__stat {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    margin-top: 30px;
    margin-right: 50px;

    &-wrapper {
      margin-left: 20px;
    }

    &-subs {
      font-weight: 700;
      font-size: 30px;
    }
  }

  &__about {
    height: 170px;
    overflow-y: auto;

    margin-top: 30px;
  }

  &__info-title {
    font-weight: 700;
    font-size: 30px;
  }

  &__info-text {
    display: inline-block;

    margin-top: 10px;

    font-weight: 500;
    font-size: 16px;

    line-height: 24px;
  }
}
</style>
