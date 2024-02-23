import './assets/sass/index.scss'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const opt = document.querySelectorAll('#opt');
function asignarAtributo() {
    opt.forEach(elemento => {
        elemento.removeAttribute('style');
    })
    this.setAttribute('style', 'background: #d7d7d7;');
}
opt.forEach((elemento) => {
    elemento.addEventListener("click", asignarAtributo);
});


