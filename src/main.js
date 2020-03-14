import Vue from "vue";
import App from "./App.vue";
import VueYouTubeEmbed from 'vue-youtube-embed'
import "./registerServiceWorker";
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import  Button  from 'ant-design-vue/lib/button';
import Icon from 'ant-design-vue/lib/icon';
import Input from 'ant-design-vue/lib/input';
import Empty from 'ant-design-vue/lib/empty';

import axios from 'axios';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(axios);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Empty);
Vue.use(VueYouTubeEmbed)


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
