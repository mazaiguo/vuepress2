<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import { ref } from 'vue'
let isCollapse = ref(false)
function toggleCollapse() {
    isCollapse.value = !isCollapse.value
    const html = document.documentElement;
    //修改属性值，使得样式生效
    html.style.setProperty('--sidebar-width', isCollapse.value? "0" : "20rem");
}
defineSlots<{
    'top'?: (props: Record<never, never>) => any
    'bottom'?: (props: Record<never, never>) => any
    'content-top'?: (props: Record<never, never>) => any
    'content-bottom'?: (props: Record<never, never>) => any
}>()
</script>

<template>
    <main
        class="page"
        :class="{ fold: isCollapse ? true : false }"
    >
        <el-icon
            :size="25"
            @click="toggleCollapse"
            v-if="isCollapse"
        >
            <Fold />
        </el-icon>
        <el-icon
            :size="25"
            @click="toggleCollapse"
            v-else
        >
            <Expand />
        </el-icon>
        <slot name="top" />

        <div class="theme-default-content">
            <slot name="content-top" />

            <Content />

            <slot name="content-bottom" />
        </div>

        <PageMeta />

        <PageNav />

    <slot name="bottom" />
    <!-- <PageFooter /> -->
    <!-- <template #page-bottom> -->
    <div class="my-footer">MIT Licensed | Copyright © 2018-present <a
            target="_blank"
            href="https://github.com/mazaiguo/vuepress2"
        >JerryMa</a></div>
    <!-- </template>    -->
</main></template>

<style scoped lang="scss">
    .page{
        &.fold {
            padding-left: 0;
        }
    }
</style>