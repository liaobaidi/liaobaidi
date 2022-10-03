<template>
  <div class="container flex-col justify-ard items-center">
    <div class="qrcode flex-col items-center">
      <van-image :src="wx" alt="" fit="contain" />
      <span>微信</span>
    </div>
    <div class="qrcode flex-col items-center">
      <van-image :src="qq" alt="" fit="contain" />
      <span>QQ</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import wx from '/@/assets/images/wx.jpg'
import qq from '/@/assets/images/qq.jpg'
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  .qrcode {
    width: 40rem;
    height: 40rem;
    font-size: 5.3333rem;
    line-height: 2;
    opacity: .8;
  }
}
</style>
