import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      iPLogin: false,
      iPUserName: '',
      iPFullName: ''
    }
  },
  mutations: {
    /*
    store.commit('ubahKeLogin', {
    userName,
    fullName,
});*/
    ubahKeLogin (state: any, { userName, fullName }) {
      state.iPLogin = true;
      state.iPUserName = userName;
      state.iPFullName = fullName;
    },
    ubahKeLogout (state: any) {
      state.iPLogin = false;
      state.iPUserName = '';
      state.iPFullName = '';
      }
  }
});

export default store;