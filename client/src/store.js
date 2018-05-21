import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import firebase from 'firebase'
import alertify from 'alertifyjs'
import './assets/js/firebase'

Vue.use(VueFire)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: '',
    arrBacklogs: [],
    arrTodos: [],
    arrDoings: [],
    arrDone: []
  },
  mutations: {
    getTasks (state, payload) {
      state.tasks = payload
    },
    getBacklogs (state, payload) {
      state.arrBacklogs = payload
    },
    getTodos (state, payload) {
      state.arrTodos = payload
    },
    getDoings (state, payload) {
      state.arrDoings = payload
    },
    getDone (state, payload) {
      state.arrDone = payload
    }
  },
  actions: {
    getTasks ({ commit }) {
      firebase.database().ref('users').on('value', function (snapshot) {
        let tasks = snapshot.val()
        let arrTasksId = Object.getOwnPropertyNames(tasks)
        let arrBacklogs = []
        let arrTodos = []
        let arrDoings = []
        let arrDone = []
        arrTasksId.forEach((taskId, index) => {
          let firebaseTask = firebase.database().ref('users/' + taskId)
          firebaseTask.on('value', function (snapshot1) {
            let eachTask = snapshot1.val()
            let eachTaskKey = snapshot1.key
            eachTask.Key = eachTaskKey
            if (eachTask.Status === 'Backlog') {
              arrBacklogs.push(eachTask)
            } else if (eachTask.Status === 'To Do') {
              arrTodos.push(eachTask)
            } else if (eachTask.Status === 'Doing') {
              arrDoings.push(eachTask)
            } else if (eachTask.Status === 'Done') {
              arrDone.push(eachTask)
            }
          })
        })
        commit('getBacklogs', arrBacklogs)
        commit('getTodos', arrTodos)
        commit('getDoings', arrDoings)
        commit('getDone', arrDone)
      })
    },
    addTask ({commit}, payload) {
      firebase.database().ref('users').push(payload)
      alertify.success(`New task successfully posted :D`)
    },
    editTask ({commit}, payload) {
      firebase.database().ref('users').child(payload.Key).update({ Edit: true })
    },
    cancelEditTask ({commit}, payload) {
      firebase.database().ref('users').child(payload.Key).update({ Edit: false })
    },
    saveEditTask ({commit}, payload) {
      firebase.database().ref('users').child(payload.Key).update({ Preparer: payload.Preparer, Status: payload.Status, Task: payload.Task, Edit: false })
    },
    removeTask ({commit}, payload) {
      firebase.database().ref('users').child(payload.Key).remove()
    }
  }
})
