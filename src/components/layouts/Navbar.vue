<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white/3 backdrop-blur-sm rounded-b-2xl"
  >
    <div class="flex items-center gap-4">
      <button
        @click="$emit('toggleSidebar')"
        class="p-2 rounded-md hover:bg-white/6"
      >
        ☰
      </button>
      <div class="relative">
        <input
          v-model="query"
          placeholder="Search calls, contacts..."
          class="input-glass pl-10 pr-4"
        />
        <svg
          class="w-5 h-5 absolute left-3 top-3 text-white/60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35"
          ></path>
        </svg>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <button class="p-2 rounded-md hover:bg-white/6">🔔</button>
      <div class="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80"
          class="w-10 h-10 rounded-full border border-white/10"
        />
      </div>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return { query: "" };
  },
};
</script>