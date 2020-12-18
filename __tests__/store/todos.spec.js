import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { getters, actions, mutations } from '~/store/todos'

const state = {
  list: [],
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

  it('addTodoのテスト', () => {
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
    // dispatch
    store.dispatch('addTodo', {
      id: 0,
      title: 'タスクのタイトル1',
      text: 'タスクの詳細1',
      isDone: false,
    })
    store.dispatch('addTodo', {
      id: 1,
      title: 'タスクのタイトル2',
      text: 'タスクの詳細2',
      isDone: false,
    })
    store.dispatch('addTodo', {
      id: 2,
      title: 'タスクのタイトル3',
      text: 'タスクの詳細3',
      isDone: false,
    })
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
