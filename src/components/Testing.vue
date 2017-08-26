<template>
    <div>
        <drawer title-name="Testing" link-active="testing"></drawer>
        <router-view></router-view>
    </div>
</template>


<script>
  import Drawer from './Navbar/Drawer'

  export default {
    name: 'testing',
    components: {
      Drawer
    },
    mounted () {
      setInterval(function () {
        if (window.sessionStorage.isStartTesting === 'yes') {
          var diff = 5
          var expiredIn = diff * 60000
          var current = (new Date()).getTime()
          var expired = (new Date(window.sessionStorage.startTestingTime)).getTime()
          var expiredTime = expiredIn - (current - expired)
          console.log('time remain', expiredTime / 1000)
        }

//        console.log(tStr)
      }, 1000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>