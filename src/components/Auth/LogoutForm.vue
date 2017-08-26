<template>
    <a href="#" @click.prevent="logout()">
        <slot></slot>
    </a>
</template>


<script>
  //  import * as mdc from 'material-components-web'
  export default {
    name: 'logoutForm',
    mounted () {
//      mdc.autoInit()
    },
    methods: {
      logout: function () {
        var vm = this
        window.sessionStorage.isAuth = 'no'
        window.sessionStorage.isStartTesting = 'no'
        window.sessionStorage.startTestingTime = null
        window.sessionStorage.testing1 = null
        window.sessionStorage.testing2 = null
        window.sessionStorage.testing3 = null
        setTimeout(function () {
          vm.$router.go('/')
        }, 200)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
