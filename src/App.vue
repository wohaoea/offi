<!--<script setup>-->
<!--import official from './components/official.vue'-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--      <official />-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--*{-->
<!--    padding: 0;-->
<!--    margin: 0;-->
<!--}-->
<!--</style>-->
<script setup lang="ts">
</script>
<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component"  v-if="$route.meta.keepAlive" :key="$route.name"/>
        </keep-alive>
        <component :is="Component"  v-if="!$route.meta.keepAlive" :key="$route.name"/>
    </router-view>
</template>

<style scoped>
</style>
