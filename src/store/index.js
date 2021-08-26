import { createStore } from "vuex";

export default createStore({
  state: {
    bloggers: [
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "1.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "2.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "3.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "4.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "5.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "6.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "7.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
      {
        firstName: "Максим",
        lastName: "Максимов",
        img: "8.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getBloggers(state) {
      return state.bloggers;
    },
  },
});
