<template>
  <div id="app">
    <h1>拉勾教育</h1>
    <!-- <p>{{a}}</p>
    <button @click="test">测试</button> -->
    <!-- 根路由出口 -->
    <router-view/>
  </div>
</template>
<script>
function testable (target) {
  target.isTestable = true
}
@testable
class MyTestableClass {

}
console.log(MyTestableClass.isTestable)
</script>

<!--<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  a = 1
  b = 2
  test () {
    console.log(this.a)
    // this.b.toString()
  }
}
</script>-->
<!--<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 1,
      b: '2'
    }
  },
  methods: {
    test () {
      this.a.abc()
    }
  }
})
</script>
-->

<style lang="scss" scoped>
</style>
