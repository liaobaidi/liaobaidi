<template>
  <div class="container flex-col justify-center items-center">
    <van-image class="avater" :src="avater" round />
    <div class="name">廖柏迪</div>
    <p class="dec flex">{{ description }}</p>
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
  font-size: 6.4rem;
  .avater {
    width: 32rem;
    height: 32rem;
  }
  .name {
    color: #222;
    margin: 8rem 0 5.3333rem;
  }
  .dec {
    padding: 0 10.6667rem;
    font-size: 4.8rem;
    text-align: center;
  }
}
</style>
