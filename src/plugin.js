import Toast from "./Toast";
export default {
  install(Vue, Options){
    Vue.prototype.$toast = function (message, toastOptions) {
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions.closeButton,
          enableHtml: toastOptions.enableHtml
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
