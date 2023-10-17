<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">MIT Licensed | Copyright © 2018-present <a target="_blank" href="https://github.com/mazaiguo/vuepress2">JerryMa</a></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>