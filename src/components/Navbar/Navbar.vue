<template>
    <header class="mdc-toolbar mdc-toolbar--fixed">
        <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                <i @click.prevent="open()" class="material-icons mdc-toolbar__icon--menu">menu</i>
                <span class="mdc-toolbar__title">{{titleName}}</span>
            </section>
        </div>
    </header>
</template>


<script>
  import * as mdc from 'material-components-web'

  export default {
    name: 'Navbav',
    props: ['titleName', 'drawerClass'],
    data () {
      return {
        drawer: null
      }
    },
    mounted () {
      this.drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.' + this.drawerClass))
      this.drawer.open = false
    },
    methods: {
      open: function () {
        this.drawer.open = true
      }
    }
  }
</script>