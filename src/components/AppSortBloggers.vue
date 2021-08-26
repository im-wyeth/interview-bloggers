<template>
  <div class="sort-bloggers">
    <div class="sort-bloggers__btn" @click="openclose">
      {{ selected.name ? selected.name : title }}
      <svg
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8.00003C7.76635 8.00049 7.53991 7.91911 7.36 7.77003L1.36 2.77003C1.15578 2.60029 1.02736 2.35638 1.00298 2.09196C0.978601 1.82753 1.06026 1.56425 1.23 1.36003C1.39974 1.15581 1.64365 1.02739 1.90808 1.00301C2.1725 0.978631 2.43578 1.06029 2.64 1.23003L8 5.71003L13.36 1.39003C13.4623 1.30697 13.58 1.24493 13.7063 1.2075C13.8327 1.17007 13.9652 1.15798 14.0962 1.17192C14.2272 1.18586 14.3542 1.22555 14.4698 1.28873C14.5855 1.3519 14.6875 1.4373 14.77 1.54003C14.8616 1.64285 14.9309 1.76348 14.9737 1.89435C15.0165 2.02523 15.0318 2.16353 15.0187 2.30059C15.0055 2.43765 14.9642 2.57053 14.8974 2.69088C14.8305 2.81124 14.7395 2.91649 14.63 3.00003L8.63 7.83003C8.44492 7.95555 8.2231 8.0154 8 8.00003Z"
          fill="#EFF3F5"
        />
      </svg>
    </div>
    <div
      class="sort-bloggers__drop"
      :class="{ 'sort-bloggers__drop_active': active }"
    >
      <div class="sort-bloggers__example">Например: Путешествия</div>
      <div class="sort-bloggers__list">
        <div
          v-for="(selection, idx) of selections"
          :key="idx"
          @click="this.selected = selection"
          class="sort-bloggers__selection"
        >
          {{ selection.name }}
        </div>
      </div>
      <svg
        class="sort-bloggers__arrow-bottom"
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8.00003C7.76635 8.00049 7.53991 7.91911 7.36 7.77003L1.36 2.77003C1.15578 2.60029 1.02736 2.35638 1.00298 2.09196C0.978601 1.82753 1.06026 1.56425 1.23 1.36003C1.39974 1.15581 1.64365 1.02739 1.90808 1.00301C2.1725 0.978631 2.43578 1.06029 2.64 1.23003L8 5.71003L13.36 1.39003C13.4623 1.30697 13.58 1.24493 13.7063 1.2075C13.8327 1.17007 13.9652 1.15798 14.0962 1.17192C14.2272 1.18586 14.3542 1.22555 14.4698 1.28873C14.5855 1.3519 14.6875 1.4373 14.77 1.54003C14.8616 1.64285 14.9309 1.76348 14.9737 1.89435C15.0165 2.02523 15.0318 2.16353 15.0187 2.30059C15.0055 2.43765 14.9642 2.57053 14.8974 2.69088C14.8305 2.81124 14.7395 2.91649 14.63 3.00003L8.63 7.83003C8.44492 7.95555 8.2231 8.0154 8 8.00003Z"
          fill="#EFF3F5"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data: () => ({
    selected: {
      name: "",
      value: "",
    },
    active: false,
    selections: [
      { name: "Все", value: "" },
      { name: "DIY", value: "diy" },
      { name: "Авто", value: "auto" },
      { name: "Авторское шоу", value: "authors_show" },
      { name: "Анбоксинг", value: "unboxing" },
      { name: "Еда", value: "food" },
      { name: "Животные", value: "animals" },
      { name: "Игры", value: "animals" },
      { name: "Иностранные языки", value: "animals" },
      { name: "Кино", value: "movie" },
      { name: "Красота", value: "beauty" },
    ],
  }),
  methods: {
    openclose() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-bloggers {
  display: inline-block;

  min-width: 225px;

  position: relative;

  font-weight: 500;
  font-size: 16px;

  margin-right: 35px;

  &__btn {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      margin-left: 10px;
    }
  }

  &__drop {
    position: absolute;
    z-index: 9999;

    padding: 10px;
    margin-top: 10px;

    border: 1px solid black;
    border-radius: 12px;

    background: #6e105e80;

    box-shadow: inset 0px 0px 8px white;

    text-align: center;

    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);

    -webkit-transition: linear 0.3s;
    transition: linear 0.3s;

    cursor: url("../assets/images/cursor2.png") 39.5 39.5, auto;

    &_active {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  &__list {
    max-height: 200px;

    overflow-y: auto;
  }

  &__example {
    color: #eff3f5;

    padding: 3px 10px;

    font-weight: normal;
    font-size: 16px;

    line-height: 18px;

    opacity: 0.4;
  }

  &__selection {
    margin-top: 10px;
    padding: 3px 10px;

    font-weight: 400;
    font-size: 16px;
    text-align: left;

    border-radius: 5px;

    -webkit-transition: linear 0.3s;
    transition: linear 0.3s;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      background-color: #d26600;
    }
  }

  &__arrow-bottom {
    margin-top: 20px;
  }
}
</style>
