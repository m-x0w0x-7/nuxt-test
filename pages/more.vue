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
    <button
      v-if="(ListItems.length - count) >= 0"
      class="st-motto st-button medium-button blue"
      type="button"
      @click="isMore"
    >
      もっとみる
    </button>
  </div>
</template>

<script>
import history from '~/data/history.json'

export default {
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
    isMore() {
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
