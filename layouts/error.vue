<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
  export default {
    // 属性error为代码里的错误堆栈
    props: ['error']
  }
</script>

<style lang="scss" scoped>

</style>