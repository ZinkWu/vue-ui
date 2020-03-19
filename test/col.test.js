const expect = chai.expect;
import Vue from 'vue'
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.be.ok
  })
  describe('props', () => {
    let div
    let vm
    const Constructor = Vue.extend(Col)
    beforeEach(() => {
      div = document.createElement('div')
    })
    afterEach(()=>{
      div.remove()
      vm.$destroy()
    })
    it('接收 span 属性', () => {
      vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div)
      const el = vm.$el
      expect(el.classList.contains('col-1')).to.eq(true)
    })
    it('接收 pc 属性', () => {
      vm = new Constructor({
        propsData: {
          pc: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const el = vm.$el
      expect(el.classList.contains('col-pc-1')).to.eq(true)
      expect(el.classList.contains('offset-pc-2')).to.eq(true)
    })
    it('接收 ipad 属性', () => {
      vm = new Constructor({
        propsData: {
          ipad: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const el = vm.$el
      expect(el.classList.contains('col-ipad-1')).to.eq(true)
      expect(el.classList.contains('offset-ipad-2')).to.eq(true)
    })
    it('接收 narrowPc 属性', () => {
      vm = new Constructor({
        propsData: {
          narrowPc: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const el = vm.$el
      expect(el.classList.contains('col-narrowPc-1')).to.eq(true)
      expect(el.classList.contains('offset-narrowPc-2')).to.eq(true)
    })
    it('接收 widePc 属性', () => {
      vm = new Constructor({
        propsData: {
          widePc: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const el = vm.$el
      expect(el.classList.contains('col-widePc-1')).to.eq(true)
      expect(el.classList.contains('offset-widePc-2')).to.eq(true)
    })
  })

})
