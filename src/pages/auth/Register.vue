<template>
  <div class="h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-6 text-center">Create an Account</h2>

      <form @submit.prevent="registerUser" class="space-y-4">
        <!-- Name -->
        <div>
          <label class="block text-sm font-medium mb-1">Full Name</label>
          <input
            v-model="name"
            type="text"
            class="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            class="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      <p class="mt-4 text-sm text-center">
        Already have an account?
        <RouterLink to="/login" class="text-blue-600 hover:underline">
          Sign in
        </RouterLink>
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

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function registerUser() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }

  // Mock user registration (replace with API later)
  auth.setUser({
    user: { name: name.value, email: email.value },
    token: 'mock-token',
  })

  router.push('/dashboard')
}
</script>
