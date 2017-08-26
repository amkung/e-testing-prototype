<template>
    <div class="hello">
        <drawer title-name="Summary" link-active="summary"></drawer>
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="item in items">
                {{ item.choose }}
                {{ item.choose === item.correct ? 'Valid' : 'InValid' }}
            </li>
        </ul>
        <div>{{point}}</div>
        <div>
            <button type="button" @click="finished()">Finished</button>
        </div>
    </div>
</template>


<script>
  import Drawer from './Navbar/Drawer'
  export default {
    name: 'summary',
    components: {
      Drawer
    },
    data () {
      return {
        items: null,
        msg: 'Welcome to Summary Page'
      }
    },
    computed: {
      // a computed getter
      point: function () {
        var point = 0
        for (var index in this.items) {
          var item = this.items[index]
          if (item.choose === item.correct) point++
        }
        // `this` points to the vm instance
        return point
      }
    },
    methods: {
      finished: function () {
        window.sessionStorage.testing1 = null
        window.sessionStorage.testing2 = null
        window.sessionStorage.testing3 = null
        this.$router.push({name: 'dashboard'})
      }
    },
    mounted () {
      var choice1 = window.sessionStorage.testing1
      var choice2 = window.sessionStorage.testing2
      var choice3 = window.sessionStorage.testing3

      this.items = [
        {choose: choice1, correct: '1'},
        {choose: choice2, correct: '1'},
        {choose: choice3, correct: '1'}
      ]
      window.sessionStorage.isStartTesting = 'no'
      window.sessionStorage.startTestingTime = null
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>