<template>
  <header>
    <div class="header">
      <div class="header__logo"></div>
      <div class="header__alramAndProfile">
        <div class="header__alarm"></div>
        <div class="header__profile"></div>
      </div>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  background: var(--color-white);
}
.header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  margin: 0rem 1.875rem 0.813rem 1.688rem;

  &__logo {
    width: 40px;
    height: 40px;
    background: url('@/assets/img_flitto.png') no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
  &__alramAndProfile {
    display: flex;
    background: inherit;
  }
  &__alarm {
    width: 25px;
    height: 28px;
    margin-right: 1.375rem;
    background: url('@/assets/svg/ic_alarm.svg') no-repeat;
    background-size: cover;
  }
  &__profile {
    width: 30px;
    height: 30px;
    background: url('@/assets/img_flitto.png') no-repeat;
    background-size: cover;
    border-radius: 50%;
  }
}
</style>
