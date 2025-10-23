<template>
  <div class="card-glass p-4 hover:scale-[1.02] transition-transform">
    <div class="flex items-center gap-4">
      <div
        class="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center"
      >
        P
      </div>
      <div>
        <div class="font-medium">{{ contact.name }}</div>
        <div class="text-sm text-white/60">{{ contact.email }}</div>
      </div>
    </div>
    <div class="mt-4 flex gap-2">
      <button class="px-3 py-2 rounded-xl bg-white/6">Message</button>
      <button class="btn-primary">Schedule</button>
    </div>
  </div>
</template>
<script>
export default { props: ["contact"] };
</script>