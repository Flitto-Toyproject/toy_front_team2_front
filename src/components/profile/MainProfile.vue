<template>
  <section class="profile">
    <article class="profile__header">
      <!-- 타이틀 -->
      <div class="profile__header-title"># 프로필 보기</div>
      <!-- 전체 컨테이너 -->
      <div class="profile__header-container">
        <!-- 프로필 이미지 -->
        <div class="profile-image-wrapper">
          <div v-if="edit === false" class="profile-image-overlay" />
          <div class="profile-image" />
        </div>
        <!-- 프로필 파트 -->
        <div class="profile-container">
          <p class="profile-container__name">
            <span class="profile-container__name-color">{{ name }}</span> 님
            <!-- 수정 아이콘 -->
            <i
              v-if="edit && isMine"
              class="profile-container__name-icon"
              @click="this.edit = !this.edit"
            />
            <button
              @click="this.edit = !this.edit"
              v-if="edit === false"
              class="profile-container__name-cancle"
            >
              취소
            </button>
            <button
              @click="this.edit = !this.edit"
              v-if="edit === false"
              class="profile-container__name-confirm"
            >
              확인
            </button>
          </p>
          <p class="profile-container__email">{{ email }}</p>
          <p
            v-if="isMine"
            class="profile-container__pwchange"
            @click="modal = !modal"
          >
            비밀번호 변경
          </p>
          <button v-else class="profile-container__unfollow">Unfollow</button>
        </div>
        <!-- 일정 공개 설정 -->
        <div v-if="isMine" class="profile-toggle">
          <p class="profile-toggle__title">일정 공개 설정</p>
          <!-- 토글 버튼 부분 -->
          <label class="profile-toggle__label">
            <input
              class="profile-toggle__label-input"
              type="checkbox"
              v-model="toggle"
              @click="toggleInput"
            />
            <span class="profile-toggle__label-slider"></span>
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
      <ul v-if="schedules && isPublic === true" class="schedule">
        <!-- container 부분을 수정하기 종속관계가 존재하면 클래스명을 유사하게 -->
        <li class="schedule-card" v-for="(schedule, i) in schedules" :key="i">
          <div class="schedule-card-container">
            <div class="schedule-card-image">
              <i />
            </div>
            <div class="schedule-card__content">
              <p class="schedule-card__content-title">
                [{{ schedule.council }}] {{ schedule.title }}
              </p>
              <p class="schedule-card__content-time">{{ schedule.time }}</p>
              <p class="schedule-card__content-participant">
                {{ getParticipant(schedule.participant) }}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div v-if="schedules.length === 0" class="schedule-empty">
        <i class="schedule-empty-image" />
        <p class="schedule-empty-text">오늘 등록된 일정이 없습니다.</p>
      </div>
      <div
        v-if="isMine === false && isPublic === false"
        class="schedule-public"
      >
        <i class="schedule-public-image" />
        <p class="schedule-public-text">
          친구가 일정 공개를 비활성화 해놓은 상태입니다.
        </p>
      </div>
    </article>
    <ProfileModal v-if="modal" @close="closeModal" />
  </section>
</template>

