import Toast from "./Toast";

let currentToast

export default {
  install(Vue, Options){
    Vue.prototype.$toast = function (message, toastOptions) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}





/*handles*/

function createToast({Vue, message, propsData, onClose}) {
  const Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
