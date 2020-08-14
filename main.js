import App from './src/App.js'
import { getRootContainer } from "./src/Game";
import { createApp } from './src/runtime-canvas'

// App.vue
// 1. 创建根组件
// 2. 创建根容器
// createApp(rootComponent).mount(rootContainer)
// 初始化game
createApp(App).mount(getRootContainer())