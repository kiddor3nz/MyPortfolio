import {defineStore} from "pinia";
import axiosClient from "@/axios";
const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    fetchUser() {
      return axiosClient.get('/api/user')
        .then(({data}) => {
          console.log(data)
          this.user = data
        })
    },logout() {
      this.user = null
    }
  },
  persist: true // ✅ this enables persistence for the whole store
})

export default useUserStore;