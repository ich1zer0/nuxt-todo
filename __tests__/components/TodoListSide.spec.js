import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Component from '@/components/TodoListSide'

let wrapper

afterEach(() => {
  wrapper.destroy()
})

describe('TodoListSide', () => {
  it('Vueのインスタンスである', () => {
    wrapper = shallowMount(Component, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        todos: [],
      },
    })
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  it('propsの値がちゃんと受け取れているかどうか', () => {
    wrapper = shallowMount(Component, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        todos: [
          {
            id: 0,
            title: 'タスクのタイトル',
            text: 'タスクの詳細',
            isDone: false,
          },
        ],
      },
    })
    expect(wrapper.props().todos[0].id).toBe(0)
    expect(wrapper.props().todos[0].title).toBe('タスクのタイトル')
    expect(wrapper.props().todos[0].text).toBe('タスクの詳細')
    expect(wrapper.props().todos[0].isDone).toBeFalsy()
  })
  it('todosが空だったらisOtherTodosはfalseを返す', () => {
    wrapper = shallowMount(Component, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        todos: [],
      },
    })
    expect(wrapper.vm.isOtherTodos).toBeFalsy()
  })
  it('todosにデータが入っていたらisOtherTodosはtrueを返す', () => {
    wrapper = shallowMount(Component, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        todos: [
          {
            id: 0,
            title: 'タスクのタイトル',
            text: 'タスクの詳細',
            isDone: false,
          },
        ],
      },
    })
    expect(wrapper.vm.isOtherTodos).toBeTruthy()
  })
})
