<template>
    <div class="hello">
        <h1 class="mdc-typography--display1">{{ msg }}</h1>
        <login-form></login-form>
    </div>
</template>


<script>
  import LoginForm from './Auth/LoginForm'

  export default {
    name: 'home',
    components: {
      LoginForm
    },
    data () {
      return {
        msg: 'E - Testing system'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>