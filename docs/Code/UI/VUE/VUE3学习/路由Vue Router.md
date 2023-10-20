# 路由Vue Router

## 入门

* main.js中填写如下代码

```vue
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const routes = [
  { path: '/home', component:()=> import('./components/Home.vue')},
  { path: '/about', component:()=> import('./components/about.vue')},
]

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！
```

* App.vue在`template`中填写router-view

  <router-view></router-view> 用这个数据留空

* 添加components/Home.vue和components/about.vue

## 参数传递

### 数据传递useRouter()

### 数据提取useRoute()

```vue
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
```

* about.vue

```vue
<template>
    <div>
        About Page
        <button @click="testClick">点击跳转</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
function testClick() {
    // 跳转
    router.push({
        path: '/home',
        query: {
            name: '张三',
            id: 1
        }
    })
}
</script>
```

* home.vue

```vue
<template>
    <div>
        HomePage{{ info }}
        <router-link to="/about" @click="testClick">About</router-link>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const info = reactive({
    id:route.query.id,
    name:route.query.name,
})
function testClick(){
    router.push({
        path:'/about',
        query:{id:123,name:'zhangsan'}
    })
}
</script>
```

* `<router-link to="/about" @click="testClick">About</router-link>`可以直接做调整链接

### 二级路由

```vue
const routes = [
  {
    path: '/user/:id',
    name: 'user-parent',
    component: User,
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```

```vue
const routes = [
    { path: '/home', component: () => import('./components/Home.vue') },
    { path: '/about', component: () => import('./components/about.vue') },
    {
        path: '/main', component: () => import('./components/main.vue'), children: [
            { path: '/main/main1', component: () => import('./components/main1.vue') },
            { path: '/main/main2', component: () => import('./components/main2.vue') }
        ]
    }
]
```



```vue
<template>
    <div>
        <button @click="testClick">绘制button</button>
    </div>
    <router-view></router-view>
</template>
```

```vue
<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

function testClick() {
    console.log('testClick')
    router.push({
        path: '/ui/button'
    })
    console.log(router)
}
</script>
```

