import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { getters, actions, mutations } from '~/store/loading'

/**
 * Storeを生成する関数
 * @param {Object} state ステートのオブジェクト
 */
const initStore = (state) => {
  return cloneDeep({
    state,
    getters,
    mutations,
    actions,
  })
}

beforeEach(() => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
})

describe('store', () => {
  it('changeLoadingのテスト', () => {
    // stateを設定
    const state = {
      isLoading: true,
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

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

  it('isLoadingのテスト（isLoadingがtrueのときtrueを返す）', () => {
    // stateを設定
    const state = {
      isLoading: true,
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

    // 結果を検証する
    expect(store.getters.isLoading).toBeTruthy()
  })

  it('isLoadingのテスト（isLoadingがfalseのときfalseを返す）', () => {
    // stateを設定
    const state = {
      isLoading: false,
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

    // 結果を検証する
    expect(store.getters.isLoading).toBeFalsy()
  })
})
