<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { isDark, toggleDark } from '@/hooks/useDark.js'
</script>

<template>
  <div class="header">
    <slot>
      <Brand />
    </slot>
    <el-switch
      v-model="isDark"
      size="large"
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
      @change="toggleDark"
    />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--size-xl);
}
</style>
