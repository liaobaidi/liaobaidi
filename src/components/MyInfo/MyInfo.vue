<template>
  <div class="container pr">
    <Transition name="fade-left">
      <div v-if="page === 2" class="info pa" data-scroll="true">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in works"
            :key="index"
            :timestamp="item.time"
            :hollow="index > 0"
            type="primary"
            placement="top"
          >
            <el-card>
              <template #header>
                <div class="card-header">
                  <h3>{{ item.name }}</h3>
                </div>
              </template>
              <p class="card-info">部门：{{ item.department }}</p>
              <p class="card-info">职务：{{ item.job }}</p>
              <p class="card-info">描述：{{ item.description }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </Transition>
    <Transition name="fade-right">
      <div v-if="page === 2" class="school pa" data-scroll="true">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in school"
            :key="index"
            :timestamp="item.time"
            :hollow="index > 0"
            type="primary"
            placement="top"
          >
            <el-card>
              <h4 class="card-info">{{ item.name }}</h4>
              <p v-if="item.department" class="card-info">单位：{{ item.department }}</p>
              <p v-if="item.description" class="card-info">描述：{{ item.description }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, toRefs } from 'vue'
import { Work } from '/@/types'
const props = defineProps({
  page: {
    type: [String, Number],
    default: 1
  }
})
const { page } = toRefs(props)
const works: Work[] = reactive([
  {
    time: '2022-8-15 ~ 今',
    name: '缪斯科技(广州)有限公司',
    department: '数字化研发部',
    job: '前端开发实习生',
    description:
      '参与主商城项目的迭代开发，包括：图片上传、第三方登录以及新活动落地页等业务；独立开发商城管理后台，包括：库存管理、订单管理、优惠券管理以及数据可视化等业务'
  },
  {
    time: '2022-3-24 ~ 2022-6-10',
    name: '广州卓浦士科技责任有限公司',
    department: '技术部',
    job: '前端开发实习生',
    description:
      '参与智慧体育项目的开发，主要任务是封装可视化看板组件以及基本业务逻辑实现。对Echarts组件进行二次封装，使其变成可复用的vue组件'
  },
  {
    time: '2021-7-15 ~ 2021-8-10',
    name: '广东省泰迪科技股份有限公司',
    department: '大数据事业部',
    job: '数据分析实习生',
    description: '爬取豆瓣网短评数据并分析，最后做成PPT汇报'
  }
])
const school: Partial<Work>[] = reactive([
  {
    time: '2021-10',
    name: '全国大学数学建模竞赛省二等奖'
  },
  {
    time: '2021-9',
    name: '广东工业大学优秀学生二等奖学金'
  },
  {
    time: '2020-9 ~ 2021-9',
    name: '秘书部长',
    department: '广东工业大学招生宣传协会',
    description:
      '根据招生办指示，开展各项招生宣传活动，包括：寒假回访母校社会实践、录取通知书设计大赛以及广工印迹；我主要负责监督活动进度、调配各部门工作以及工作人员的安排等'
  },
  {
    time: '2020-9',
    name: '广东工业大学优秀学生二等奖学金'
  },
  {
    time: '2019-9 ~ 2020-9',
    name: '秘书处干事',
    department: '广东工业大学招生宣传协会',
    description: '按照任务分配落实各项任务，主要任务是对接家长、老师以及学生，普及学校当年的招生政策'
  }
])
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  .info,
  .school {
    width: 39.0625rem;
    max-height: 33.8542rem;
    overflow-y: auto;
    background: rgba(#fff, 0.6);
    border-radius: 0.651rem;
    padding: 1.9531rem;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: 0;
    -ms-overflow-style: none;
  }
  .info {
    top: 1.3021rem;
    left: 2.6042rem;
  }
  .school {
    bottom: 1.3021rem;
    right: 2.6042rem;
  }
  .card-info {
    line-height: 2;
  }
}
.fade-left-enter-from,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-left-enter-to,
.fade-left-leave-from,
.fade-right-enter-to,
.fade-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.6s ease-in 0.6s;
}
.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
:deep(.el-timeline-item__tail) {
  border-color: #87ceeb;
}
:deep(.el-timeline-item__node.is-hollow) {
  background-color: rgb(228, 244, 248);
}
:deep(.el-timeline-item__timestamp) {
  color: #222;
  font-size: 1.0417rem;
}
</style>
