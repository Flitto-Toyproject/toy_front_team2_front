<template>
  <section class="account">
    <article class="account__header">
      <h1 v-if="toggle === true" class="account__header-title">Log In</h1>
      <h1 v-if="toggle === false" class="account__header-title">Sign In</h1>
      <p class="account__header-sub-title">
        Please fill your information below
      </p>
    </article>
    <form class="account__input">
      <label class="account__input-idlabel">
        <input
          v-model="id"
          type="text"
          class="account__input-id"
          placeholder="ID"
        />
      </label>
      <label class="account__input-pwlabel">
        <input
          v-model="pw"
          type="password"
          class="account__input-pw"
          placeholder="PASSWORD"
        />
      </label>
      <label v-if="toggle === false" class="account__input-namelabel">
        <input v-model="name" class="account__input-name" placeholder="NAME" />
      </label>
    </form>
    <article class="account__footer">
      <i class="account__footer-facebook" />
      <i class="account__footer-google" />
      <i class="account__footer-kakao" />
      <button v-if="toggle === true" class="account__footer-button">
        <span>Log In</span>
      </button>
      <button
        @click="toggleChange"
        v-if="toggle === false"
        class="account__footer-button"
      >
        <span>sign In</span>
      </button>
    </article>
    <hr />
    <p class="account__notice" v-if="toggle === true">
      혹시 계정이 없으신가요 ?? <span @click="toggleChange">Sign in</span>
    </p>
    <p class="account__notice" v-if="toggle === false">
      소셜 회원 가입은 원하시는 아이콘을 클릭하세요!
    </p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      id: '',
      pw: '',
      name: '',
    };
  },
  props: {
    toggle: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggleChange() {
      this.$emit('account-toggle', !this.toggle);
      (this.id = ''), (this.pw = ''), (this.name = '');
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  background: var(--color-white);
}

@mixin input-icon($url) {
  content: '';
  position: absolute;
  left: 15px;
  top: 10px;
  bottom: 0;
  width: 20px;
  height: 20px;
  background: url($url) no-repeat center center;
}

@mixin social-icon($url) {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--color-white) url($url) no-repeat center center;
  background-size: 90% 90%;
  cursor: pointer;
  filter: drop-shadow(1px 2px 1px rgb(178, 178, 178));
  transition: 0.2s all;

  &:active {
    transform: scale(0.9);
  }
}

@mixin account-button {
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background: var(--color-blue);
  border: none;
  color: var(--color-white);
  font-size: var(--font-size-h4);
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  span {
    background: var(--color-blue);
    display: inline-block;
    position: relative;
    transition: 0.2s;

    &:after {
      content: '\00bb';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.2s;
    }
  }
  &:hover span {
    padding-right: 35px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
}

.account {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;

  &__header {
    &-title {
      font-size: var(--font-size-h2);
      margin-bottom: 1rem;
    }
    &-sub-title {
      font-size: var(--font-size-h5);
      margin-bottom: 2rem;
    }
  }

  &__input {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      max-width: 280px;
      height: 5vh;
      min-height: 40px;
      padding-left: 3rem;
      border-radius: 10px;
      margin-bottom: 1.5rem;
      border: none;
      background-color: var(--color-light-gray);
      -webkit-appearance: none;
      overflow: auto;

      &:focus {
        outline: none;
      }
    }

    &-idlabel {
      align-items: center;
      position: relative;

      &::before {
        @include input-icon('@/assets/svg/ic_id.svg');
      }
    }

    &-pwlabel {
      align-items: center;
      position: relative;

      &::before {
        @include input-icon('@/assets/svg/ic_password.svg');
      }
    }

    &-namelabel {
      align-items: center;
      position: relative;

      &::before {
        @include input-icon('@/assets/svg/ic_name.svg');
      }
    }
  }

  &__footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    &-facebook {
      @include social-icon('@/assets/img_facebook.png');
    }
    &-google {
      @include social-icon('@/assets/svg/img_google.svg');
    }
    &-kakao {
      @include social-icon('@/assets/img_kakaotalk.png');
      background-size: 80% 80%;
    }
    &-button {
      @include account-button();
    }
  }

  hr {
    border: 0.7px solid var(--color-light-gray);
    margin-bottom: 2rem;
  }
  &__notice {
    display: flex;
    justify-content: flex-end;
    color: var(--color-dark-gray);

    span {
      margin: 0 1rem 0 1rem;
      font-weight: bold;
      color: var(--color-blue);
      cursor: pointer;
    }
  }
}
</style>
