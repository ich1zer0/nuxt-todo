import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Component from '@/components/TodoList.vue'

let wrapper

afterEach(() => {
  wrapper.destroy()
})

describe('TodoList', () => {
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
  it('todosが空だったらisFilteredTodosはfalseを返す', () => {
    wrapper = shallowMount(Component, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        todos: [],
      },
    })
    expect(wrapper.vm.isFilteredTodos).toBeFalsy()
  })
  it('todosにデータが入っていたらisFilteredTodosはtrueを返す', () => {
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
    expect(wrapper.vm.isFilteredTodos).toBeTruthy()
  })
  it('emitRemoveEventのデモ', async () => {
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

    // emit
    wrapper.vm.$emit('remove', 0)

    // emitが処理されるまで待つ
    await wrapper.vm.$nextTick()

    // イベントがemitされた
    expect(wrapper.emitted('remove')).toBeTruthy()
    // 一個のイベントがemitされた
    expect(wrapper.emitted('remove').length).toBe(1)
    // payloadされたデータ
    expect(wrapper.emitted('remove')[0][0]).toBe(0)
  })
  it('emitToggleEventのデモ', async () => {
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

    // emit
    wrapper.vm.$emit('toggle', 0)

    // emitが処理されるまで待つ
    await wrapper.vm.$nextTick()

    // イベントがemitされた
    expect(wrapper.emitted('toggle')).toBeTruthy()
    // 一個のイベントがemitされた
    expect(wrapper.emitted('toggle').length).toBe(1)
    // payloadされたデータ
    expect(wrapper.emitted('toggle')[0][0]).toBe(0)
  })
})
