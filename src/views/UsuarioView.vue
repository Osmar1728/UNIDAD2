<template>
    <div>
      <h2><label>Id: </label>{{ usuario.id }}</h2>
      <h2><label>Correo: </label>{{ usuario.email }}</h2>
      <h2><label>Nombre: </label>{{ usuario.name }}</h2>
      <h2><label>Contraseña: </label>{{ usuario.password }}</h2>
      <h2><label>Grupo: </label>{{ usuario.grupo }}</h2>
    </div>
  </template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router'
import UserServices from '@/services/UserServices';
import { onMounted } from 'vue'
  
  const service = new UserServices()
  const usuario = service.getUser()
  
  onMounted(async () => {
    const router = useRoute()
    const userEmail = router.params.email as string
    await service.fetchUser(userEmail)
  })
  
</script>
  
<style>

</style>
  
