<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
:root {
  --font-size-h1: 32px;
  --font-size-h2: 28px;
  --font-size-h3: 24px;
  --font-size-h4: 20px;
  --font-size-h5: 16px;
  --font-size-h6: 12px;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-red: #e92c2d;
  --color-light-red: #ffebeb;
  --color-carrot: #d65744;
  --color-light-carrot: #f3cdc8;
  --color-blue: #0066ec;
  --color-light-blue: #c3d8ec;
  --color-dark-gray: #585757;
  --color-gray: #969696;
  --color-light-gray: #f2f2f2;
  --color-green: #04ba33;
  --color-light-green: #e5f8eb;
  --color-orange: #ff9f2d;
  --color-light-orange: #fff5e8;
}

* {
  padding: 0;
  margin: 0;
  background: var(--color-light-gray);
}

.div {
  background: var(--color-black);
}
</style>
