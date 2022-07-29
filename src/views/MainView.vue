<template lang="">
  <div class="body">
    <MainHeader />
    <MainSidebar />
    <MainContent />
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
