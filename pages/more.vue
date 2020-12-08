<template>
  <div>
    <ul>
      <li
        v-for="item in ListItems"
        :key="item.id"
      >
        <span class="ymd">{{ item.ymd }}</span>
        <span class="morning">{{ item.morning }}</span>
        <span class="noon">{{ item.noon }}</span>
        <span class="evening">{{ item.evening }}</span>
      </li>
    </ul>
    <Button @is-more-parent="isMoreParent" />
  </div>
</template>

<script>
import history from '~/data/history.json'
import Button from '~/components/Button.vue'

export default {
  components: { Button },
  data () {
    return {
      history: history,
      count: 4
    }
  },
  computed: {
    ListItems() {
      const list = this.history
      return list.slice(0, this.count)
    }
  },
  methods: {
    isMoreParent() {
      this.count += 4
    }
  }
}
</script>

<style scoped>
.ymd {
  font-weight: bold;
}
.morning {
  color: #f00;
}
.noon {
  color: #0ff;
}
.evening {
  color: #00f;
}
</style>
