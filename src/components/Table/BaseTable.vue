<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <el-table>
    <el-table-column
      v-for="column in props.columns"
      v-bind="column"
    >
      <!-- 自定义列 -->
      <template
        v-if="column.isSlot"
        #default="scope"
      >
        <slot
          :name="column.prop"
          :row="scope.row"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped></style>
