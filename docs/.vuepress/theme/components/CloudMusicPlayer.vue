<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '音乐播放器'
  },
  id: {
    type: String,
    default: '2155422573'
  },
  auto: {
    type: String,
    default: 0,
  }
})

const getSrc = () => {
  return `//music.163.com/outchain/player?type=2&id=${props.id}&auto=${props.auto}&height=66`
}

</script>
<template>
  <div id="cloud-music-player">
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 :src="getSrc()" class="inner-player"/>
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
}
</style>
