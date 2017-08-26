import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Testing from '@/components/Testing'
import History from '@/components/History'
import Guide from '@/components/Guide'
import Profile from '@/components/Profile'
import Summary from '@/components/Summary'
import AboutUs from '@/components/AboutUs'
import ExampleTesting from '@/components/Testing/Example'
import ExampleTestingByText from '@/components/Testing/Example/Text'
import ExampleTestingByVideo from '@/components/Testing/Example/Video'
import ExampleTestingByVoice from '@/components/Testing/Example/Voice'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: {isGuest: true}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {isAuth: true}
    },
    {
      path: '/testing',
      component: Testing,
      children: [
        {
          path: '',
          name: 'testing',
          component: ExampleTesting
        },
        {
          path: 'example/text',
          name: 'example-text',
          component: ExampleTestingByText
        },
        {
          path: 'example/video',
          name: 'example-video',
          component: ExampleTestingByVideo
        },
        {
          path: 'example/voice',
          name: 'example-voice',
          component: ExampleTestingByVoice
        }
      ],
      meta: {isAuth: true}
    },
    {
      path: '/testing/summary',
      name: 'summary',
      component: Summary,
      meta: {isAuth: true}
    },
    {
      path: '/testing/history',
      name: 'history',
      component: History,
      meta: {isAuth: true}
    },
    {
      path: '/testing/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {isAuth: true}
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: AboutUs
    }
  ]
})

// router.onReady(function (ready) {
//   console.log('ready', ready)
// }, function (error) {
//   console.log('error', error)
// })
//
// router.afterEach(function (hook) {
//   console.log('afterEach', hook)
// })
//
// router.onError(function (error) {
//   console.log('onError', error)
// })

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to.path, to.auth, next)

  var auth = 'no'
  if (window.sessionStorage.isAuth) {
    auth = window.sessionStorage.isAuth
  }
  var diff = 5
  var newDateObj = new Date((new Date(window.sessionStorage.startTestingTime)).getTime() + (diff * 60000))
  var isExpired = Date.parse(newDateObj) - Date.parse(new Date()) < 0
  if (auth === 'yes' && (to.path !== '/testing/summary' && window.sessionStorage.isStartTesting === 'no' && (
      window.sessionStorage.testing1 || window.sessionStorage.testing2 || window.sessionStorage.testing3
    ) || isExpired)) {
    window.sessionStorage.isStartTesting = 'no'
    window.sessionStorage.startTestingTime = null
    window.sessionStorage.testing1 = null
    window.sessionStorage.testing2 = null
    window.sessionStorage.testing3 = null
  }

  if (to.matched.some(record => record.meta.isAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (auth === 'no') {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.isGuest)) {
    if (auth === 'yes') {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
