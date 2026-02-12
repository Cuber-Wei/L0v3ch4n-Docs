<template>
  <div class="landing-bg">
    <div
      class="landing-bg-inner"
      :style="{
        backgroundImage: `url(/images/homeBackground.png)`,
        zIndex: 1,
      }"
    />
  </div>
</template>

<style scoped>
.landing-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.landing-bg-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;
}
</style>
