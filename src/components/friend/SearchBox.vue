<template>
  <div class="friend-header__search">
    <div class="friend-header__search-wrapper">
      <i class="friend-header__search-icon"></i>
      <input
        class="friend-header__search-input"
        v-model="search_value"
        placeholder="이름, 아이디로 검색"
      />
    </div>
    <i class="friend-header__search-cancel-icon"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search_value: '',
    }
  },
}
</script>
<style lang="scss" scoped>
.friend-header__search {
}

.friend-header__search-wrapper {
}

.friend-header__search-icon {
}

.friend-header__search-input {
}

.friend-header__search-cancel-icon {
}
</style>
