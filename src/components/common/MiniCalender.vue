<template>
  <div class="w-full">
    <div class="grid grid-cols-7 gap-1 text-xs text-white/60">
      <div v-for="d in 7" :key="d" class="py-2 text-center">S</div>
    </div>
    <div class="mt-3 h-36 rounded-lg bg-white/4"></div>
  </div>
</template>


<script>
export default { name: "MiniCalendar" };
</script>