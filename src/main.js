import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Toaster from '@meforma/vue-toaster';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCartShopping, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faCartShopping, faChevronRight, faFacebook, faTwitter, faInstagram)


createApp(App).use(router).use(Toaster).component('font-awesome-icon', FontAwesomeIcon).mount('#app')