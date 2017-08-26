<template>
    <div>
        <div>ข้อสอบวิชา ภาษาไทย</div>
        <div>ข้อที่ 1</div>
        <h3>คำถามง่ายๆ เลือกตอบข้อ ก.ไก่</h3>
        <div @click="answer(1)">ก.คำตอบถุก</div>
        <div @click="answer(2)">ข.คำตอบผิด</div>
        <div @click="answer(3)">ค.คำตอบผิด</div>
        <div @click="answer(4)">ง.คำตอบผิด</div>
    </div>
</template>


<script>
  export default {
    name: 'example-text',
    data () {
      return {
        msg: 'Welcome to Testing Example Page'
      }
    },
    methods: {
      answer: function (choice) {
        window.sessionStorage.testing1 = choice
        this.$router.push({name: 'example-voice'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
