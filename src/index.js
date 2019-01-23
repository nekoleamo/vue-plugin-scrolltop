import ScrollTop from './packages/ScrollTop'
// ...如果还有的话继续添加

const components = [
  ScrollTop
  // ...如果还有的话继续添加
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ScrollTop
  // ...如果还有的话继续添加
}
