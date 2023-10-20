<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

import { ref } from 'vue'
let isCollapse = ref(false)
function toggleCollapse() {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">MIT Licensed | Copyright © 2018-present <a target="_blank" href="https://github.com/mazaiguo/vuepress2">JerryMa</a></div>
    </template>
    <template #page-top>
      <div class="my-page-to">
        <div class="toggleCollapse">
            <el-icon :size="25" @click="toggleCollapse" v-if="isCollapse">
              <Fold />
            </el-icon>
            <el-icon :size="25" @click="toggleCollapse" v-else>
              <Expand />
            </el-icon>
          </div></div>
    </template>
    //折叠侧边栏
    <template #sidebar v-if="isCollapse">
      <sider-bar />
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>