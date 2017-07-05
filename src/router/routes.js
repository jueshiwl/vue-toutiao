// 引用模板
import index from '../views/index/index.vue'
import content from '../views/index/content.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  }
]
