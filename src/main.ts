import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Emitter from 'tiny-emitter'

const app = createApp(App)

app.config.globalProperties.$msalInstance = {} // configuración vacía de nuestra instancia de msal
app.config.globalProperties.$emitter = new Emitter() // emisor para luego mandar los datos a través de la cola


app.use(router).mount('#app')
