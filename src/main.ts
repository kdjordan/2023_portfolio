import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { gsap } from 'gsap/gsap-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { CSSPlugin } from 'gsap/CSSPlugin';
import { TextPlugin, ScrollTrigger, } from 'gsap/all';


library.add(faGithub, faLinkedin, fas)
gsap.registerPlugin(CSSPlugin, TextPlugin, ScrollTrigger)



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
