const expect = chai.expect;
import Vue from 'vue'
import Row from "../src/Row";
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.ok
  })
  it('接收 gutter 属性', (done) => {
    Vue.component('v-row', Row)
    Vue.component('v-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <v-row gutter="20">
        <v-col span="12"></v-col>
        <v-col span="12"></v-col>
      </v-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })
  it('接收 align 属性', () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'left'
      }
    }).$mount(div)
    const el = vm.$el
    expect(getComputedStyle(el).justifyContent).to.eq('flex-start')
    div.remove()
    vm.$destroy()
  })
})
