import { createApp } from 'vue'
import App from './App.vue'
import '@/utils/request.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register' // svg插件需要的配置代码
import '@/styles/index.scss' //引入模板的全局样式

const app = createApp(App)
console.log(import.meta.env)

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index.ts'

// 安装自定义插件
app.use(globalComponent)

app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
