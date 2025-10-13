<template>
  <MainLayout>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Welcome back, {{ user?.email }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouterLink to="/schedule" class="p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition">
          <h3 class="font-semibold mb-2">📅 Schedule Meeting</h3>
          <p>Create a new meeting and send invites.</p>
        </RouterLink>
        <RouterLink to="/meeting/123" class="p-6 bg-green-50 rounded-lg shadow hover:bg-green-100 transition">
          <h3 class="font-semibold mb-2">🎥 Join Meeting</h3>
          <p>Start or join a video call session.</p>
        </RouterLink>
        <RouterLink to="/settings" class="p-6 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
          <h3 class="font-semibold mb-2">⚙️ Settings</h3>
          <p>Manage account and preferences.</p>
        </RouterLink>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useAuthStore } from '@/store'
const { user } = useAuthStore()
</script>
