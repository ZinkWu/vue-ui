import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";

Vue.component("v-button", Button)
Vue.component("v-button-group", ButtonGroup)
Vue.component("v-icon", Icon)
Vue.component('v-input', Input)

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
