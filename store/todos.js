export const state = () => ({
  list: [], // ToDOリスト
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
   * 現在のページ以外のToDoを返す
   *
   * @param {Object} state
   * @return {Array}
   */
  otherTodos(state) {
    return state.list.filter((todo) => todo.id !== state.currentId)
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
  toggleTodo(state, id) {
    state.list = state.list.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
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
