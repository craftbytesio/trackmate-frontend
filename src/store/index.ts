import Vue from "vue";
import Vuex from "vuex";
import AuthService from '@/service/AuthService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    user: {},
    isLoggedIn: false,
    tracks: [],
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.user = user
      state.isLoggedIn = true
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.isLoggedIn = false
      state.status = ''
      state.user = {}
    },
  },
  getters: {
    getCurrentUser: state => state.user,
    getTracks: state => state.tracks,
    getCount: state => state.count,
    isLoggedIn: state => state.isLoggedIn,
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        AuthService.login(user).then(
            () => {
              AuthService.getAuthUser().then(
                  resp => {
                    console.log(resp.data.data)
                    commit('auth_success', resp.data.data)
                    resolve(resp)
                  }
              )
        })
        .catch(err => {
          commit('auth_error')
          console.log(err)
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        AuthService.logout().then(
            resp => {
              commit('logout')
              resolve(resp)
            }
        )
        .catch(
            err => {
              console.log(err)
              reject(err)
            }
        )
      })
    }
  }
});