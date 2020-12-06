<template>
  <div class="wrap">
    <div class="calendar-title">
      <span class="btn-monthMove prev" @click="movePrevMonth">＜</span>
      {{ currentYear + "/" + currentMonth }}
      <span class="btn-moreMove next" @click="moveNextMonth">＞</span>
    </div>

    <div class="calendar-body">
      <div class="calendar-body-item">
        <div v-for="day in weeks" :key="day" class="day">{{ day }}</div>
      </div>
      <div class="calendar-body-item">
        <div v-for="day in calendarMake" :key="day" :value="day">
          <span :class="checkSelectedDay(day)">{{ day }}</span>
          <span class="morning"></span>
          <span class="noon"></span>
          <span class="evening"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabList from '~/components/TabList.vue'

export default {
  components: { TabList },
  data() {
    return {
      today: '',
      selectedDay: '',
      currentYear: 0,
      currentMonth: 0,
      weeks: ['月', '火', '水', '木', '金', '土', '日'],
      calendar: [],
      holiday: []
    }
  },
  created() {
    const date = new Date();
    [ this.currentYear, this.currentMonth, this.currentDate ] = [ date.getFullYear(), date.getMonth() + 1, date.getDate() ];
    this.today = this.selectedDay = `${this.currentYear} - ${('0' + this.currentMonth).slice(-2)} - ${this.currentDate}`;
  },
  methods: {
    checkSelectedDay(day) {
      return {
        'selectedDay':`${this.currentYear} - ${('0' + this.currentMonth).slice(-2)} - ${('0' + day).slice(-2)}` == this.selectedDay
      }
    },
    movePrevMonth(){
      this.currentMonth = this.currentMonth != 1 ? this.currentMonth - 1 : 12;
      this.currentYear = this.currentMonth != 12 ? this.currentYear : this.currentYear - 1;
    },
    moveNextMonth(){
      this.currentMonth = this.currentMonth != 12 ? this.currentMonth + 1 : 1;
      this.currentYear = this.currentMonth != 1 ? this.currentYear : this.currentYear + 1;
    }
  },
  computed:{
    calendarMake(){
      const firstday = new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
      const lastdate = new Date(this.currentYear, this.currentMonth, 0).getDate();
      const necessarySpace = firstday == 0 ? 6 : firstday - 1;
      const list = [[...Array(necessarySpace)].map(i => ''), [...Array(lastdate)].map((_, i) => i + 1)];
      const week = list.reduce((pre,current) => {pre.push(...current);return pre},[]);
      return week;
    }
  }
}
</script>

<style scoped>
.calendar-title{
  margin-bottom: 40px;
  text-align: center;
}
.calendar-body{
  width:100%;
  table-layout:fixed;
  margin-bottom: 20px;
  color: #565656;
  font-size: 1.1rem;
  text-align: center;
}
.calendar-body-item{
  display: flex;
  flex-wrap: wrap;
}
.calendar-body-item div{
  box-sizing: border-box;
  width: 14.28%;
  height: 48px;
  min-height: 48px;
  padding: 12px 0;
  text-align: center;
  cursor:pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.calendar-body-item div:nth-of-type(7n-1){
  color: #5a66a8;
}
.calendar-body-item div:nth-of-type(7n){
  color:#e29a9b;
}
.calendar-body-item div span{
  vertical-align: -4px;
  width: 100%;
}
.selectedDay{
  display:inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f00;
  color: #fff;
  line-height: 24px;
}
.calendar-body-item div.holidays{
  color: #e29a9b;
}
.morning, .noon, .evening {
  width: 3px !important;
  height: 10px;
  margin: 0 2px;
}
.morning {
  background: #f00;
}
.noon {
  background: #ff0;
}
.evening {
  background: #00f;
}
</style>
