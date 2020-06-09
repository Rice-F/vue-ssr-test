<template>
  <div>
    用户详情id：{{$route.query.id}}
  </div>
</template>

<script>
  export default {
    async asyncData (query, error) {
      if(query.id) {
        return { user: { name: 'asher' } }
      }
      error({statusCode: 400, message: '请传递用户id'})
    }
  }
</script>

<style lang="scss" scoped>

</style>