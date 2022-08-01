<template>
  <section class="sidebar">
    <article class="sidebar__menu">
      <div class="sidebar__menu--calendar">
        <i class="sidebar__menu--calendar-icon" />
        <span class="sidebar__menu--calendar-text">일정</span>
      </div>
      <div class="sidebar__menu--find">
        <i class="sidebar__menu--find-icon" />
        <span class="sidebar__menu--find-text">친구 찾기</span>
      </div>
    </article>
    <article class="sidebar__friends">
      <ul class="sidebar__friends--title">
        <div class="sidebar__friends--title-box">
          <i class="sidebar__friends--title-icon" />
          <span class="sidebar__friends--title-text">친구 목록</span>
        </div>
        <li
          :key="i"
          v-for="(friend, i) in friends"
          class="sidebar__friends--item"
        >
          <img class="sidebar__friends--item-img" :src="friend.img_url" />
          <span class="sidbar__friends--item-name">{{ friend.username }}</span>
        </li>
      </ul>
    </article>
  </section>
</template>
<script>
export default {
  data() {
    return {
      // 임시 데이터. 수정 필요함
      friends: [
        { username: '이필웅', img_url: require('@/assets/img_flitto.png') },
        { username: '김소현', img_url: require('@/assets/img_flitto.png') },
        { username: '김효은', img_url: require('@/assets/img_flitto.png') },
        { username: '김도경', img_url: require('@/assets/img_flitto.png') },
        { username: '윤성철', img_url: require('@/assets/img_flitto.png') },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
// 사이드바 클릭 시 svg 색 변경 및 조건부 렌더링 작업 필요함

li {
  list-style: none;
}
.sidebar {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80%;
  padding: 1rem 2rem 2rem 2rem;

  &__menu {
    height: 7rem;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: bold;

    &--calendar {
      display: flex;
      padding: 0.7rem;
      background: var(--color-blue);
      color: var(--color-white);
      border-radius: 10px;
      align-items: center;

      &-icon {
        width: 20px;
        height: 20px;
        -webkit-mask-image: url('@/assets/svg/ic_calendar-black.svg');
        mask-image: url('@/assets/svg/ic_calendar-black.svg');
        mask-repeat: no-repeat;
        background-color: var(--color-white);
        margin-right: 0.6rem;
      }

      &-text {
        font-size: var(--font-size-h4);
        background: inherit;
      }
    }

    &--find {
      display: flex;
      padding: 0.7rem;
      // background: var(--color-blue);
      color: var(--color-black);
      border-radius: 10px;
      align-items: center;

      &-icon {
        width: 20px;
        height: 20px;
        -webkit-mask-image: url('@/assets/svg/ic_friend_find-black.svg');
        mask-image: url('@/assets/svg/ic_friend_find-black.svg');
        mask-repeat: no-repeat;
        background-color: var(--color-black);
        margin-right: 0.6rem;
      }

      &-text {
        font-size: var(--font-size-h4);
        background: inherit;
      }
    }
  }

  &__friends {
    margin-top: 1.5rem;

    &--title {
      display: flex;
      flex-direction: column;

      &-box {
        display: inherit;
        align-items: center;
        padding: 0.4rem;
        margin-bottom: 0.5rem;
      }

      &-icon {
        width: 30px;
        height: 30px;
        background: url('@/assets/svg/ic_toggle.svg');
        background-size: 100% 100%;
        margin-right: 0.3rem;
      }
      &-text {
        background: inherit;
        font-size: var(--font-size-h4);
        font-weight: bold;
      }
    }

    &--item {
      display: flex;
      margin-left: 1rem;
      margin-bottom: 1rem;
      align-items: center;

      &-img {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        margin-right: 0.5rem;
      }

      &-name {
      }
    }
  }
}
</style>
