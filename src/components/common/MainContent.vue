<template>
  <section class="content">
    <article>
      <router-view></router-view>
    </article>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  min-height: calc(100vh - 115px);
  width: 78.5%;
  max-width: 1500px;
  background: var(--color-white);
  overflow-y: hidden;

  article {
    background: none;
  }
}
</style>
