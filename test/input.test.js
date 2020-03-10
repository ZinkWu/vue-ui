import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    //error 存在时存在 svg 和 errorMessage
    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '错误'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerHTML).to.equal('错误')
    })
  })

  describe('events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('change/input/focus/blur event', () => {
      let eventList = ['change', 'input', 'focus', 'blur']
        eventList.forEach(eventName => {
          vm = new Constructor({}).$mount()
          let event = new Event(eventName)
          const callback = sinon.fake()
          vm.$on(eventName, callback)
          let inputEl = vm.$el.querySelector('input')
          if ('input' !== eventName) {
            inputEl.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
          } else {
            Object.defineProperty(event, 'target', {value: {value: 'hello'}, enumerable: true})
            inputEl.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hello')
          }

        })
    })
  })
})
