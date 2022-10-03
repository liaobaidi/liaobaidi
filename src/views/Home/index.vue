<template>
  <div>
    <mv-full-page ref="fullPage" :pages="pages" v-model:page="page" :config="config">
      <template #page1>
        <div>
          <UserMobile v-if="isMobile" />
          <User v-else />
        </div>
      </template>
      <template #page2>
        <div>
          <MyInfoMobile v-if="isMobile" :page="page" />
          <MyInfo v-else :page="page" />
        </div>
      </template>
      <template #page3>
        <div>
          <MineMobile v-if="isMobile" :page="page" />
          <Mine v-else :page="page" />
        </div>
      </template>
      <template #page4>
        <div>
          <ContactMobile v-if="isMobile" />
          <Contact v-else />
        </div>
      </template>
    </mv-full-page>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { reactive, ref } from 'vue'
import User from '/@/components/User/User.vue'
import UserMobile from '/@/components/User/UserMobile.vue'
import MyInfo from '/@/components/MyInfo/MyInfo.vue'
import MyInfoMobile from '/@/components/MyInfo/MyInfoMobile.vue'
import Mine from '/@/components/Mine/Mine.vue'
import Contact from '/@/components/Contact/Contact.vue'
import MineMobile from '/@/components/Mine/MineMobile.vue'
import ContactMobile from '/@/components/Contact/ContactMobile.vue'
let page = ref(1)
let pages = ref(4)
let fullPage = ref()

const isMobile = computed(() => {
  const m =
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  let flag = m.test(navigator.userAgent)
  return flag
})

const config = reactive({
  disabled: false,
  position: 'fixed',
  width: '100%',
  height: '100%',
  direction: 'v', // v => 垂直方向 ， h => 水平方向
  poi: {
    pointer: !isMobile.value, // 显示指示器
    position: 'right' // 指示器位置
  },
  cache: true, // 缓存页面
  bgArr: [
    { image: './images/theme.jpg' },
    { image: './images/info.png' },
    { image: './images/mine.jpg' },
    { image: './images/contact.jpg' }
  ], // 页面背景数组
  bgConfig: {
    // 背景图片属性配置
    fit: 'cover'
  },
  transition: {
    // 自定义过渡动画
    duration: '1000ms', // 动画时长
    timingFun: 'ease', // 动画速度曲线
    delay: '0s' // 动画延迟
  },
  loop: false, //  循环播放
  arrow: {
    // 上一页箭头
    last: isMobile.value,
    // 下一页箭头
    next: isMobile.value
  },
  // 自动播放
  autoPlay: {
    play: false,
    // 切换间隔
    interval: 1000
  }
})

function goNext() {
  fullPage.value.goPage(page.value + 1)
  console.log(fullPage.value)
}
</script>

<style scoped lang="scss">
.next {
  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 13.3333rem;
  height: 5.3333rem;
  color: #fff;
  animation: wink 2s ease infinite;
}
@keyframes wink {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
:deep(.last-arrow),
:deep(.next-arrow) {
  font-size: 5.3333rem;
}
:deep(.mv-pointer-wrapper ul>li) {
  width: .651rem;
  height: .651rem;
  border-radius: .3255rem;
  background-color: #b8d3f1;
  &.active {
    height: .651rem;
    background-color: #4b99ed;
  }
}
</style>
