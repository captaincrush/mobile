const film = {
  namespace: true,
  state: {
    tabbarIsShow: true,
  },
  getters: {},
  mutations: {
    setTabbarStatus(state) {
      state.tabbarIsShow = !state.tabbarIsShow;
    },
  },
  actions: {},
};
export default film;
