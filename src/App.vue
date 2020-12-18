<template>
  <div id="app">
    <h1>拉勾教育</h1>
    <!-- 根路由出口 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 1,
      b: 2,
      c: [],
      d: {
        a: 1,
        b: '2'
      }
    }
  },
  methods: {
    test () {
      // this.a.abc()
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
