const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/Toast";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.exist
  })

  describe('props', () => {
    it('接收 autoClose & autoCloseDelay', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 1
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1900)
    })
    it('接收  closeButton', () => {
      const callback = sinon.fake();
      // const div = document.createElement('div')
      // document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'ok',
            callback
          }
        }
      }).$mount()
      let span = vm.$el.querySelector('.close')
      expect(span.textContent.trim()).to.eq('ok')
      span.click()
      expect(callback).to.have.been.called
    })
    it('接收 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">test</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
