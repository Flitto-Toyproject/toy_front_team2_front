<template>
  <transition name="modal" appear>
    <section class="modal-background" @click.self="$emit('close')">
      <article class="modal-frame">
        <slot />
      </article>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.6s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.modal-background {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  align-items: center;
  z-index: 99;
  top: 0;
  left: 0;
}

.modal-frame {
  margin: auto;
  width: 410px;
  height: 430px;
  background: var(--color-white);
  border-radius: 10px;
}
</style>
