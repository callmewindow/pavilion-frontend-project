import Vue from 'vue'
import Enter from '@/components/Enter'

describe('Enter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Enter)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
