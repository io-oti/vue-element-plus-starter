<script setup>
const components = [
  { name: 'form', path: '/form', disabled: 'disabled' },
  { name: 'table', path: '/table' },
]
</script>

<template>
  <BaseLayout>
    <div class="overview-container">
      <div
        class="card"
        v-for="component in components"
      >
        <a
          :href="component.path"
          :value="component.disabled"
        >
          {{ component.name }}
        </a>
      </div>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped>
.overview-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--size-lg);
  max-width: 1280px;
  margin: var(--size-xl) auto;
  padding: var(--size-xl);

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    padding: var(--size-xl);
    background-color: var(--el-fill-color-light);
    border-radius: var(--size-sm);
  }
}
</style>
