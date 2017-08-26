<template>
    <section>
        <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                    <form @submit.prevent="login()">
                        <div class="mdc-form-field">
                            <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
                                <input type="text" id="username" class="mdc-textfield__input" v-model="username">
                                <label class="mdc-textfield__label mdc-typography"
                                       for="username">Enter your username</label>
                            </div>
                        </div>

                        <div class="mdc-form-field">
                            <div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
                                <input type="password" id="password" class="mdc-textfield__input" v-model="password">
                                <label class="mdc-textfield__label mdc-typography"
                                       for="password">Enter your password</label>
                            </div>
                        </div>
                        <div class="mdc-form-field">
                            <button type="submit" class="mdc-button mdc-button--primary mdc-button--raised"
                                    data-mdc-auto-init="MDCRipple">
                                Login
                            </button>
                        </div>
                    </form>
                    <div class="mdc-typography">{{loginMessage}}</div>

                </div>
            </div>
        </div>
    </section>
</template>


<script>
//  import * as mdc from 'material-components-web'
  export default {
    name: 'loginForm',
    data () {
      return {
        username: null,
        password: null,
        loginMessage: null
      }
    },
    mounted () {
//      mdc.autoInit()
    },
    methods: {
      login: function () {
        // success case
        if (this.username === 'admin' && this.password === '123456') {
          console.log('sucesss')
          var vm = this
          this.loginMessage = 'Login success.'
          window.sessionStorage.isAuth = 'yes'
          setTimeout(function () {
            vm.$router.go('/dashboard')
          }, 200)
        } else {
          console.log('error')
          this.loginMessage = 'Invalid Username or Password.'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>