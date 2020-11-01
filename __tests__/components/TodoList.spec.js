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
  it('todosデータが正しく表示されているかテスト', () => {
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
    expect(wrapper.find('a').text()).toMatch('タスクのタイトル')
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
    // タスクが削除され表示が変更された
    expect(wrapper.find('a').text()).toMatch('')
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
    // ステータスが変更された
    expect(wrapper.find('a').text()).toMatch('')

    // もう一度 emit
    wrapper.vm.$emit('toggle', 0)
    // ステータスが再変更された
    expect(wrapper.find('a').text()).toMatch('タスクのタイトル')
  })
})
