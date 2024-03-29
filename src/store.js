import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    photos: [],
    photo1: String,
    comments: [],
    userId: String,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPhotos(state, photos) {
    state.photos = photos;
  },
    setPhotoId(state, photo1)
  {
    state.photo1 = photo1;
  },
  setComment(state, comments)
  {
  state.comments = comments;
  },
  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getOneUser(context, id) {
      try {
        let response = await axios.get("/api/users/" + id);
      context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getTime(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setTime', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async upload(context, data) {
      try {
        await axios.post('/api/photos', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },

    async getMyPhotos(context) {
      try {
        let response = await axios.get("/api/photos");
        context.commit('setPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getSellerPhotos(context, id) {
      try {
        let response = await axios.get("/api/photos");
        context.commit('setPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getAllPhotos(context) {
      try {
        let response = await axios.get("/api/photos/all");
        context.commit('setPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getOnePhotos(context) {
      try {
        let response = await axios.get("/api/photos/" + this.$store.state.photo1);
        context.commit('setPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getComments(context) {
      try {
        let response = await axios.get("/api/comments/all");
        context.commit('setComment', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async addComment(context, data) {
      try {
        let response = await axios.post("/api/comments/", data);
        return "";
      } catch (error) {
        return "";
      }
    },
  }
})
