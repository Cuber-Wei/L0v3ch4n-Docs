<template>
  <div class="landing-bg">
    <div
      class="landing-bg-inner"
      :class="{ active: 1 }"
      :style="{ backgroundImage: `url(/images/homeBackground.png)`, zIndex: 1 }"
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
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.landing-bg-inner.active {
  opacity: 1;
}

.landing-bg-inner.animation {
  transform: scale(1);
  animation: landing-bg-ani 12s ease-in-out;
}

@keyframes landing-bg-ani {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}
</style>
