import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

interface IUser {
    name: string,
    avatar: string,
}

export const useUserStore = defineStore('user', () => {
    const defaultUser: IUser = {
        name: "Stanley",
        avatar: "google.com"
    }
    const user = ref<IUser>(defaultUser)
    const setUser = (payload: IUser) => {
        user.value = payload
    }

    return {
        user,
        setUser
    }
})
