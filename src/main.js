import { createApp } from 'vue'
import './style.scss'
import VueMathjax from 'vue-mathjax-next';
import App from './App.vue'
createApp(App).use(VueMathjax).mount('#app')
MathJax.Hub.config.displayAlign="left"
MathJax.Hub.config.showMathMenu=false

document.addEventListener('keydown',(event)=>{
  switch (event.code) {
    case "ArrowUp":
        console.log("up");
        event.preventDefault()
        break;
    case "ArrowDown":
        console.log("down");
        event.preventDefault()

        break;
    case "ArrowRight":
        console.log("right");
        event.preventDefault()

      break;
    case "ArrowLeft":
        console.log('left');
        event.preventDefault()

      break;
    default:

  }
},false)
