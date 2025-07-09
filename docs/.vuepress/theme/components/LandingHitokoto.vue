<template>
  <div class="landing-card landing-hitokoto">
    <p data-allow-mismatch>It’s you that you wanna change to win.</p>
  </div>
</template>

<style scoped>
.landing-card.landing-hitokoto {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  font-family: "Fleur De Leah", sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  gap: 8px;
}

@media (min-width: 960px) {
  .landing-card.landing-hitokoto {
    display: flex;
    grid-column: span 2;
  }
}

@media (min-width: 1110px) {
  .landing-card.landing-hitokoto {
    grid-column: auto;
  }
}

.landing-card.landing-hitokoto>p {
  width: 100%;
}

.landing-card.landing-hitokoto .from {
  margin-top: 8px;
  text-align: right;
  font-size: 14px;
}
</style>
