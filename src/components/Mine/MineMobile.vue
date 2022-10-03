<template>
  <div class="container">
    <div class="user-info">
      <div class="tr flex" v-for="(item, index) in info" :key="index">
        <div class="label flex1">{{ item.label }}</div>
        <a v-if="item.link" :href="item.link" class="value flex2">{{ item.value }}</a>
        <div v-else class="value flex2">{{ item.value }}</div>
      </div>
    </div>
    <div class="abilities" data-scroll="true">
      <div v-for="(item, index) in abilities" :key="index" :class="index > 0 ? 'mt20' : ''">
        <div :class="['title', index > 0 ? 'mt20' : '']">{{ item.title }}</div>
        <ul>
          <li v-for="(it, i) in item.list" :key="i">
            {{ it }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const abilities = reactive([
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
  },
  {
    title: '项目工具',
    list: [
      '掌握 Git 版本控制工具的基本使用，使用过 SourceTree 管理项目',
      '会使用 npm、yarn、pnpm 等管理项目所依赖的各种功能包',
      '能够基于 Webpack、Vite 进行项目开发'
    ]
  }
])

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
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  padding: 5.3333rem;
  .user-info {
    width: 89.3333rem;
    border-radius: 2.6667rem;
    background: rgba(#fff, 0.6);
    padding: 2.6667rem;
    box-sizing: border-box;
    font-size: 4.8rem;
    line-height: 1.6;
    .label,
    .value {
      text-align: center;
      background-color: #f5f7fa;
      padding: 1.3333rem;
    }
    .value {
      background-color: #ffffff;
    }
  }
  .abilities {
    overflow-y: auto;
    width: 89.3333rem;
    max-height: 96rem;
    background: rgba(#fff, 0.6);
    border-radius: 2.6667rem;
    margin-top: 2.6667rem;
    padding: 2.6667rem;
    box-sizing: border-box;
    font-size: 4.8rem;
    line-height: 1.6;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: 0;
    -ms-overflow-style: none;
    .title {
      font-size: 5.3333rem;
      font-weight: 700;
      &.mt20 {
        margin-top: 5.3333rem;
      }
    }
    li {
      &::marker {
        content: '🌙';
        display: block;
        color: #222;
      }
    }
  }
}
li {
  list-style: inside;
}
</style>
