import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { getters, actions, mutations } from '~/store/loading'

const state = {
  isLoading: true,
}

// beforeEachで毎回Storeを生成するために。
const initStore = () => {
  return cloneDeep({
    state,
    getters,
    mutations,
    actions,
  })
}

describe('store', () => {
  let store
  let localVue

  // 実行可能なStoreを生成してテストします。
  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(initStore())
  })

  it('changeLoadingのテスト', () => {
    // 最初はStateはtrue
    expect(store.state.isLoading).toBeTruthy()
    // dispatch
    store.dispatch('changeLoading', false)
    // Stateが更新されている
    expect(store.state.isLoading).toBeFalsy()
    // dispatch
    store.dispatch('changeLoading', true)
    // Stateが更新されている
    expect(store.state.isLoading).toBeTruthy()
  })

  it('isLoadingのテスト', () => {
    // dispatch
    store.dispatch('changeLoading', false)
    // 結果を検証する
    expect(store.getters.isLoading).toBeFalsy()
    // dispatch
    store.dispatch('changeLoading', true)
    // 結果を検証する
    expect(store.getters.isLoading).toBeTruthy()
  })
})
