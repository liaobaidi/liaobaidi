<template>
  <div class="container flex-col justify-center items-center">
    <el-avatar :size="120" :src="avater" />
    <div class="name">廖柏迪</div>
    <div class="dec">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
import avater from '/@/assets/images/myown.jpg'
import { onMounted, ref } from 'vue'
let description = ref('')
const str = '一个好学且充满激情的Web开发工程师，目前居住在广州'
onMounted(() => {
  typing(str.split(''))
})

function typing(arr: string[]) {
  if (arr.length === 0) return
  setTimeout(() => {
    requestAnimationFrame(() => {
      description.value += arr[0]
      typing(arr.slice(1))
    })
  }, 150)
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  color: #222;
  font-size: 1.5625rem;
  .name {
    margin: 1.9531rem 0 1.3021rem;
  }
  .dec {
    font-size: 1.3021rem;
  }
}
</style>
