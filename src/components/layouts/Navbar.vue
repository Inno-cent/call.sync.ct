<template>
  <header class="flex items-center justify-between px-6 py-4 shadow-sm bg-white/3 rounded-b-2xl">
    <div class="flex items-center gap-4">
      <button @click="$emit('toggleSidebar')" class="btn-ghost">
        <!-- <svg ... /> -->
      </button>
      <div class="relative">
        <input v-model="query" placeholder="Search calls, contacts..." class="pl-10 pr-4 py-2 rounded-full bg-white/6 focus:ring-2 focus:ring-accent outline-none" />
        <svg class="absolute left-3 top-2.5 w-5 h-5 text-white/60" .../>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <NotificationBell />
      <div class="flex items-center gap-3">
        <img src="/avatar.jpg" class="w-10 h-10 rounded-full border border-white/10"/>
        <div class="hidden md:block">
          <p class="text-white font-medium text-sm">Innocent</p>
          <p class="text-white/60 text-xs">Available</p>
        </div>
      </div>
    </div>
  </header>
</template>
