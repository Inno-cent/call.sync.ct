import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

// Example auth store
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    setUser(data) {
      this.user = data.user
      this.token = data.token
    },
    logout() {
      this.user = null
      this.token = null
    }
  },
})
