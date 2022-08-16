<template>
  <section class="alarm">
    <article class="alarm__header">
      <p class="alarm__header-title"># 전체 알림</p>
      <div class="alarm__header-menu">
        <div class="alarm__header-menubox">
          <span class="menubox-all">전체</span> |
          <span class="menubox-friend">친구</span> |
          <span class="menubox-schedule">일정</span>
        </div>
        <div class="menubox-read-all" @click="alramReadAll">알림 전체 읽기</div>
      </div>
      <!-- 바디 부분 -->
      <article class="alarm__body">
        <div
          v-for="(schedule, i) in schedules"
          :key="i"
          class="alarm__body-title"
        >
          <hr />
          <div class="alarm__body-date">{{ schedule.date }}</div>
          <!-- 카드 부분 -->
          <div
            class="alarm__body-card-box"
            :class="{ 'alarm__body-card-box-clicked': !task.read }"
            v-for="(task, i) in schedule.body"
            :key="i"
            @click="clickItem(task)"
          >
            <!-- 아이콘 및 프로필 -->
            <i class="alarm__body-card-icon" />
            <img class="alarm__body-card-porifle" :src="task.porfileUrl" />
            <!-- 친구 추가일 경우 -->
            <div class="alarm__body-card-content" v-if="task.type === '친구'">
              <p>{{ task.from }}님이 회원님을 친구 추가 하였습니다.</p>
              <p class="card-content-announce">
                {{ task.type }} <span>| {{ date }}</span>
              </p>
            </div>
            <!-- 일정 추가일 경우 -->
            <div class="alarm__body-card-content" v-if="task.type === '일정'">
              <p>{{ task.from }}님이 회원님을 추가하였습니다.</p>
              <p>{{ task.council }}{{ task.content }}({{ task.time }})</p>
              <p class="card-content-announce">
                {{ task.type }} <span>| {{ date }}</span>
              </p>
            </div>
          </div>
        </div>
        <article class="alarm__footer">
          <div class="alarm__footer-announce">
            ※ 알림 목록은 최대 20개 까지 7일간 표시됩니다.
          </div>
        </article>
      </article>
    </article>
  </section>
</template>
<script>
export default {
  data() {
    return {
      schedules: [
        {
          date: '2022년 7월 14일',
          body: [
            {
              type: '친구',
              from: '이필웅',
              read: true,
              porfileUrl: require('../../assets/img_flitto.png'),
            },
            {
              type: '일정',
              from: '김효은',
              council: '[아고라]',
              content: '토이 프로젝트 미팅',
              time: '오후 12:00 - 오후 13:00',
              read: true,
              porfileUrl: require('../../assets/img_flitto.png'),
            },
          ],
        },
        {
          date: '2022년 7월 12일',
          body: [
            {
              type: '친구',
              from: '김도경',
              read: true,
              porfileUrl: require('../../assets/img_flitto.png'),
            },
            {
              type: '일정',
              from: '윤성철',
              council: '[아고라]',
              content: '토이 프로젝트 미팅',
              time: '오후 14:00 - 오후 15:00',
              read: true,
              porfileUrl: require('../../assets/img_flitto.png'),
            },
            {
              type: '일정',
              from: '이필웅',
              council: '[독도]',
              content: '토이 프로젝트 미팅',
              time: '오후 15:00 - 오후 16:00',
              read: true,
              porfileUrl: require('../../assets/img_flitto.png'),
            },
          ],
        },
      ],
      date: '오늘',
      menu: 'all',
    }
  },
  methods: {
    // Axios 활용하는 로직으로 변경 예정
    alramReadAll() {
      for (let schedule of this.schedules) {
        for (let task of schedule.body) {
          task.read = false
        }
      }
    },
    // Axios 활용하는 로직으로 변경 예정
    clickItem(task) {
      console.log(task.read)
      task.read = false
    },
  },
}
</script>
<style lang="scss" scoped>
@mixin schedule-card($card, $alarm) {
  display: flex;
  align-items: center;
  width: 100%;
  height: 110px;
  border-bottom: 1px solid var(--color-gray);
  background: var($card);
  cursor: pointer;

  &:last-child {
    margin-bottom: 2.5em;
  }

  .alarm__body-card-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 1.5em 0 0.3em;
    background: var($alarm);
  }
}
.alarm {
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .alarm__header {
    .alarm__header-title {
      margin: 1em 0 3.5em 1.5em;
      font-size: var(--font-size-h4);
      font-weight: bold;
      color: var(--color-blue);
    }

    .alarm__header-menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .alarm__header-menubox {
        margin-left: 4.5em;
        font-size: var(--font-size-h4);
        color: var(--color-gray);

        .menubox-all {
          margin-right: 0.5em;
          cursor: pointer;
        }
        .menubox-friend {
          margin: 0 0.5em 0 0.5em;
          cursor: pointer;
        }

        .menubox-schedule {
          margin-left: 0.5em;
          cursor: pointer;
        }
        .clicked {
          color: var(--color-blue);
          cursor: pointer;
        }
      }

      .menubox-read-all {
        margin-right: 3em;
        font-size: var(--font-size-h4);
        color: var(--color-blue);
        text-decoration: underline;
        text-underline-position: under;
        cursor: pointer;
      }
    }
  }
  .alarm__body {
    display: flex;
    flex-direction: column;
    margin: 2em 3.6em 0 5.6em;
    justify-content: center;

    .alarm__body-date {
      position: relative;
      bottom: 1em;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      background: var(--color-blue);
      color: var(--color-white);
      border-radius: 10px;
      width: 150px;
      height: 30px;
    }

    .alarm__body-card-box {
      @include schedule-card(--color-light-blue, --color-blue);
    }

    .alarm__body-card-box-clicked {
      @include schedule-card(--color-light-gray, --color-gray);
    }
    .alarm__body-card-porifle {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 2.5em;
    }

    .alarm__body-card-content {
      .card-content-announce {
        font-weight: bold;
        margin-top: 1.5em;

        span {
          font-weight: normal;
          color: var(--color-gray);
        }
      }
    }
  }

  .alarm__footer {
    padding: 0 0 2em 0;
  }
}
</style>
