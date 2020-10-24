import { shallowMount } from '@vue/test-utils'
import Component from '@/components/TodoInput.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component)
})

afterEach(() => {
  wrapper.destroy()
})

describe('TodoInput', () => {
  it('Vueのインスタンスである', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  it('最初はデータが空っぽである', () => {
    expect(wrapper.vm.title).toMatch('')
    expect(wrapper.vm.text).toMatch('')
  })
  it('emitデモ', async () => {
    // data に値を入力
    wrapper.vm.title = 'タスクのタイトル'
    wrapper.vm.text = 'タスクの詳細'

    // emit
    wrapper.vm.$emit('submit', {
      title: wrapper.vm.title,
      text: wrapper.vm.text,
    })

    // emitが処理されるまで待つ
    await wrapper.vm.$nextTick()

    // イベントがemitされた
    expect(wrapper.emitted('submit')).toBeTruthy()
    // 一個のイベントがemitされた
    expect(wrapper.emitted('submit').length).toBe(1)
    // payloadされたデータ
    expect(wrapper.emitted('submit')[0][0].title).toMatch('タスクのタイトル')
    expect(wrapper.emitted('submit')[0][0].text).toMatch('タスクの詳細')
  })
})
