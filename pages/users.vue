<template>
  <div>
    <h5>用户导航</h5>
    <nuxt-child></nuxt-child>
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
  // 模拟接口请求
  function getUsers () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{name: 'asher', id: 1}, {name: 'jerry', id: 2}])
      }, 1500)
    })
  }

  export default {
    layout: 'users',
    head: {
      title: '用户'
    },
    // 在执行生命周期之前会先执行这个方法
    async asyncData () {
      // 判断当前方法在服务器还是客户端执行，返回true为服务端
      console.log(process.server)
      const users = await getUsers()
      // 这里return的数据最终会和data数据里的同名变量合并
      return {users}
    }
  }
</script>

<style lang="scss" scoped>

</style>