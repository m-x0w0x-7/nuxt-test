<template>
  <ul>
    <li v-for="list in lists" :key="list.id" :bind="list">
      <a :href="list.link" :class="{current: list.current}">{{ list.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    lists: Object
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    width: calc(100% / 3);
    border: 1px solid #ccc;
  }
  a {
    display: block;
    padding: 20px;
    text-align: center;
  }
  a:hover {
    background: #00f;
    color: #fff;
  }
  a.current {
    background: #f00;
    color: #fff;
  }
</style>
