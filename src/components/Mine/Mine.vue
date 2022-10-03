<template>
  <div class="container flex">
    <Transition name="fade-in">
      <div v-if="page === 3" class="ability-wrap">
        <div class="ability flex">
          <div class="part-1">
            <div v-for="(item, index) in abilities.part1" :key="index" :class="index > 0 ? 'mt20' : ''">
              <div class="title">{{ item.title }}</div>
              <ul>
                <li v-for="(it, i) in item.list" :key="i">
                  {{ it }}
                </li>
              </ul>
            </div>
          </div>
          <div class="part-2">
            <div v-for="(item, index) in abilities.part2" :key="index" :class="index > 0 ? 'mt20' : ''">
              <div class="title">{{ item.title }}</div>
              <ul>
                <li v-for="(it, i) in item.list" :key="i">
                  {{ it }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="canvasVideo">
          <video id="video" class="video" width="450" height="250" autoplay muted loop src="../../assets/video/video.mp4"></video>
          <canvas id="cvs"></canvas>
        </div>
      </div>
    </Transition>
    <Transition name="slide-in">
      <div v-if="page === 3" class="personal-wrap flex1 flex-col justify-bet">
        <div id="chart" class="flex1"></div>
        <div class="personal">
          <div class="personal-info">
            <el-descriptions :column="1" border size="large">
              <el-descriptions-item v-for="(item, index) in info" :key="index">
                <template #label>
                  <div class="cell-item">{{ item.label }}</div>
                </template>
                <a v-if="item.link" :href="item.link" target="_blank">{{ item.value }}</a>
                <span v-else>{{ item.value }}</span>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, toRefs, onMounted, nextTick, watchEffect } from 'vue'
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption
const props = defineProps({
  page: {
    type: [String, Number],
    default: 1
  }
})
const { page } = toRefs(props)

const abilities = reactive({
  part1: [
    {
      title: '插件/库/框架',
      list: [
        '掌握使用主流框架 Vue.js，能熟练使用 Vue 全家桶开发项目',
        '熟练使用 Vant，Element-ui 等组件库，并能使用其快速封装组件',
        '使用过数据可视化框架，如使用 Echarts 制作可视化图表',
        '了解 Node.js，能基于 Express 框架搭建基本的 http 服务程序',
        '了解 Canvas',
        '了解微信小程序，参与过 uni-app 项目开发',
        '了解 React、JSX、TypeScript 等技术'
      ]
    },
    {
      title: '项目工具',
      list: [
        '掌握 Git 版本控制工具的基本使用，使用过 SourceTree 管理项目',
        '会使用 npm、yarn、pnpm 等管理项目所依赖的各种功能包',
        '能够基于 Webpack、Vite 进行项目开发'
      ]
    }
  ],
  part2: [
    {
      title: 'JavaScript',
      list: [
        '掌握原生 JavaScript 操作 DOM，BOM 元素',
        '熟练的使用 Ajax/Axios 和后台进行接口对接',
        '熟悉 ES6 新特性，能够基于 ES6 新特性进行项目开发',
        '对 JavaScript 中面向对象、原型与原型链、闭包、正则表达式等知识有一定的掌握与了解'
      ]
    },
    {
      title: 'HTML / CSS',
      list: [
        '掌握 DIV + CSS 布局，准确还原设计图',
        '掌握 HTML5 / CSS3 新特性，并能使用其进行页面特效的实现',
        '熟悉 vw/vh 布局、百分比布局、rem 布局、响应式布局与 Less/Sass 预编译适配各种手机和移动端浏览器'
      ]
    }
  ]
})

const info = reactive([
  {
    label: '姓名',
    value: '廖柏迪'
  },
  {
    label: '年龄',
    value: 20
  },
  {
    label: '地址',
    value: '广东省广州市'
  },
  {
    label: '邮箱',
    value: 'liao_web@163.com'
  },
  {
    label: 'Github',
    value: 'liaobaidi',
    link: 'https://github.com/liaobaidi'
  },
  {
    label: 'Gitee',
    value: 'liaobaidi',
    link: 'https://gitee.com/liaobaidi'
  }
])

watchEffect(() => {
  if (page.value != 3) return
  nextTick(() => {
    init()
    canvasImage()
  })
})

function init() {
  const chart = document.getElementById('chart')!
  const myChart = echarts.init(chart)
  option && myChart.setOption(option)
}

const option: EChartsOption = reactive({
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [25, 125],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 90, name: 'Vue' },
        { value: 20, name: 'Ajax' },
        { value: 40, name: 'Nodejs' },
        { value: 80, name: 'Axios' },
        { value: 70, name: 'ElementUI' },
        { value: 70, name: 'Vant' },
        { value: 60, name: 'AntDesignVue' },
        { value: 80, name: 'JavaScript' },
        { value: 50, name: 'HTML' }
      ]
    }
  ]
})

function canvasImage() {
  const video = document.getElementById('video')! as HTMLVideoElement
  const cvs = document.getElementById('cvs')! as HTMLCanvasElement
  const cvs2 = document.createElement('canvas')
  const ctx = cvs.getContext('2d')!
  const ctx2 = cvs2.getContext('2d')!

  video.oncanplay = play

  function play() {
    cvs.width = cvs2.width = video.offsetWidth
    cvs.height = cvs2.height = video.offsetHeight
    const playVideo = () => {
      requestAnimationFrame(playVideo)
      const { width, height } = video
      ctx2.drawImage(video, 0, 0, width, height)
      const data = ctx2.getImageData(0, 0, width, height).data!
      const blur: number = 8
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < data?.length; i += 4 * blur) {
        const x = parseInt(((i + 1) % (width * 4)) / 4 + '')
        const y = parseInt(i / (width * 4) + '')
        if (x % blur === 0 && y % blur === 0) {
          const g: number = parseInt((data[i] + data[i + 1] + data[i + 2]) / 3 + '')
          ctx.font = '10px serif'
          ctx.fillStyle = `rgba(${g}, ${g}, ${g}, ${data[i + 3] / 255})`
          ctx.fillText('0', x, y)
        }
      }
    }
    playVideo()
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 1.3021rem;
  .ability-wrap {
    flex: 2;
  }
  .canvasVideo {
    margin-top: 0.651rem;
    .video {
      width: 29.2969rem;
      height: 16.276rem;
    }
  }
  .ability {
    // width: 100%;
    max-height: 26.0417rem;
    background: rgba(#fff, 0.6);
    border-radius: 0.651rem;
    padding: 1.3021rem;
    margin-right: 1.3021rem;
    .part-1,
    .part-2 {
      flex: 1;
      line-height: 2;
      .title {
        font-weight: 700;
        font-size: 1.1719rem;
      }
      li {
        &::marker {
          content: '⭐';
          display: block;
          color: #222;
        }
      }
    }
  }
  .personal-wrap {
    height: 43.3594rem;
  }
  #chart {
    width: 100%;
  }
  .personal {
    background: rgba(#fff, 0.6);
    border-radius: 0.651rem;
    padding: 1.3021rem;
    box-sizing: border-box;
  }
}
li {
  list-style: inside;
}
.mt20 {
  margin-top: 1.3021rem;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
.fade-in-enter-to,
.fade-in-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-in-enter-active,
.fade-in-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.6s ease-in 0.6s;
}
.slide-in-enter-from,
.slide-in-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
.slide-in-enter-to,
.slide-in-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
