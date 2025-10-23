<template>
  <div :class="['p-6 rounded-2xl border', 'bg-white/6', 'backdrop-blur-sm', 'shadow-glass', className]">
    <slot />
  </div>
</template>
<script>
export default { props: { className: { type: [String,Object], default: '' } } }
</script>
<style scoped>
/* slight border glow */
div { border-color: rgba(255,255,255,0.08); }
</style>
