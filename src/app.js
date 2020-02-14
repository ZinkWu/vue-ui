import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon"

Vue.component('v-button', Button)
Vue.component('v-icon', Icon)

new Vue({
  el: "#app",
  data(){
    return{
      loading1: true,
      loading2: false
    }
  }
})
