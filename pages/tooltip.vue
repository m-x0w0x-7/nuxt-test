<template>
  <button v-tooltip="messageObj" @click="setTooltip()">clickイベント</button>
</template>

<script>
export default {
  data() {
    return {
      showTooltip: false,
      message: "クリックでメッセージ"
    }
  },
  computed: {
  	messageObj() {
    	return {
        content: this.message,
        trigger: 'manual',
        show: this.showTooltip
      }
    }
  },
  methods: {
  	setTooltip() {
    	this.showTooltip = !this.showTooltip;
    }
  }
}
</script>

<style>

</style>
