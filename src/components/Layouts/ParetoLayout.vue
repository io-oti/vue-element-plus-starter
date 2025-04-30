<script setup>
const props = defineProps({
  sideWidth: {
    type: [String, Number],
    default: '300px',
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
})

const isExpanded = ref(true)

const width = computed(() => {
  if (!isExpanded.value) return 0

  return typeof props.sideWidth === 'number'
    ? `${props.sideWidth}px`
    : props.sideWidth
})

function onExpand() {
  isExpanded.value = !isExpanded.value
  console.log('ParetoLayout.vue:', isExpanded.value)
}
</script>

<template>
  <el-container>
    <el-aside>
      <Aside />
    </el-aside>
    <el-container>
      <el-header v-if="showHeader">
        <Header>
          <div
            class="menu-button"
            @click="onExpand"
          >
            <el-icon
              :class="isExpanded ? 'expanded' : 'folded'"
              :size="24"
            >
              <Fold v-if="isExpanded" />
              <Expand v-else />
            </el-icon>
          </div>
        </Header>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer v-if="showFooter">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-aside {
  width: v-bind(width);
  border-right: 1px solid #363637;
  transition: all 0.3s ease both;

  :deep(.brand) {
    padding: 0 var(--size-sm);
  }
}

.menu-button {
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: var(--size-xs);
  box-sizing: border-box;

  &:hover {
    background-color: #363637;
  }

  .expanded {
    animation: expand 0.3s ease;
  }

  .folded {
    animation: fold 0.3s ease;
  }
}

.el-main {
  min-height: var(--main-height);
  overflow: inherit;
}

@media (min-width: 1024px) {
  // .el-aside {
  //   display: v-bind(width);
  // }
}

@keyframes expand {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes fold {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-180deg);
  }
}
</style>
