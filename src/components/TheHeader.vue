<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__inner">
        <img src="@/assets/images/logo.png" alt="logo" width="98" height="98" />
        <nav class="header__nav">
          <a href="#">Блогеры</a>
          <a href="#">Кейсы</a>
          <a href="#">exit agency</a>
          <a href="#">Контакты</a>
        </nav>
        <div class="header__lang">
          en / ru
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: -webkit-linear-gradient(
    180deg,
    rgba(51, 0, 42, 0.5) 0%,
    #6e105e 100%
  );
  background: -moz-linear-gradient(
    180deg,
    rgba(51, 0, 42, 0.5) 0%,
    #6e105e 100%
  );
  background: linear-gradient(180deg, rgba(51, 0, 42, 0.5) 0%, #6e105e 100%);

  &__inner {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: space-between;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
  }

  &__nav {
    a {
      color: #fff;

      font-weight: 600;
      font-size: 20px;
      text-decoration: none;

      margin-right: 2em;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__lang {
    font-size: 20px;
  }
}
</style>
