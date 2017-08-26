<template>
    <section class="main">
        <aside class="mdc-temporary-drawer mdc-typography">
            <nav class="mdc-temporary-drawer__drawer">

                <header class="mdc-permanent-drawer__toolbar-spacer mdc-theme--primary-bg mdc-theme--text-primary-on-dark">
                    <div>
                        นาย เรียนดี เก่งมาก<br/>
                        <span class="mdc-typography--caption">รหัสสอบ: 60012356799</span>
                    </div>
                </header>

                <nav class="mdc-temporary-drawer__content mdc-list drawer-space">
                    <router-link class="mdc-list-item" :to="{ name: 'dashboard'}"
                                 v-bind:class="{ 'mdc-temporary-drawer--selected': linkActive=='dashboard' }">
                        <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>
                        หน้าหลัก
                    </router-link>
                    <router-link class="mdc-list-item" :to="{ name: 'testing'}"
                                 v-bind:class="{ 'mdc-temporary-drawer--selected': linkActive=='testing' }">
                        <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>
                        ทำแบบทดสอบ
                    </router-link>
                    <router-link class="mdc-list-item" :to="{ name: 'history'}"
                                 v-bind:class="{ 'mdc-temporary-drawer--selected': linkActive=='history' }">
                        <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>
                        ประวัติการสอบ
                    </router-link>
                    <router-link class="mdc-list-item" :to="{ name: 'guide'}"
                                 v-bind:class="{ 'mdc-temporary-drawer--selected': linkActive=='guide' }">
                        <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>
                        แนะนำระบบ
                    </router-link>
                    <logout-form class="mdc-list-item">
                        <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>
                        ออกจากระบบ
                    </logout-form>
                </nav>

                <div class="powered-by">
                    <div class="mdc-typography--subheading2">E-Testing</div>
                    <div class="mdc-typography--caption powered-by--sub-title">ระบบสอบอิเล็คทรอนิคส์</div>
                </div>
            </nav>
        </aside>

        <navbar :title-name="titleName" drawer-class="mdc-temporary-drawer"></navbar>

    </section>
</template>

<script>
  import Navbar from './Navbar'
  import LogoutForm from '../Auth/LogoutForm'
  export default {
    name: 'Drawer',
    props: ['titleName', 'linkActive'],
    components: {
      Navbar,
      LogoutForm
    }
  }
</script>

<style scoped>
    .powered-by{
        padding: 0 16px 10px;
        /*text-align: right;*/
        color: #555;
        position: relative;
    }
    .powered-by--sub-title{
        margin-top: -5px;
    }
</style>