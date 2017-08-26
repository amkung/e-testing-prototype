<template>
    <div class="hello">
        <drawer title-name="Dashboard" link-active="dashboard"></drawer>
        <h1>{{ msg }}</h1>
    </div>
</template>


<script>
  import Drawer from './Navbar/Drawer'

  export default {
    name: 'dashboard',
    components: {
      Drawer
    },
    data () {
      return {
        msg: 'Welcome to Dashboard Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
</style>