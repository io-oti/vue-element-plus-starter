<script setup></script>

<template>
  <BaseLayout>
    <div class="home-container">
      <img
        class="home-logo"
        src="@/assets/logo.svg"
        alt="Vue logo"
      />

      <div class="home-wrapper">
        <span class="home-title">Vue Element Plus Starter</span>
        <span class="home-desc">
          <router-link to="/overview">
            {{ 'Overview' }}
          </router-link>
        </span>
      </div>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped>
.home {
  &-container {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1280px;
    height: var(--main-height);
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
  }

  &-logo {
    display: block;
    width: 128px;
    height: 128px;
    margin: 0 auto 2rem;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: var(--size-xl);
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }
}
</style>
