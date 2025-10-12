<template>
  <div class="h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-6">Sign In</h2>
      <form @submit.prevent="loginUser" class="space-y-4">
        <div>
          <label>Email</label>
          <input v-model="email" type="email" class="w-full border rounded p-2 mt-1"/>
        </div>
        <div>
          <label>Password</label>
          <input v-model="password" type="password" class="w-full border rounded p-2 mt-1"/>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
      <p class="mt-4 text-sm text-center">
        Don’t have an account? <RouterLink to="/register" class="text-blue-600">Register</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store'

const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')

function loginUser() {
  auth.setUser({ user: { email: email.value }, token: 'mock-token' })
  router.push('/dashboard')
}
</script>
