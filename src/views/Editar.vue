<template>
<div>
<h1>Editar</h1>
    {{usuario.nombre}} - {{usuario.email}}
<form @submit.prevent="editarUsuario(usuario)">
    <input type="text" v-model="usuario.nombre">
    
    <input type="text" v-model="usuario.email">
    <button type="submit">Guardar</button>
</form>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getUsuario(this.id)
    },
    methods: {
        ...mapActions(['getUsuario', 'editarUsuario'])
    },
    computed: {
      ...mapState (['usuario'])  
    },
}
</script>