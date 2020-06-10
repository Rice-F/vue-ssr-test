<template>
  <div>
    <p>用户id：{{$route.params.id}}</p>
    <p>接口返回用户名：{{user.name}}</p>
  </div>
</template>

<script>
  export default {
    // 对象解构 从参数中解构出params axios
    async asyncData ({ params, $axios }) {
      const data = await $axios.$get(`/api/users/${params.id}`)
      // 异步函数返回的数据是已处理过的，也就是直接返回的是response.data中的数据
      if(data.ok) {
        return {user: data.user}
      }
      error({statusCode: 400, message: 'id有误，查询失败'})
    }
  }
</script>

<style lang="scss" scoped>

</style>