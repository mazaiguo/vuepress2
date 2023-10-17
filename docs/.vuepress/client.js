import { defineClientConfig } from '@vuepress/client'
import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
//加载elementplus
export default defineClientConfig({
  enhance({ app, router, siteData }) {

    app.use(ElementPlus)
    // icon
    for (const icon in Icons) {
      // eslint-disable-next-line import/namespace
      app.component(icon, Icons[icon])
    }

  },
  setup() {},
  rootComponents: [],
})


