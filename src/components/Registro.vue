<template>
    <div>
        <form v-on:submit="enviarDatos" class="formulario">
  
            <div class="campo">
                <label for="email"> Email: </label>
                <input 
                    id="email"
                    type="text" 
                    placeholder="Correo Electronico"
                    v-model="email"
                >
            </div>
  
            <div class="campo">
                <label for="nombre"> Nombre: </label>
                <input 
                    id="nombre"
                    type="tel" 
                    placeholder="Nombre Comppleto"
                    v-model="nombre"
                >
            </div>
  
            <div class="campo">
                <label for="password"> Contraseña: </label>
                <input 
                    id="password"
                    type="text" 
                    placeholder="Password"
                    v-model="password"
                >       
            </div>

            <div class="campo">
                <label for="grupo"> Grupo: </label>
                <input 
                    id="grupo"
                    type="text" 
                    placeholder="IDGYS81"
                >       
            </div>
  
            <div class="boton">
                <input 
                    type="submit" 
                    value="Guardar"
                >
            </div>
  
        </form>
        
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import UserServices from '@/services/UserServices'
  
  let email:Ref<string> = ref('')
  let nombre:Ref<string> = ref('')
  let password:Ref<string> = ref('')
  let grupo:Ref<string> = ref('')
  
  let mensaje = ref('')
  let tipo = ref('')
  
  const service = new UserServices()
  
  
  const enviarDatos = (e: any) => {
    e.preventDefault();
  
    if ([email.value, nombre.value, password.value, grupo.value].includes('')) {
            mensaje.value = 'Todos los campos son obligatorios'
            tipo.value = 'error'
            return
        }
    
    let registro = {
        email: email.value,
        nombre: nombre.value,
        password: password.value,
        grupo: grupo.value,
    }
  
    console.log(registro);
  
    service.fetchRegistro(registro.email, registro.nombre, registro.password, registro.grupo)
    
  }
  
  </script>
  
  <style>
    
  </style>
  