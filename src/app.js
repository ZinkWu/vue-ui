import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";

Vue.component("v-button", Button)
Vue.component("v-button-group", ButtonGroup)
Vue.component("v-icon", Icon)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)

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
    handle(e){
      console.log(e.target.value);
    }
  }
})
