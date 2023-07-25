import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
// 导入Unocss
import 'uno.css'

createApp(App).use(router).mount("#app");