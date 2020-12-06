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
        <div class="cell-content">
        <template v-if="history.some(date => date.ymd === dateToYYYYMMDD(props.day.date))">
          <div
          class="cell-content-line"
          v-for="content in getContentFromKey(dateToYYYYMMDD(props.day.date))"
          v-bind:key="content">
            ・{{content}}
          </div>
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
      // dateList: [
      //   {ymd: '20201201', contents: ['髪を切る','面談','靴を買う']},
      //   {ymd: '20201204', contents: ['結婚式']},
      //   {ymd: '20201209', contents: ['妹の誕生日']},
      //   {ymd: '20201224', contents: ['海に行く！', '野球の練習']}
      // ]
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
      return target.contents
    }
  }
}
</script>

<style>
.cell-content {
  text-align:left;
  width: 70px;
  height: 50px;
  font-size: 50%;
  /* border: 1px solid #efefef; */
}
.cell-content-line {
  border-bottom: 1px solid #efefef;
}
</style>
