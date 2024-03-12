import type IUser from "@/interfaces/IUser";
import { url } from "inspector";
import { ref } from 'vue'
import type { Ref } from 'vue'

export default class UserService{

    private users: Ref<IUser[]>
    private user: Ref<IUser>

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
            const json = await fetch(url + 'users')
            const response = await json.json()
            this.users.value = await response
        } catch (error){
            console.log(error)
        }
    }

    async fetchUser(id: string): Promise<void>{
        try {
          const json = await fetch(url + '/users/' + id)
          const response = await json.json()
          this.user.value = await response // reactvidad guarda losdattos y lo actualiza
        } catch (error) {
          console.log(error)
        }
      }

    async fetchRegistro(user: IUser): Promise<void>{
        try{
            const json = await fetch(url + 'users')
            const response = await json.json()
            this.users.value = await response
        } catch (error){
            console.log(error)
        }
    }
}

