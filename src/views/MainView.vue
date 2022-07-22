<template lang="">
  <div>
    <MainHeader />
    <MainSidebar />
    <MainFotter />
  </div>
</template>
<script>
import MainHeader from '@/components/common/MainHeader.vue';
import MainSidebar from '@/components/common/MainSidebar.vue';
import MainFotter from '@/components/common/MainFotter.vue';
export default {
  name: 'MainView',
  components: { MainHeader, MainSidebar, MainFotter },
};
</script>
<style lang=""></style>
