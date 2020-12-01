import { shallowMount } from '@vue/test-utils'
import Component from '@/components/Loading.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component)
})

afterEach(() => {
  wrapper.destroy()
})

describe('Loading', () => {
  it('Vueのインスタンスである', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
})
