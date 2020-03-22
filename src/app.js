import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Sider from "./Sider";
import Footer from "./Footer";
import plugin from "./plugin";

Vue.component("v-button", Button)
Vue.component("v-button-group", ButtonGroup)
Vue.component("v-icon", Icon)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)
Vue.component('v-layout', Layout)
Vue.component('v-header', Header)
Vue.component('v-content', Content)
Vue.component('v-sider', Sider)
Vue.component('v-footer', Footer)
Vue.use(plugin)

new Vue({
  el: "#app",
  data(){
    return{
      loading1: true,
      loading2: false,
      message: 123
    }
  },
  methods:{
    showToast(){
      this.$toast(`得分${parseInt(Math.random()*100)}`, {
        closeButton:{
          text: "ok",
          callback: () => {
            console.log('ok');
          }
        },
        position: 'center'
      })
    }
  }
})
