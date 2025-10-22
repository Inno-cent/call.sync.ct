<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue'
import Navbar from './components/layout/Navbar.vue'

export default {
  components: { Sidebar, Navbar }
}
</script>
