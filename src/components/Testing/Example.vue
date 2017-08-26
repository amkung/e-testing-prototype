<template>
    <div>
        <div v-if="isStart==='no'">
            <h1>เลือกข้อสอบ</h1>
            <ul>
                <li @click="startTesting()">ภาษาไทย</li>
                <li @click="startTesting()">ภาษาอังกฤษ</li>
                <li @click="startTesting()">คณิตศาสตร์</li>
                <li @click="startTesting()">ฟิสิกส์</li>
            </ul>
        </div>
        <div v-else>
            <button type="button" @click="continueTesting()">Continue</button>
        </div>
    </div>
</template>


<script>
  export default {
    name: 'example',
    data () {
      return {
        msg: 'Welcome to Testing Example Page',
        isStart: window.sessionStorage.isStartTesting
      }
    },
    mounted () {
      console.log('isStartTesting', window.sessionStorage.isStartTesting)
      console.log('startTestingTime', window.sessionStorage.startTestingTime)
    },
    methods: {
      startTesting: function () {
        var vm = this
        window.sessionStorage.isStartTesting = 'yes'
        window.sessionStorage.startTestingTime = new Date()
        console.log(vm.$router)
        setTimeout(function () {
          vm.$router.push({name: 'example-text'})
          console.log(window.sessionStorage.isStartTesting)
        }, 200)
      },
      continueTesting: function () {
        var vm = this
        setTimeout(function () {
          // get last testing
          vm.$router.push({name: 'example-text'})
          console.log(window.sessionStorage.isStartTesting)
        }, 200)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>