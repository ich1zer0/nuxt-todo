<template>
  <section v-if="isLoading" class="mt-4 pb-2">
    <h1 class="text-3xl">ToDoリスト</h1>
    <template v-if="isTodos">
      <div class="flex items-center mt-2">
        <p class="text-sm">絞り込み:</p>
        <div>
          <label class="ml-2">
            <input
              v-model="filter"
              class="mr-1"
              type="radio"
              value="all"
            />すべて
          </label>
          <label class="ml-2">
            <input
              v-model="filter"
              class="mr-1"
              type="radio"
              value="working"
            />作業中
          </label>
          <label class="ml-2">
            <input
              v-model="filter"
              class="mr-1"
              type="radio"
              value="done"
            />完了
          </label>
        </div>
      </div>
      <div class="border border-gray-600 mt-2 p-4">
        <table v-if="isFilteredTodos" class="table-auto w-full">
          <thead class="hidden sm:table-header-group">
            <tr>
              <th
                class="block sm:table-cell text-sm text-gray-600 font-bold text-left w-1/4 px-4 py-2"
              >
                ID
              </th>
              <th
                class="block sm:table-cell text-sm text-gray-600 font-bold text-left w-2/4 px-4 py-2"
              >
                タイトル
              </th>
              <th
                class="block sm:table-cell text-sm text-gray-600 font-bold text-left w-1/4 px-4 py-2"
              >
                状態
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td
                class="block sm:table-cell w-full sm:w-1/4 border border-b-0 border-l-0 border-r-0 px-4 py-2"
              >
                <span class="text-sm text-gray-600 font-bold mr-2 sm:hidden">
                  ID:
                </span>
                {{ todo.id }}
              </td>
              <td
                class="block sm:table-cell w-full sm:w-2/4 border border-b-0 border-l-0 border-r-0 px-4 py-2"
              >
                <span class="text-sm text-gray-600 font-bold mr-2 sm:hidden">
                  タイトル:
                </span>
                <NuxtLink
                  class="text-xl text-blue-600 break-all"
                  :to="`/todo/${todo.id}`"
                >
                  {{ todo.title }}
                </NuxtLink>
              </td>
              <td
                class="block sm:table-cell w-full sm:w-1/4 border border-b-0 border-l-0 border-r-0 px-4 py-2"
              >
                <div class="flex items-center">
                  <span class="text-sm text-gray-600 font-bold mr-2 sm:hidden">
                    状態:
                  </span>
                  <div class="flex -mx-1">
                    <div class="px-1">
                      <button
                        class="text-sm w-24"
                        @click="toggleState(todo.id)"
                      >
                        <span
                          v-if="todo.isDone"
                          class="block text-green-600 border border-green-600 rounded-md px-4 py-1"
                        >
                          完了
                        </span>
                        <span
                          v-else
                          class="block text-blue-600 border border-blue-600 rounded-md px-4 py-1"
                        >
                          作業中
                        </span>
                      </button>
                    </div>
                    <div class="px-1">
                      <button
                        class="text-sm text-white w-24 bg-red-600 rounded-md px-4 py-1"
                        @click="removeTodo(todo.id)"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>タスクはありません。</p>
      </div>
    </template>
    <section class="mt-6">
      <h2 class="text-xl">新規タスクの追加</h2>
      <div>
        <div class="flex flex-col w-full mt-2">
          <label class="text-sm" for="title">タスクのタイトル</label>
          <input
            id="title"
            v-model="title"
            class="border border-gray-600 mt-1 p-4"
            type="text"
            placeholder="タスクのタイトルを入力してください。"
          />
        </div>
        <div class="flex flex-col w-full mt-2">
          <label class="text-sm" for="text">タスクの詳細</label>
          <textarea
            id="text"
            v-model="text"
            class="border border-gray-600 mt-1 p-4"
            rows="5"
            placeholder="タスクの詳細を入力してください。"
          ></textarea>
        </div>
      </div>
      <div class="text-center mt-6">
        <button
          class="text-xl text-white w-full max-w-xs rounded-md bg-gray-300 p-4"
          :class="{ 'bg-blue-600': isClickable }"
          :disabled="!isClickable"
          @click="handleSubmit"
        >
          追加
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      title: '',
      text: '',
      filter: 'all',
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
      if (this.filter === 'working') {
        return this.allTodos.filter((todo) => !todo.isDone)
      } else if (this.filter === 'done') {
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
    /**
     * フィルタリングされた状態のToDoが存在するかを返す
     *
     * @return {Boolean}
     */
    isFilteredTodos() {
      return this.todos.length > 0
    },
    /**
     * 追加ボタンの活性状態を返す
     *
     * @return {Boolean}
     */
    isClickable() {
      return this.title !== '' && this.text !== ''
    },
  },
  create() {
    this.changeLoading(false)
  },
  destroyed() {
    this.changeLoading(true)
  },
  methods: {
    ...mapMutations({
      changeLoading: 'loading/changeLoading',
      addTodo: 'todos/addTodo',
      removeTodo: 'todos/removeTodo',
      toggleState: 'todos/toggleTodo',
    }),
    /**
     * ToDoを追加して入力をクリアする
     */
    handleSubmit() {
      if (this.title === '') {
        return false
      }
      const id = this.isTodos
        ? this.allTodos[this.allTodos.length - 1].id + 1
        : 0
      const newTodo = {
        id,
        title: this.title,
        text: this.text,
        isDone: false,
      }
      this.addTodo(newTodo)
      this.title = ''
      this.text = ''
    },
  },
}
</script>
