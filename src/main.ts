import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/router/index'
import '/@/style/index.scss'
import '/@/style/common.scss'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css'
import '/@/assets/js/flexible.min.js'
import '/@/style/iconfont.scss'
import MvFullPage from 'mv-full-page'
import '../node_modules/mv-full-page/dist-lib/style.css' // 用相对路径引用css 兼容webpack和vite

const app = createApp(App)

app.use(router)
app.use(MvFullPage)
app.mount('#app')
