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
  mutations: {
    pushBloggers(state) {
      // Simulate fetch bloggers

      for (let i = 0; i < 8; ++i) {
        state.bloggers.push({
          firstName: "Максим",
          lastName: "Максимов",
          img: i + 1 + ".png",
          yt_subs: 3160000,
          vk_subs: 134000,
          inst_subs: 128000,
        });
      }
    },
  },
  actions: {
    fetchBloggers({ commit }) {
      // fetch( getBloggers )

      setTimeout(() => {
        commit("pushBloggers");
      }, 550);
    },
  },
  getters: {
    getBloggers(state) {
      return state.bloggers;
    },
  },
});
