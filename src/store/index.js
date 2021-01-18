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
    hint: [],
    err: '',
    n: 0
  },
  mutations: {

    SET_STATUS(state, res) {
      state.n++
      if (res.msg !== 'Success') return state.err = `${res}, ${state.n}`;
      state.err = `Login Sucessful, ${state.n}`
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
    },
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

    getHint(context, s_id) {
      const token = Token.getToken();
      axios.get(`${URL}/post/getHint/${s_id}`, {
        headers: {
          'auth-token': token
        }
      }).then(res => context.commit('SET_HINT', res.data))
    }
  },
  getters: {
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

