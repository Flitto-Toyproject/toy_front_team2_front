<template>
  <ul class="schedule">
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
</template>
<script>
export default {
  props: {
    schedules: Object,
    getParticipant: Function,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss">
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
</style>
