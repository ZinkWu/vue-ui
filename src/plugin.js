import Toast from "./Toast";
export default {
  install(Vue, Options){
    Vue.prototype.$toast = function (message) {
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
