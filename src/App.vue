<template>
  <div id="app">
    <nav class="nav">
      <li><router-link to="/ry">正在热映</router-link></li>
      <li><router-link to="/sy">即将上映</router-link></li>
      <li><router-link to="/top250">TOP250</router-link></li>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '豆瓣电影'
    }
  }
}
</script>

<style>

</style>
