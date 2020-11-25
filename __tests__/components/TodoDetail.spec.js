import { shallowMount } from '@vue/test-utils'
import Component from '@/components/TodoDetail.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component, {
    propsData: {
      todo: {
        id: 0,
        title: 'タスクのタイトル',
        text: 'タスクの詳細',
        isDone: false,
      },
    },
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('TodoDetail', () => {
  it('Vueのインスタンスである', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  it('propsの値がちゃんと受け取れているかどうか', () => {
    expect(wrapper.props().todo.id).toBe(0)
    expect(wrapper.props().todo.title).toBe('タスクのタイトル')
    expect(wrapper.props().todo.text).toBe('タスクの詳細')
    expect(wrapper.props().todo.isDone).toBeFalsy()
  })
})
