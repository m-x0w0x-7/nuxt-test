<template>
  <button @click="isMore()">もっとみる</button>
</template>

<script>
export default {
  methods: {
    isMore() {
      this.$emit('is-more-parent')
    }
  }
}
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-radius: 4px;
  background: rgb(102, 143, 255);
  color: #fff;
}
</style>
