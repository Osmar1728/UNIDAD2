<template>
  <div>

    <ul>
      <li v-for="(usuario, index) in users" :key="index">
        <RouterLink :to="{ name: 'usuario', params: { email: usuario.email } }"
        >Email: {{ usuario.email }}, Nombre: {{ usuario.name }}</RouterLink>
      </li>
    </ul>

      <Registro />
      
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import UserService from '@/services/UserServices';
import Registro from '@/components/Registro.vue';

const service = new UserService()

const users = service.getUsers()

onMounted(async () => {
await service.fetchAll()
console.log(users.value);

})



</script>

<style>
  
</style>
