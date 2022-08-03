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
  margin-top: 0.5rem;
  min-height: calc(100vh - 115px);
  width: 78.5%;
  max-width: 1500px;
  background: var(--color-white);

  article {
    background: none;
  }
}
</style>