<script>
import ProfileModal from '../modal/ProfileModal.vue'
export default {
  components: { ProfileModal },
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
      toggle: false,
      // edit -> 수정하기 관련 변수
      edit: true,
      // isMine -> 내정보인지 체크용 변수
      isMine: true,
      // isPublic -> 내정보 공개여부 체크용 변수
      isPublic: true,
      modal: false,
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
        String(parseInt(date.getMonth()) + 1) +
        '월 ' +
        date.getDate() +
        '일 ' +
        week[date.getDay()]
      )
    },
    // reduce나 다른 메소드
    getParticipant(iterable) {
      let participant = ''
      for (let i of iterable) {
        participant += i + ' '
      }
      return participant
    },
    toggleInput() {
      this.toggle = !this.toggle
      console.log(this.toggle)
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
  },
}
</script>
<style lang="scss" scoped>
.profile {
  width: 100%;
  height: calc(100vh - 115px);
  background: none;
  overflow-y: auto;

  // 헤더 부분
  &__header {
    background: none;

    // 타이틀
    &-title {
      background: none;
      margin: 1rem;
      color: var(--color-blue);
      font-weight: bold;
      font-size: var(--font-size-h4);
    }

    // 전체 컨테이너
    &-container {
      margin-top: 3rem;
      display: flex;
      background: none;

      .profile-image-wrapper {
        background: none;
        .profile-image-overlay {
          position: absolute;
          margin-left: 5rem;
          width: 120px;
          min-width: 120px;
          height: 120px;
          min-height: 120px;
          border-radius: 50%;
          background: rgba(50, 50, 50, 0.7) url('@/assets/svg/ic_camera.svg')
            no-repeat center center;
          background-size: 40%;
          cursor: pointer;

          &:hover {
            background: rgba(50, 50, 50, 0.8) url('@/assets/svg/ic_camera.svg')
              no-repeat center center;
            background-size: 45%;
          }
        }
        // 프로필 이미지
        .profile-image {
          width: 120px;
          min-width: 120px;
          height: 120px;
          min-height: 120px;
          margin-left: 5rem;
          border-radius: 50%;
          background: url('@/assets/img_flitto.png');
          background-size: cover;
        }
      }
      // 프로필 파트
      .profile-container {
        background: none;
        margin-left: 25px;

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

          // 수정 아이콘
          &-icon {
            width: 25px;
            height: 25px;
            background: url('@/assets/svg/ic_edit.svg');
            cursor: pointer;
            margin-left: 0.7rem;
          }

          // 취소, 확인 버튼
          &-cancle {
            margin-left: 0.7rem;
            background-color: var(--color-white);
            color: var(--color-blue);
            font-weight: bold;
            cursor: pointer;
            border: 1px solid var(--color-blue);
            width: 70px;
            border-radius: 10px;
            transition: 0.2s all;

            &:hover {
              margin-left: 0.7rem;
              background-color: var(--color-blue);
              color: var(--color-white);
              font-weight: bold;
              cursor: pointer;
              border: 1px solid var(--color-blue);
              width: 70px;
              border-radius: 10px;
            }
            &:active {
              transform: scale(0.9);
            }
          }

          &-confirm {
            margin-left: 0.7rem;
            background-color: var(--color-blue);
            color: var(--color-white);
            font-weight: bold;
            cursor: pointer;
            border: 1px solid var(--color-blue);
            width: 70px;
            border-radius: 10px;
            transition: 0.2s all;

            &:hover {
              margin-left: 0.7rem;
              background-color: var(--color-white);
              color: var(--color-blue);
              font-weight: bold;
              cursor: pointer;
              border: 1px solid var(--color-blue);
              width: 70px;
              border-radius: 10px;
            }

            &:active {
              transform: scale(0.9);
            }
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

        &__unfollow {
          margin-top: 0.5rem;
          width: 120px;
          height: 35px;
          border-radius: 10px;
          background-color: var(--color-white);
          border: 2px solid var(--color-blue);
          color: var(--color-blue);
          font-weight: bold;
          font-size: var(--font-size-h5);
          transition: 0.3s all;
          cursor: pointer;

          &:hover {
            background-color: var(--color-blue);
            color: var(--color-white);
          }

          &:active {
            transform: scale(0.9);
          }
        }
      }

      // 일정 공개 설정
      .profile-toggle {
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

        // 토글 버튼 부분
        &__label {
          margin-top: 2rem;
          position: fixed;
          display: inline-block;
          width: 60px;
          height: 28px;
          background: none;

          &-input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          &-input:checked + .profile-toggle__label-slider {
            background-color: var(--color-blue);
          }

          &-input:checked + .profile-toggle__label-slider:before {
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
      }
    }
  }

  // 스케쥴 안내 부분
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

    // 스케쥴 카드 파트
    .schedule-card {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      background-color: var(--color-light-blue);
      border-bottom: 1px solid var(--color-gray);
      margin-bottom: 1px;
      cursor: pointer;

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

    .schedule-empty {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 400px;
      justify-content: center;
      align-items: center;
      background: none;

      &-image {
        display: block;
        width: 200px;
        height: 200px;
        background: url('@/assets/img_alram.png');
        background-size: cover;
      }

      &-text {
        text-align: center;
        background: none;
        color: var(--color-gray);
      }
    }

    .schedule-public {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 400px;
      justify-content: center;
      align-items: center;
      background: none;

      &-image {
        display: block;
        width: 250px;
        height: 200px;
        background: url('@/assets/img_private.png');
        background-size: cover;
      }

      &-text {
        text-align: center;
        background: none;
        color: var(--color-gray);
      }
    }
  }
}
</style>
