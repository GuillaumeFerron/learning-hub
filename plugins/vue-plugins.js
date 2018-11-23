/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-unused-vars: 0 */

import Vue from 'vue'

/* -------- Plugins -------- */
import { TimelineMax } from 'gsap/umd/TweenMax'

if (process.browser) {
  var VueCodeMirror = require('vue-codemirror-lite')

  Vue.use(VueCodeMirror)
}

/* -------- Mixins -------- */
import Notification from '@/mixins/Notification'
import Miscellaneous from '@/mixins/Miscellaneous'

Vue.mixin(Notification)
Vue.mixin(Miscellaneous)
