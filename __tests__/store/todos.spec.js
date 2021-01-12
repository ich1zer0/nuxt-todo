import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { getters, actions, mutations } from '~/store/todos'

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
  it('addTodoのテスト', () => {
    // stateを設定
    const state = {
      list: [],
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

    const newTodo = {
      id: 0,
      title: 'タスクのタイトル',
      text: 'タスクの詳細',
      isDone: false,
    }
    // 最初はStateは空
    expect(store.state.list).toEqual([])
    // dispatch
    store.dispatch('addTodo', newTodo)
    // Stateが更新されている
    expect(store.state.list).toEqual([
      {
        id: 0,
        title: 'タスクのタイトル',
        text: 'タスクの詳細',
        isDone: false,
      },
    ])
  })
  it('removeTodoのテスト', () => {
    // stateを設定
    const state = {
      list: [],
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

    const newTodo = {
      id: 0,
      title: 'タスクのタイトル',
      text: 'タスクの詳細',
      isDone: false,
    }
    store.dispatch('addTodo', newTodo)
    // StateにTodoが保存されている
    expect(store.state.list).toEqual([
      {
        id: 0,
        title: 'タスクのタイトル',
        text: 'タスクの詳細',
        isDone: false,
      },
    ])
    // dispatch
    store.dispatch('removeTodo', 0)
    // Stateが更新されている
    expect(store.state.list).toEqual([])
  })
  it('toggleTodoStateのテスト', () => {
    // stateを設定
    const state = {
      list: [],
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

    const newTodo = {
      id: 0,
      title: 'タスクのタイトル',
      text: 'タスクの詳細',
      isDone: false,
    }
    store.dispatch('addTodo', newTodo)
    // StateにTodoが保存されている
    expect(store.state.list).toEqual([
      {
        id: 0,
        title: 'タスクのタイトル',
        text: 'タスクの詳細',
        isDone: false,
      },
    ])
    // dispatch
    store.dispatch('toggleTodoState', 0)
    // Stateが更新されている
    expect(store.state.list).toEqual([
      {
        id: 0,
        title: 'タスクのタイトル',
        text: 'タスクの詳細',
        isDone: true,
      },
    ])
  })

  it('allTodosのテスト', () => {
    // stateを設定
    const state = {
      list: [
        {
          id: 0,
          title: 'タスクのタイトル1',
          text: 'タスクの詳細1',
          isDone: false,
        },
        {
          id: 1,
          title: 'タスクのタイトル2',
          text: 'タスクの詳細2',
          isDone: false,
        },
        {
          id: 2,
          title: 'タスクのタイトル3',
          text: 'タスクの詳細3',
          isDone: false,
        },
      ],
    }
    // 実行可能なStoreを生成してテストします。
    const store = new Vuex.Store(initStore(state))

    // 結果を検証する
    expect(store.getters.allTodos).toEqual([
      {
        id: 0,
        title: 'タスクのタイトル1',
        text: 'タスクの詳細1',
        isDone: false,
      },
      {
        id: 1,
        title: 'タスクのタイトル2',
        text: 'タスクの詳細2',
        isDone: false,
      },
      {
        id: 2,
        title: 'タスクのタイトル3',
        text: 'タスクの詳細3',
        isDone: false,
      },
    ])
  })
})
