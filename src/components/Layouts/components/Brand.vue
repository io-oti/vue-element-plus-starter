<script setup>
const router = useRouter()
const title = import.meta.env.VITE_APP_TITLE

function gotoHome() {
  router.push('/')
}
</script>

<template>
  <div class="brand">
    <img
      class="logo"
      src="@/assets/logo.svg"
      alt="logo"
      @click="gotoHome"
    />
    <span
      class="title"
      @click="gotoHome"
    >
      {{ title }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.brand {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--size-sm);
  width: 100%;
  height: 60px;
  max-width: 300px;
  font-size: 20px;
  box-sizing: border-box;

  .logo,
  .title {
    cursor: pointer;
  }

  .logo {
    width: 36px;
    height: 36px;
  }
}
</style>
