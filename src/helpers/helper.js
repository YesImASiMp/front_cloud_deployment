import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
   messageOptions: {
      timeout: 4444,
      pauseOnInteract: true
   }
})

const vm = new Vue()
const base = 'https://random-game-archive-test.onrender.com'
const baseURL = base + '/games/'

const handleError = fn => (...params) =>
   fn(...params).catch(error => {
      vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error')
   })

export const api = {
   getGame: handleError(async (id) => {
      const res = await axios.get(baseURL + id)
      return res.data
   }),
   getGames: handleError(async () => {
      const res = await axios.get(baseURL)
      return res.data
   }),
   deleteGame: handleError(async (id) => {
      const res = await axios.delete(baseURL + id)
      return res.data
   }),
   createGame: handleError(async (payload) => {
      const res = await axios.post(baseURL, payload)
      return res.data
   }),
   updateGame: handleError(async (payload) => {
      const res = await axios.put(baseURL + payload._id, payload)
      return res.data
   }),
   downloadGame: handleError(async (id) => {
      const res = await axios.get(base+'/download/' + id)
      window.open(base='/download/' + id);
      return res.data
   }),
}

