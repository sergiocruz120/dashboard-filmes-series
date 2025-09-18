import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
