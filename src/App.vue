<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  import * as mdc from 'material-components-web'
  export default {
    name: 'app',
    mounted () {
      mdc.autoInit()
    }
  }
</script>

<style src="./assets/material-components-web.scss" lang="scss"></style>

<style lang="scss">
    :root {
        --mdc-theme-primary: #274eb0;
        --mdc-theme-accent: #ff437a;
    }

    #app {
        margin-top: 64px;
    }

    @media (max-width: 959px) and (orientation: landscape) {
        #app {
            margin-top: 56px;
        }
    }

    @media (max-width: 599px) {
        #app {
            margin-top: 56px;
        }
    }
</style>
