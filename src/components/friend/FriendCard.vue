<template>
  <article class="friend-main__card">
    <div class="friend-main__card-profile">
      <img
        class="friend-main__card-profile-img"
        :src="card.img_url"
        @error="imgError"
        :alt="card.username"
      />
    </div>
    <div class="friend-main__card-info">
      <p class="friend-main__card-info-name">{{ card.username }}</p>
      <p class="friend-main__card-info-email">{{ card.email }}</p>
    </div>
    <button class="friend-main__card-btn">Follow</button>
  </article>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
  methods: {
    imgError(e) {
      e.target.src = require('@/assets/img_flitto.png')
    },
  },
}
</script>
<style lang="scss" scoped>
.friend-main__card {
  width: 160px;
  height: 251px;
  border-radius: 10;
}

.friend-main__card-profile {
  position: relative;
  aspect-ratio: 1/1;
}

.friend-main__card-profile-img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
}

.friend-main__card-info {
}

.friend-main__card-info-name {
}

.friend-main__card-info-email {
}

.friend-main__card-btn {
}
</style>
