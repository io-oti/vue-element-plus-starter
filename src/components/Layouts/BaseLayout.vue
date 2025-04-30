<script setup>
defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <el-container>
    <el-header v-if="showHeader">
      <Header />
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer v-if="showFooter">
      <Footer />
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-main {
  min-height: var(--main-height);
  overflow: inherit;
}
</style>
