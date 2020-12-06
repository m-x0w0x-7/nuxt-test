<template>
  <div class="wrap">
    <div class="test">
      <tab-list :lists="lists" />
    </div>
  </div>
</template>

<script>
import TabList from '~/components/TabList.vue'

export default {
  components: { TabList },
  data() {
    return {
      lists: [
        { id: 1, name: 'test1', link: '#', current: false},
        { id: 2, name: 'test2', link: '#', current: true},
        { id: 3, name: 'test3', link: '#', current: false}
      ]
    }
  }
}
</script>

<style>
.bg1 {
  width: 50px;
  height: 50px;
  background: url(~@/assets/img/1.png) no-repeat center center /cover;
}
.bg2 {
  width: 50px;
  height: 50px;
  background: url(~static/img/2.png) no-repeat center center /cover;
}
</style>
