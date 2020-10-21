<template>
<div>
    <h1>Inicio</h1>
    <router-link to='/agregar'>
    <button>Agregar</button>
    </router-link>
    <ul>
        <li v-for="(item, index) in usuarios" :key="index">
            {{item.nombre}} - {{item.email}} 
            <router-link :to="{name: 'Editar', params:{id: item.id}}">
            <button>Editar</button>
            </router-link>
            <button @click="eliminarUsuario(item.id)">Eliminar</button>
        </li>
    </ul>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    created() {
        this.getUsuarios()
    },
    methods: {
        ...mapActions(['getUsuarios', 'eliminarUsuario'])
    },
    computed: {
        ...mapState(['usuarios'])
    },
}
</script>
