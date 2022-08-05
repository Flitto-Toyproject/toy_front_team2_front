<template>
  <header>
    <div class="header">
      <div class="header__logo" @click="$router.push('/main/calendar')"></div>
      <div class="header__alramAndProfile">
        <div class="header__alarm" @click="$router.push('/main/alarm')" />
        <div class="header__profile" @click="$router.push('/main/profile')" />
      </div>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@keyframes vibration {
  from {
    transform: rotate(3deg);
  }
  to {
    transform: rotate(-3deg);
  }
}

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
    cursor: pointer;
    transition: 0.2s all;

    &:active {
      transform: scale(0.9);
    }
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
    transition: 0.2s all;
    cursor: pointer;

    &:hover {
      animation: vibration 0.2s infinite;
    }
  }
  &__profile {
    width: 30px;
    height: 30px;
    background: url('@/assets/img_flitto.png') no-repeat;
    background-size: cover;
    border-radius: 50%;
    transition: 0.2s all;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
