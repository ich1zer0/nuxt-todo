export const state = () => ({
  list: [], // ToDOリスト
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
}

export const mutations = {
  /**
   * ToDoを追加する
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
}
