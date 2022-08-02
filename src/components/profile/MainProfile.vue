<template>
  <section class="profile">
    <article class="profile__header">
      <!-- 타이틀 -->
      <div class="profile__header-title"># 프로필 보기</div>
      <!-- 전체 컨테이너 -->
      <div class="profile__header-container">
        <!-- 프로필 이미지 -->
        <div class="profile-image" />
        <div class="profile-container">
          <p class="profile-container__name">
            <span class="profile-container__name-color">{{ name }}</span> 님
            <!-- 수정 아이콘 -->
            <i class="profile-container__name-icon" />
          </p>
          <p class="profile-container__email">{{ email }}</p>
          <p class="profile-container__pwchange">비밀번호 변경</p>
        </div>
        <div class="profile-schedule">
          <!-- 토글 버튼 부분 -->
          <p class="profile-schedule__title">일정 공개 설정</p>
          <label class="profile-schedule__toggle">
            <input
              class="profile-schedule__toggle-input"
              type="checkbox"
              checked
            />
            <span class="profile-schedule__toggle-slider"></span>
          </label>
        </div>
      </div>
    </article>
    <!-- 스케쥴 안내 파트 -->
    <article class="profile__body">
      <div class="profile__body-title">
        <p><span>Today.</span> {{ getToday() }}</p>
        <hr />
      </div>
      <!-- 스케쥴 카드 파트 -->
      <ul class="profile__body-schedule">
        <li v-for="(schedule, i) in schedules" :key="i" class="schedule">
          <div class="schedule-container">
            <div class="schedule-image">
              <i />
            </div>
            <div class="schedule__content">
              <p class="schedule__content-title">
                [{{ schedule.council }}] {{ schedule.title }}
              </p>
              <p class="schedule__content-time">{{ schedule.time }}</p>
              <p class="schedule__content-participant">
                {{ getParticipant(schedule.participant) }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '김소현',
      email: 'sohyeon.kim@flitto.com',
      // 임시 스케쥴 데이터
      schedules: [
        {
          council: '독도',
          title: '토이 프로젝트 미팅',
          time: '오후 12시 ~ 오후 1시',
          participant: ['@이필웅', '@윤성철', '@김소현'],
        },
        {
          council: '바이칼',
          title: '토이 프로젝트 미팅',
          time: '오후 4시 ~ 오후 6시',
          participant: ['@이필웅', '@윤성철', '@김소현', '@송승민'],
        },
      ],
    }
  },
  methods: {
    getToday() {
      const date = new Date()
      const week = [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
      ]
      return (
        date.getFullYear() +
        '년 ' +
        date.getMonth() +
        '월 ' +
        date.getDate() +
        '일 ' +
        week[date.getDay()]
      )
    },
    getParticipant(iterable) {
      let participant = ''
      for (let i of iterable) {
        participant += i + ' '
      }
      return participant
    },
  },
}
</script>
<style lang="scss" scoped>
.profile {
  width: 100%;
  height: calc(100vh - 115px);
  background: none;

  &__header {
    background: none;

    &-title {
      background: none;
      margin: 1rem;
      color: var(--color-blue);
      font-weight: bold;
      font-size: var(--font-size-h4);
    }

    &-container {
      margin-top: 3rem;
      display: flex;
      background: none;

      .profile-image {
        width: 120px;
        height: 120px;
        margin-left: 5rem;
        border-radius: 50%;
        background: url('@/assets/img_flitto.png');
        background-size: cover;
      }

      .profile-container {
        background: none;
        margin-left: 30px;

        &__name {
          display: flex;
          font-size: var(--font-size-h3);
          background: none;
          font-weight: bold;

          &-color {
            background: none;
            color: var(--color-blue);
            margin-right: 0.5rem;
          }
          &-icon {
            width: 25px;
            height: 25px;
            background: url('@/assets/svg/ic_edit.svg');
            cursor: pointer;
            margin-left: 0.7rem;
          }
        }

        &__email {
          margin-top: 1rem;
          color: var(--color-gray);
          font-weight: bold;
          background: none;
        }

        &__pwchange {
          margin-top: 0.5rem;
          color: var(--color-gray);
          font-weight: bold;
          cursor: pointer;
          background: none;
          text-decoration: underline;
        }
      }

      .profile-schedule {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: 4rem;
        background: var(--color-white);
        align-items: center;

        &__title {
          background: var(--color-white);
          color: var(--color-gray);
          font-weight: bold;
        }
      }
    }
  }

  &__body {
    margin: 2rem auto;
    width: 90%;
    background: none;

    &-title {
      background: none;

      p {
        background: none;
        font-size: var(--font-size-h5);
        font-weight: bold;

        span {
          color: var(--color-blue);
          font-weight: bold;
          font-size: var(--font-size-h5);
          background: none;
        }
      }

      hr {
        border: 0.5px solid var(--color-black);
        margin: 0.5rem 0 1rem 0;
      }
    }

    .schedule {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      background-color: var(--color-light-blue);
      border-bottom: 1px solid var(--color-gray);
      margin-bottom: 1px;

      &-container {
        display: flex;
        flex-direction: row;
        background: none;
      }
      &-image {
        display: flex;
        width: 75px;
        height: 75px;
        justify-content: center;
        align-items: center;
        background: none;

        i {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: url('@/assets/img_flitto.png');
          background-size: cover;
        }
      }

      &__content {
        margin-left: 1rem;
        font-size: var(--font-size-h5);
        background: none;

        &-title {
          background: none;
        }

        &-time {
          background: none;
          margin-left: 0.5rem;
        }

        &-participant {
          background: none;
          margin-left: 0.5rem;
        }
      }
    }
  }
}

// 안에 종속시키고 상태값에 따라 그려주는거 다르게끔 종속이 안먹음
.profile-schedule__toggle {
  margin-top: 1rem;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 28px;
  background: var(--color-white);

  &-input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  // 선택된 부분에 따른 애니메이션 -> 상태값에 따른 형태로 토글되는 방식으로 바꾸기
  &-input:checked + &-slider {
    background-color: var(--color-blue);
  }

  &-input:checked + &-slider:before {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
  }

  // 슬라이더 바 부분
  &-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-gray);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    // 선택하는 원형
    &::before {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      left: 3px;
      bottom: 3px;
      background-color: var(--color-white);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
}
</style>
