import Vue from 'vue'
import App from './App.vue'
import notification from './notification/index.js'

Vue.use(notification);

new Vue({
	el: '#app',
	render: h => h(App)
})
