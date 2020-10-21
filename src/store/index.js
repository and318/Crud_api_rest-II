import Vue from 'vue'
import Vuex from 'vuex'
import {db}  from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    usuario: {nombre:'', email: '', id: ''}
  },
  mutations: {
    setUsuarios(state, payload){
      state.usuarios = payload
    }, 
    setUsuario(state, payload){
      state.usuario = payload
    }

  },
  actions: {
    getUsuarios({commit}){
      const usuarios = [] 
      db.collection('usuarios').get()
      .then(res=> {
        res.forEach(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let usuario = doc.data()
          usuario.id = doc.id
          usuarios.push(usuario)
        })
        commit('setUsuarios', usuarios)
      })
    },
    getUsuario({commit}, idUsuario){
      db.collection('usuarios').doc(idUsuario).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let usuario = doc.data()
        usuario.id = doc.id
        commit('setUsuario', usuario)
      })
    },
    editarUsuario({commit} ,usuario){
      db.collection('usuarios').doc(usuario.id).update({
        nombre: usuario.nombre,
        email:  usuario.email
      })
      .then(() =>{
        console.log('usuario editado')
        router.push('/')
      })
    },
    agregarUsuario({commit}, nuevoUsuario){
      db.collection('usuarios').add({
        nombre: nuevoUsuario.nombre,
        email:  nuevoUsuario.email
        
      })
      .then(doc => {
        console.log(doc.id)
        router.push('/')
       
      })
    },
    eliminarUsuario({commit, dispatch}, idUsuario){
      db.collection('usuarios').doc(idUsuario).delete()
      .then( () => {
        console.log('usuario eliminado')
        dispatch('getUsuarios')
      })
    }
  },
  
  modules: {
  }
})
