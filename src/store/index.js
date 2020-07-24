import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Token } from '../Token'


const URL = 'https://se-members.web.app';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: null,
    user: null,
    verified: null,
    data: null,
    hint: null,
    err: null
  },
  mutations: {

    SET_STATUS(state, res) {
      if (res.msg !== 'Success') return state.err = res
      Token.setToken(res.token)
      state.status = true;
    },

    SET_USER(state, user) {
      state.user = user;
    },

    ALL_USER(state, data) {
      state.data = data;
    },
    SET_HINT(state, hint) {
      state.hint = hint;
    }
  },
  actions: {

    register(context, data) {
      axios.post(`${URL}/auth/register`, data).then(res => context.commit('SET_STATUS', res.data));
    },

    login(context, data) {
      axios.post(`${URL}/auth/login`, data).then(res => context.commit('SET_STATUS', res.data));
    },

    async getUser(context) {
      const verified = await Token.verifyToken();
      context.commit('SET_USER', verified.user);
    },

    AddUser(context, data) {
      axios.post(`${URL}/auth/addUser`, data)
    },

    fetchUsers(context) {
      axios.get(`${URL}/post`).then(res => context.commit('ALL_USER', res.data));
    },

    onRandom(context, payload) {
      const token = Token.getToken();
      axios.post(`${URL}/post/random`, payload, {
        headers: {
          'auth-token': token
        }
      });
    },
    logout(context) {
      Token.delToken();
      location.reload();
    },

    getHint(context, payload) {
      const token = Token.getToken();
      axios.post(`${URL}/post/getHint/${payload.s_id}`, { ...payload }, {
        headers: {
          'auth-token': token
        }
      }).then(res => context.commit('SET_HINT', res.data))
    }
  },
  getters: {
    getterTotalUsers(state) {
      return state.totalMember;
    },
    getterFetchUsers_62(state) {
      return state.allUsers_62
    },
    getterFetchUsers_63(state) {
      return state.allUsers_63
    },
    getterStatus(state) {
      return state.status
    },
    getterUser(state) {
      return state.user
    },
    getterVerified(state) {
      return state.verified;
    },
    getterHint(state) {
      return state.user
    },
    getterAll(state) {
      return state.data;
    },
    getterHint(state) {
      return state.hint;
    },
    getterError(state) {
      return state.err
    },
    getterAutologin() {
      return Token.getToken() ? true : false;
    }
  },
  modules: {
  }
})

