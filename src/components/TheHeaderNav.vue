<template>
  <nav class="header-nav">
    <a href="#">Блогеры</a>
    <a href="#">Кейсы</a>
    <a href="#">exit agency</a>
    <a href="#">Контакты</a>
  </nav>
</template>

<style lang="scss">
  .header-nav {
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

  @media screen and (max-width: $adaptive-second-point) {
    .header-nav {
      display: flex;
      justify-content: center;
      flex-direction: column;

      a {
        text-align: center;

        margin: 22px 0 0 0;
      }
    }
  }
</style>
