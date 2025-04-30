<script setup>
const columns = [
  { prop: 'name', key: 'name', label: 'Name' },
  { prop: 'address', key: 'address', label: 'Address', isSlot: true },
]
const data = ref([
  { name: 'tom', address: 'China' },
  { name: 'jerry', address: 'USA' },
  { name: 'alice', address: 'UK' },
])
</script>

<template>
  <ParetoLayout>
    <div class="table-container">
      <BaseTable
        :columns
        :data
      >
        <template #address="{ row }">
          {{ `[${row.address}]` }}
        </template>
      </BaseTable>
    </div>
  </ParetoLayout>
</template>

<style lang="scss" scoped>
.table {
  &-container {
    padding: var(--size-xl);
  }
}
</style>
