import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon"
import ButtonGroup from "./ButtonGroup";

Vue.component('v-button', Button)
Vue.component('v-icon', Icon)
Vue.component('v-button-group', ButtonGroup)

new Vue({
  el: "#app",
  data(){
    return{
      loading1: true,
      loading2: false
    }
  }
})

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

// 单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let useEl = vm.$el.querySelector('use')
  let result = useEl.getAttribute('xlink:href')
  expect(result).to.eq('#i-settings')
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useEl = vm.$el.querySelector('use')
  let result = useEl.getAttribute('xlink:href')
  expect(result).to.eq('#i-loading')
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true,
    }
  })
  vm.$mount(div) //必须将元素 mount 到页面中 CSS 才会加到元素上，不渲染元素就不会加载 CSS
  let svgEl = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svgEl)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true,
      iconPosition: "right"
    }
  })
  vm.$mount(div) //必须将元素 mount 到页面中 CSS 才会加到元素上，不渲染元素就不会加载 CSS
  let svgEl = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svgEl)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true,
      iconPosition: "right"
    }
  })
  vm.$mount()
  let spy = chai.spy(() => {
    console.log(1);})
  vm.$on('click', spy)
  vm.$el.click()
  // expect(spy).to.have.been.called()
  expect(spy).has.called()
  vm.$destroy()
}
