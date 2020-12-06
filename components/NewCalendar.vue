<template>
  <client-only>
    <v-calendar title-position="center">
      <template slot='header-title' slot-scope='props'>
        {{props.yearLabel}}年{{props.monthLabel}}
      </template>
      <template slot='day-content' slot-scope='props'>
        <div class="cell-header">
          {{props.day.day}}
        </div>
        <div class="use-mark-wrap">
          <template v-if="history.some(date => date.ymd === dateToYYYYMMDD(props.day.date))">
            <span class="use-mark-morning" v-if="getContentFromKey(dateToYYYYMMDD(props.day.date)).morning > 0"></span>
            <span class="use-mark-noon" v-if="getContentFromKey(dateToYYYYMMDD(props.day.date)).noon > 0"></span>
            <span class="use-mark-evening" v-if="getContentFromKey(dateToYYYYMMDD(props.day.date)).evening > 0"></span>
          </template>
        </div>
      </template>
    </v-calendar>
  </client-only>
</template>

<script>
import history from '~/data/history.json'

export default {
  data() {
    return {
      history
    }
  },
  computed: {
  },
  methods: {
     dateToYYYYMMDD: function(date) {
      let y = date.getFullYear()
      let m = ('00' + (date.getMonth()+1)).slice(-2)
      let d = ('00' + date.getDate()).slice(-2)
      let result = y + '' + m + '' + d
      return result
    },
    getContentFromKey: function(key) {
      const target = this.history.find((date) => {
        return (date.ymd === key)
      })
      return {
        morning: target.morning,
        noon: target.noon,
        evening: target.evening
      }
    }
  }
}
</script>

<style>
.cell-header {
  text-align: center;
}

.use-mark-wrap {
  display: flex;
  justify-content: center;
}

.use-mark-wrap span {
  width: 3px;
  height: 10px;
  margin: 0 2px;
}

.use-mark-morning {
  background: rgb(255, 106, 106);
}

.use-mark-noon {
  background: rgb(91, 255, 192);
}

.use-mark-evening {
  background: rgb(60, 129, 255);
}
</style>
