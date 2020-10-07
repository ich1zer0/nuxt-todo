export const state = () => ({
  list: [], // ToDOリスト
  currentFilter: 'all', // 現在のフィルタリングの状態
  currentId: 0, // 現在のページのToDoのID
})

export const getters = {
  /**
   * すべてのToDoを返す
   *
   * @param {Object} state
   * @return {Array}
   */
  allTodos(state) {
    return state.list
  },
  /**
   * フィルタリングされたToDoを返す
   *
   * @param {Object} state
   * @return {Array}
   */
  filteredTodos(state) {
    if (state.currentFilter === 'working') {
      return state.list.filter((todo) => !todo.isDone)
    } else if (state.currentFilter === 'done') {
      return state.list.filter((todo) => todo.isDone)
    } else {
      return state.list
    }
  },
  /**
   * 現在のページ以外のToDoを返す
   *
   * @param {Object} state
   * @return {Array}
   */
  otherTodos(state) {
    return state.list.filter((todo) => todo.id !== state.currentId)
  },
  /**
   * 現在のページのToDoのIDを返す
   *
   * @param {Object} state
   * @return {Number}
   */
  currentId(state) {
    return state.currentId
  },
  /**
   * 現在のページのToDoを返す
   *
   * @param {Object} state
   * @return {Object}
   */
  currentTodo(state) {
    return state.list.filter((todo) => todo.id === state.currentId)[0]
  },
  /**
   * 現在のフィルタリングの状態を返す
   *
   * @param {Object} state
   * @return {String}
   */
  currentFilter(state) {
    return state.currentFilter
  },
}

export const mutations = {
  /**
   * Todoの追加する
   *
   * @param {Object} state
   * @param {Object} newTodo
   */
  addTodo(state, newTodo) {
    state.list = [...state.list, newTodo]
  },
  /**
   * ToDoをひとつ削除してIDを詰める
   *
   * @param {Object} state
   * @param {Number} id
   */
  removeTodo(state, id) {
    state.list = state.list
      .filter((todo) => todo.id !== id)
      .map((todo, index) => {
        todo.id = index
        return todo
      })
  },
  /**
   * ToDoの状態を変更する
   *
   * @param {Object} state
   * @param {Number} id
   */
  toggleTodoState(state, id) {
    state.list = state.list.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
  },
  /**
   * filterの状態を変更する
   *
   * @param {Object} state
   * @param {String} filter
   */
  setCurrentFilter(state, filter) {
    state.currentFilter = filter
  },
  /**
   * 現在のページのToDoのIDをセットする
   *
   * @param {Object} state
   * @param {Number} id
   */
  setCurrentId(state, id) {
    state.currentId = Number(id)
  },
}
