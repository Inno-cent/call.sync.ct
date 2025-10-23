<template>
<div :class="['card-glass', className]"><slot /></div>
</template>
<script>
export default { props: { className: { type: [String,Object], default: '' } } }
</script>