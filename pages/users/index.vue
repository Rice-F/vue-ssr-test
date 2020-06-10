<template>
  <div>
    用户列表：
    <p @click="increment">计数: {{counter}}</p>
    <p>
      <input
        type="text"
        placeholder="添加用户"
        @keyup.enter="add($event.target.value)"
      >
    </p>
    <ul>
      <li
        v-for="user in list"
        :key="user.id"
      >{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

function getUsers () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{name: 'asher', id: 1}, {name: 'allen', id: 2}])
    }, 1500)
  })
}

export default {
  // fetch方法在创建组件前调用，早于asyncData，用于填充状态树，填充vuex对应模块数据
  fetch ({store}) {
    return getUsers().then(users => store.commit('users/set', users))
  },
  computed: {
    ...mapState(['counter']),
    ...mapState('users',['list'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapMutations('users', ['add'])
  }
}
</script>

<style lang="scss" scoped>

</style>