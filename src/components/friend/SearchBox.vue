<template>
  <div class="friend-header__search">
    <div class="friend-header__search-wrapper">
      <i class="friend-header__search-icon"></i>
      <input
        type="text"
        class="friend-header__search-input"
        v-model="searchValue"
        placeholder="이름, 아이디로 검색"
        @keyup.enter="searchFriend"
      />
    </div>
    <i @click="resetSearchValue" class="friend-header__search-cancel-icon"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    searchFriend() {
      //API 호출 및 vuex 처리로직 들어갈 예정
      console.log(this.searchValue)
      this.searchValue = ''
    },
    resetSearchValue() {
      this.searchValue = ''
    },
  },
}
</script>
<style lang="scss" scoped>
input {
  outline: none;
  border: none;
  background: none;
}
.friend-header__search {
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid var(--color-semi-gray);
  border-radius: 10px;
}

.friend-header__search-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.friend-header__search-icon {
  width: 15px;
  height: 15px;
  margin: 0px 10px;
  mask-image: url('@/assets/svg/ic_friend_find-white.svg');
  mask-repeat: no-repeat;
  mask-size: 100%;
  background-color: var(--color-semi-gray);
}

.friend-header__search-input {
  width: 100%;
  color: var(--color-dark-gray);
}

.friend-header__search-input::placeholder {
  color: var(--color-semi-gray);
}

.friend-header__search-cancel-icon {
  width: 15px;
  height: 15px;
  margin: 0px 10px;
  mask-image: url('@/assets/svg/ic_xmark.svg');
  mask-repeat: no-repeat;
  mask-size: 70%;
  background-color: var(--color-semi-gray);
  cursor: pointer;
}
</style>
