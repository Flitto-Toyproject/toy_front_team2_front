<template lang="">
  <div class="body">
    <MainHeader class="body__header" />
    <div class="body__main">
      <MainSidebar class="body__sidebar" />
      <MainContent class="body__content" />
    </div>
  </div>
</template>
<script>
import MainHeader from '@/components/common/MainHeader.vue'
import MainSidebar from '@/components/common/MainSidebar.vue'
import MainContent from '@/components/common/MainContent.vue'
export default {
  name: 'MainView',
  components: { MainHeader, MainSidebar, MainContent },
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;

  &__main {
    display: flex;
  }

  &__header {
    height: 75px;
  }
}
</style>
