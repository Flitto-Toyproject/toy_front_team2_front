<template>
  <div>
    <button @click="openModal">열기</button>
    <button @click="closeModal">닫기</button>

    <ModalFrame @close="closeModal" v-if="modal">
      <div class="modal__header">
        <p class="modal__header-title">비밀번호 변경</p>
        <i class="modal__header-icon" @click="closeModal" />
      </div>
      <hr />
      <div class="modal__body">
        <label class="cur_pw">
          <p class="cur_pw-title">현재 비밀번호</p>
          <input class="cur_pw-input" v-model="cur_pw" />
        </label>
        <label class="new_pw">
          <p class="new_pw-title">새 비밀번호</p>
          <input class="new_pw-input" v-model="new_pw" />
        </label>
        <label class="new_pw_confirm">
          <p class="new_pw_confirm-title">비밀번호 확인</p>
          <input class="new_pw_confirm-input" v-model="new_pw_confrim" />
        </label>
      </div>
      <hr />
      <div class="modal__footer">
        <button class="modal__footer-button" @click="closeModal">
          변경하기
        </button>
      </div>
    </ModalFrame>
  </div>
</template>
<script>
import ModalFrame from './ModalFrame.vue'
export default {
  components: { ModalFrame },
  data() {
    return {
      modal: false,
      cur_pw: '',
      new_pw: '',
      new_pw_confrim: '',
    }
  },

  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
  },
}
</script>

<style lang="scss">
@mixin modal-input() {
  &-title {
    font-weight: bold;
  }
  &-input {
    width: 95%;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 10px;
    padding-left: 10px;
  }
}

* {
  background-color: var(--color-white);
}
.modal__header {
  display: flex;
  width: inherit;
  padding: 15px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  &-title {
    font-weight: bold;
    font-size: var(--font-size-23);
  }

  &-icon {
    width: 25px;
    height: 25px;
    background: url('@/assets/svg/ic_xmark.svg') no-repeat;
    cursor: pointer;
  }
}

.modal__body {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 30px 30px;

  .cur_pw {
    @include modal-input();
  }
  .new_pw {
    @include modal-input();
  }
  .new_pw_confirm {
    @include modal-input();
  }
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 50px;
  align-items: center;

  &-button {
    margin-right: 15px;
    width: 110px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);
    }
  }
}

hr {
  border: 1px solid var(--color-light-gray);
}
</style>
