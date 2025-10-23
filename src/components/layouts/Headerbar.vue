<template>
  <header class="header">
    <div class="header-left">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>

    <div class="header-center" v-if="showSearch">
      <input type="text" placeholder="Search..." class="search-input" />
    </div>

    <div class="header-right">
      <slot name="actions"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    subtitle: String,
    showSearch: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.5rem;
  background: linear-gradient(90deg, #121829, #1b263b);
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);

  .header-left {
    h1 {
      font-size: 2rem;
      font-weight: 700;
    }
    p {
      font-size: 1rem;
      opacity: 0.8;
      margin-top: 0.3rem;
    }
  }

  .search-input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 10px;
    color: #fff;
    width: 300px;
    outline: none;
    transition: 0.3s;

    &:focus {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .header-right {
    display: flex;
    gap: 1rem;
  }
}
</style>
