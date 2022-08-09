<template>
  <section class="sidebar">
    <article class="sidebar__menu">
      <div
        :class="{
          'sidebar__menu-calendar': !isCalendar || (isCalendar && isOther),
          'sidebar__menu-calendar-clicked': isCalendar && !isOther,
        }"
        @click=";[$router.push('/main/calendar'), (isCalendar = true)]"
      >
        <i
          class="sidebar__menu-calendar-icon"
          :class="{
            'sidebar__menu-calendar-clicked-icon': isCalendar && !isOther,
          }"
        />
        <span
          class="sidebar__menu-calendar-text"
          :class="{
            'sidebar__menu-calendar-clicked-text': isCalendar && !isOther,
          }"
          >일정</span
        >
      </div>
      <div
        :class="{
          'sidebar__menu-find': isCalendar,
          'sidebar__menu-find-clicked': !isCalendar,
        }"
        @click=";[$router.push('/main/friend'), (isCalendar = false)]"
      >
        <i
          class="sidebar__menu-find-icon"
          :class="{ 'sidebar__menu-find-clicked-icon': !isCalendar }"
        />
        <span
          class="sidebar__menu-find-text"
          :class="{ 'sidebar__menu-find-clicked-text': !isCalendar }"
          >친구 찾기</span
        >
      </div>
    </article>
    <article class="sidebar__friends">
      <ul class="sidebar__friends-title">
        <div class="sidebar__friends-title-box" @click="toggle = !toggle">
          <i
            class="sidebar__friends-title-icon"
            :class="{ 'sidebar__friends-title-icon-rotate': toggle }"
          />
          <span class="sidebar__friends-title-text">친구 목록</span>
        </div>
        <div v-if="!toggle" class="sidebar__friends-items">
          <li
            :key="i"
            v-for="(friend, i) in friends"
            class="sidebar__friends-item"
            @click="getFriendProfile(friend.id)"
          >
            <img class="sidebar__friends-item-img" :src="friend.img_url" />
            <span class="sidebar__friends-item-name">{{
              friend.username
            }}</span>
          </li>
        </div>
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
        {
          id: 0,
          username: '이필웅',
          img_url: require('@/assets/img_flitto.png'),
        },
        {
          id: 1,
          username: '김소현',
          img_url: require('@/assets/img_flitto.png'),
        },
        {
          id: 2,
          username: '김효은',
          img_url: require('@/assets/img_flitto.png'),
        },
        {
          id: 3,
          username: '김도경',
          img_url: require('@/assets/img_flitto.png'),
        },
        {
          id: 4,
          username: '윤성철',
          img_url: require('@/assets/img_flitto.png'),
        },
      ],
      toggle: false,
      isCalendar: true,
      isOther: false,
      url: this.$route.path,
    }
  },
  mounted() {
    const url = this.url.slice(6)
    if (url !== 'calendar' && url !== 'friend') {
      this.isOther = true
    } else if (url !== 'calendar' && url === 'friend') {
      this.isOther = false
      this.isCalendar = false
    }
  },
  methods: {
    getFriendProfile(id) {
      this.$router.push(`/main/profile/${id}`)
    },
  },
  watch: {},
}
</script>
<style lang="scss" scoped>
// 사이드바 클릭 시 svg 색 변경 및 조건부 렌더링 작업 필요함
@mixin menu-default($url, $color) {
  display: flex;
  padding: 0.7rem;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
  color: var($color);

  &-icon {
    width: 20px;
    height: 20px;
    mask-image: url($url);
    mask-repeat: no-repeat;
    margin-right: 0.6rem;
    mask-size: 90%;
    background-color: var($color);
  }

  &-text {
    font-size: var(--font-size-h4);
    background: inherit;
  }

  &:hover {
    background: var(--color-light-blue);
  }
}

@mixin menu-clicked($url, $color) {
  display: flex;
  padding: 0.7rem;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
  background: var(--color-blue);
  color: var($color);

  &-icon {
    width: 20px;
    height: 20px;
    mask-image: url($url);
    mask-repeat: no-repeat;
    margin-right: 0.6rem;
    background-color: var($color);
  }

  &-text {
    font-size: var(--font-size-h4);
    background: inherit;
  }
}

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

    &-calendar {
      @include menu-default(
        '@/assets/svg/ic_calendar-black.svg',
        --color-black
      );
    }

    &-calendar-clicked {
      @include menu-clicked(
        '@/assets/svg/ic_calendar-black.svg',
        --color-white
      );
    }

    &-find {
      @include menu-default(
        '@/assets/svg/ic_friend_find-white.svg',
        --color-black
      );
    }
    &-find-clicked {
      @include menu-clicked(
        '@/assets/svg/ic_friend_find-white.svg',
        --color-white
      );
    }
  }

  &__friends {
    margin-top: 1.5rem;

    &-title {
      display: flex;
      flex-direction: column;
      cursor: pointer;

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
        transition: 0.2s ease;

        &:hover {
          background-color: var(--color-semi-gray);
          border-radius: 10px;
        }

        &-rotate {
          transform: rotate(-90deg);
        }
      }

      &-text {
        background: inherit;
        font-size: var(--font-size-h4);
        font-weight: bold;
      }
    }

    &-item {
      display: flex;
      margin-left: 1rem;
      margin-bottom: 1rem;
      align-items: center;
      cursor: pointer;
      background: none;
      transition: 0.2s all;
      border-radius: 10px;

      &:hover {
        padding: 0.5rem;
        background-color: var(--color-semi-gray);
      }

      &-img {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        margin-right: 0.5rem;
      }

      &-name {
        background: none;
      }
    }
  }
}
</style>
