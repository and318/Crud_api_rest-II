<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarUsuario(usuario)">
            <label>Nombre</label>
    <input type="text" v-model="usuario.nombre"><br>
    <label>Email</label>
    <input type="text" v-model="usuario.email">
           
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
           usuario:[]
        }
    },
    methods: {
        ...mapActions(['agregarUsuario'])
    },
}
</script>