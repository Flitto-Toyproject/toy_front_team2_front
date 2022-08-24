<template>
  <section class="friend">
    <article class="friend-header">
      <div class="friend-header__title"># 사용자 목록</div>
      <SearchBox />
    </article>
    <article class="friend-main">
      <FriendCard :key="i" v-for="(card, i) in cards" :card="card" />
    </article>
    <article class="friend-footer">
      <PaginationItem />
    </article>
  </section>
</template>
<script>
import { SearchBox, FriendCard, PaginationItem } from '@/components/friend'

export default {
  components: {
    SearchBox,
    FriendCard,
    PaginationItem,
  },
  data() {
    return {
      cards: [
        {
          username: '김소현',
          email: 'sohyeon.kim@flitto.com',
          img_url:
            'https://img.sbs.co.kr/newsnet/etv/upload/2019/03/06/30000624143_700.jpg',
        },
        {
          username: '이필웅',
          email: 'pilung.lee@flitto.com',
          img_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbQxv7DLhjZR44dI2rlayDu7DcvsQttSZ_Q&usqp=CAU',
        },
        {
          username: '윤성철',
          email: 'seongcheol.yun@flitto.com',
          img_url:
            'https://archeage.xlgames.com/board/attachments/8a948b867a8398aa017aa54359ab005c',
        },
        {
          username: '송승민',
          email: 'seongcheol.yun@flitto.com',
          img_url:
            'https://archeage.xlgames.com/board/attachments/8a948b867a8398aa017aa54359ab005c',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.friend {
  height: calc(100vh - 115px);
  overflow-y: auto;
  padding: 1rem;

  &-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
    margin-bottom: 1rem;
  }

  &-header__title {
    color: var(--color-blue);
    font-weight: bold;
    font-size: var(--font-size-h4);
  }

  &-main {
    margin-bottom: 1rem;
  }

  &-footer {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.friend::-webkit-scrollbar {
  width: 7px;
}

.friend::-webkit-scrollbar-thumb {
  background-color: var(--color-semi-gray);
  border-radius: 10px;
}
</style>
