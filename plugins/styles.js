
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'vue-lazy-youtube-video/dist/style.css'
import { Plugin } from 'vue-lazy-youtube-video'


 
// global register


export default ()=> {

    Vue.use(Vant);
    Vue.use(Plugin)
}