<template>
  <div class="border border-gray-600 p-4">
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
                    @click="emitToggleEvent(todo.id)"
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
                    @click="emitRemoveEvent(todo.id)"
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
<script>
export default {
  name: 'TodoList',
  props: {
    todos: { type: Array, required: true },
  },
  computed: {
    /**
     * フィルタリングされた状態のToDoが存在するかを返す
     *
     * @return {Boolean}
     */
    isFilteredTodos() {
      return this.todos.length > 0
    },
  },
  methods: {
    /**
     * ToDoの削除をemitする
     *
     * @param {Number} id
     */
    emitRemoveEvent(id) {
      this.$emit('remove', id)
    },
    /**
     * ToDoの状態変更をemitする
     *
     * @param {Number} id
     */
    emitToggleEvent(id) {
      this.$emit('toggle', id)
    },
  },
}
</script>
