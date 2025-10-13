<template>
  <div class="h-screen flex flex-col bg-gray-900 text-white">
    <header class="p-4 flex justify-between items-center bg-gray-800">
      <h1>CallSync Meeting</h1>
      <button class="bg-red-500 px-4 py-2 rounded" @click="$router.push('/dashboard')">Leave</button>
    </header>
    <div class="flex-1 flex items-center justify-center">
      <p class="text-gray-300">Video call interface coming soon 🎥</p>
    </div>
  </div>
</template>
