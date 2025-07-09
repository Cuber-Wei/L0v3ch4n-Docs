<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "音乐播放器",
  },
  id: {
    type: String,
    default: "2155422573",
  },
  auto: {
    type: String,
    default: 0,
  },
});

const getSrc = () => {
  return `https://music.163.com/outchain/player?type=2&id=${props.id}&auto=${props.auto}&height=66`;
};
const is_mobile = ref(false);
onMounted(() => {
  isMobile();
});
const isMobile = () => {
  is_mobile.value =
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ) !== null;
};
</script>
<template>
  <div id="cloud-music-player" v-if="!is_mobile">
    <iframe
      :src="getSrc()"
      class="inner-player"
      border="0"
      frameborder="no"
      width="330"
      height="86"
      marginheight="0"
      marginwidth="0"
    />
  </div>
</template>

<style scoped>
#cloud-music-player {
  min-width: 100%;
  margin: 16px auto;
  text-align: center;
}

#cloud-music-player .inner-player {
  width: 50%;
  margin: 0 auto;
  border-radius: 0.5rem;
}
</style>
