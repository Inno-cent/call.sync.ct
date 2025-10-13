<template>
  <MainLayout>
    <div class="max-w-xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
      <form @submit.prevent="createMeeting" class="space-y-4">
        <div>
          <label>Title</label>
          <input v-model="title" class="w-full border p-2 rounded mt-1"/>
        </div>
        <div>
          <label>Date</label>
          <input v-model="date" type="datetime-local" class="w-full border p-2 rounded mt-1"/>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Create Meeting
        </button>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
const title = ref('')
const date = ref('')
function createMeeting() {
  alert(`Meeting "${title.value}" scheduled on ${date.value}`)
}
</script>
