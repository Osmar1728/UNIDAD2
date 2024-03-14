import type IUser from "@/interfaces/IUser";
import { ref } from 'vue'
import type { Ref } from 'vue'


export default class UserService{

    private users: Ref<IUser[]>
    private user: Ref<IUser>

    private url = 'http://172.16.107.120:3000'

    constructor(){
    this.users = ref([])
    this.user = ref({}) as Ref<IUser>
    }

    getUsers(): Ref<IUser[]>{
        return this.users
    }

    getUser(): Ref<IUser>{
        return this.user
    }

    async fetchAll(): Promise<void>{
        try{
            const json = await fetch(this.url + 'users')
            const response = await json.json()
            this.users.value = await response
        } catch (error){
            console.log(error)
        }
    }

    async fetchUser(email: string): Promise<void>{
        try {
          const json = await fetch(this.url + '/users/' + email)
          const response = await json.json()
          this.user.value = await response // reactvidad guarda losdattos y lo actualiza
        } catch (error) {
          console.log(error)
        }
      }

    async fetchRegistro(email: string, name: string, password: string, grupo: string) {
        const respuesta = await fetch(this.url + '/Register?' + 'email=' + email + '&name=' + name + '&password=' + password, {
            method: 'POST'
        } )
        const resultado = await respuesta.json()
        console.log(resultado);
   }
}

