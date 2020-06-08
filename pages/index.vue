<template>
  <div class="container">
    <h5>这是index.vue</h5>
    <!-- 导航链接 -->
    <div>
      <nuxt-link to="/users">用户列表</nuxt-link>
      <button @click="$router.push('/users/detail')">用户详情</button>
      <button @click="$router.push({name: 'users-detail', query: { id: 1 }})">用户详情</button>
      <button @click="$router.push({name: 'users-id', params: { id: 1 }})">id用户详情</button>
    </div>
    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  padding: 5px 10px;
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
