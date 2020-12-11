<template>
  <div>
    <Loading v-if="isLoading" />
    <main v-else>
      <section>
        <h1 class="text-3xl">ToDoリスト</h1>
        <template v-if="isTodos">
          <div class="mt-2">
            <TodoFilter v-model="checkedFilter" :options="filterOptions" />
          </div>
          <div class="mt-2">
            <TodoList
              :todos="todos"
              @remove="handleRemoveTodo"
              @toggle="handleToggleTodoState"
            />
          </div>
        </template>
        <section class="mt-6">
          <h2 class="text-xl">新規タスクの追加</h2>
          <div class="mt-4">
            <TodoInput @submit="handleAddTodo" />
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      checkedFilter: 'all', // チェックされている絞り込みのvalue
      // フィルターのオプション
      filterOptions: [
        { label: 'すべて', value: 'all' },
        { label: '作業中', value: 'working' },
        { label: '完了', value: 'done' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
      allTodos: 'todos/allTodos',
    }),
    /**
     * フィルタリングされたToDoを返す
     *
     * @return {Array}
     */
    todos() {
      if (this.checkedFilter === 'working') {
        return this.allTodos.filter((todo) => !todo.isDone)
      } else if (this.checkedFilter === 'done') {
        return this.allTodos.filter((todo) => todo.isDone)
      } else {
        return this.allTodos
      }
    },
    /**
     * ToDoが存在するかを返す
     *
     * @return {Boolean}
     */
    isTodos() {
      return this.allTodos.length > 0
    },
  },
  mounted() {
    // ローディングの状態を更新
    this.changeLoading(false)
  },
  destroyed() {
    // ローディングの状態を更新
    this.changeLoading(true)
  },
  methods: {
    ...mapActions({
      changeLoading: 'loading/changeLoading',
      addTodo: 'todos/addTodo',
      removeTodo: 'todos/removeTodo',
      toggleTodoState: 'todos/toggleTodoState',
    }),
    /**
     * ToDoを追加する
     *
     * @param {Object} args
     */
    handleAddTodo(args) {
      const { title, text } = { ...args }
      const newTodo = {
        id: this.allTodos.length,
        title,
        text,
        isDone: false,
      }
      this.addTodo(newTodo)
    },
    /**
     * ToDoを削除する
     *
     * @param {Number} id
     */
    handleRemoveTodo(id) {
      this.removeTodo(id)
    },
    /**
     * ToDoの状態を変更する
     *
     * @param {Number} id
     */
    handleToggleTodoState(id) {
      this.toggleTodoState(id)
    },
  },
}
</script>
