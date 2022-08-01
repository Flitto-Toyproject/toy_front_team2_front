<template>
  <section class="login">
    <article class="login__logo">
      <div class="login__logo-flitto">
        <i class="login__logo-flitto-icon" />
        <span class="login__logo-flitto-text">Flitto</span>
      </div>
      <div class="login__logo-title">
        <i class="login__logo-title-icon" />
        <span class="login__logo-title-text">CALENDAR</span>
      </div>
      <div class="login__logo-social">
        <i class="login__logo-social-facebook" />
        <i class="login__logo-social-instargram" />
        <i class="login__logo-social-twitter" />
      </div>
    </article>
    <article class="login__content">
      <div class="login__content-box">
        <AccountView :toggle="toggle" @account-toggle="accountToggle" />
      </div>
    </article>
  </section>
</template>

<script>
import AccountView from '../components/account/AccountView.vue'

export default {
  components: { AccountView },
  data() {
    return {
      toggle: true,
    }
  },
  methods: {
    accountToggle() {
      this.toggle = !this.toggle
      console.log(this.toggle)
    },
  },
}
</script>

<style lang="scss" scoped>
.temp {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
}

@mixin social-icon-preset($url) {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-white) url($url) no-repeat center center;
  background-size: 70% 70%;
  cursor: pointer;
}

@mixin icon-preset($url) {
  width: 40px;
  height: 40px;
  background: url($url);
  background-size: cover;
  cursor: pointer;
}

.login {
  display: flex;
  width: 100%;
  height: 100vh;

  &__logo {
    display: flex;
    flex-direction: column;
    width: 31%;
    min-width: 300px;
    justify-content: space-between;
    background: url('@/assets/img_login.png') no-repeat;
    background-size: cover;
    color: var(--color-white);

    &-flitto {
      margin: 2.5rem 0 0 2.5rem;
      background: none;
      display: flex;
      align-items: center;

      &-icon {
        @include icon-preset('@/assets/img_symbol.png');
        margin-right: 0.6rem;
      }

      &-text {
        font-size: var(--font-size-h4);
        background: none;
        cursor: pointer;
      }
    }

    &-title {
      display: flex;
      justify-content: center;
      background: none;
      align-items: center;
      font-size: var(--font-size-h2);
      font-weight: bold;

      &-icon {
        @include icon-preset('@/assets/svg/ic_calendar-white.svg');
        margin-bottom: 1.2rem;
        cursor: initial;
      }

      &-text {
        background: inherit;
      }
    }

    &-social {
      display: flex;
      background: none;
      margin: 0 0 3rem 3rem;

      &-facebook {
        @include social-icon-preset('@/assets/svg/ic_facebook.svg');
        background-size: 70% 70%;
        margin-right: 0.5rem;
      }
      &-instargram {
        @include social-icon-preset('@/assets/svg/ic_instargram.svg');
        margin-right: 0.5rem;
      }
      &-twitter {
        @include social-icon-preset('@/assets/svg/ic_twitter.svg');
      }
    }
  }

  &__content {
    width: 100%;
    background-color: #ffffff;
    display: flex;

    &-box {
      background-color: #ffffff;
      margin: auto;
      width: 330px;
      min-width: 330px;
      max-width: 330px;
      min-height: 400px;
      height: 450px;
    }
  }
}
</style>
