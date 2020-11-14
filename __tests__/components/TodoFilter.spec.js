import { shallowMount } from '@vue/test-utils'
import Component from '@/components/TodoFilter.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component, {
    propsData: {
      checked: 'all',
      options: [
        { label: 'すべて', value: 'all' },
        { label: '作業中', value: 'working' },
        { label: '完了', value: 'done' },
      ],
    },
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('TodoFilter', () => {
  it('Vueのインスタンスである', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  it('propsの値がちゃんと受け取れているかどうか', () => {
    expect(wrapper.props().checked).toMatch('all')
    expect(wrapper.props().options[0].label).toMatch('すべて')
    expect(wrapper.props().options[0].value).toMatch('all')
    expect(wrapper.props().options[1].label).toMatch('作業中')
    expect(wrapper.props().options[1].value).toMatch('working')
    expect(wrapper.props().options[2].label).toMatch('完了')
    expect(wrapper.props().options[2].value).toMatch('done')
  })
  it('emitデモ all', async () => {
    // emit
    wrapper.vm.$emit('change', 'all')

    // emitが処理されるまで待つ
    await wrapper.vm.$nextTick()

    // イベントがemitされた
    expect(wrapper.emitted('change')).toBeTruthy()
    // 一個のイベントがemitされた
    expect(wrapper.emitted('change').length).toBe(1)
    // payloadされたデータ
    expect(wrapper.emitted('change')[0][0]).toMatch('all')
  })
  it('emitデモ working', async () => {
    // emit
    wrapper.vm.$emit('change', 'working')

    // emitが処理されるまで待つ
    await wrapper.vm.$nextTick()

    // イベントがemitされた
    expect(wrapper.emitted('change')).toBeTruthy()
    // 一個のイベントがemitされた
    expect(wrapper.emitted('change').length).toBe(1)
    // payloadされたデータ
    expect(wrapper.emitted('change')[0][0]).toMatch('working')
  })
  it('emitデモ done', async () => {
    // emit
    wrapper.vm.$emit('change', 'done')

    // emitが処理されるまで待つ
    await wrapper.vm.$nextTick()

    // イベントがemitされた
    expect(wrapper.emitted('change')).toBeTruthy()
    // 一個のイベントがemitされた
    expect(wrapper.emitted('change').length).toBe(1)
    // payloadされたデータ
    expect(wrapper.emitted('change')[0][0]).toMatch('done')
  })
})
