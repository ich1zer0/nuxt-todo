<template>
  <section v-if="!isLoading">
    <h2 class="text-xl">他のタスク一覧</h2>
    <ul v-if="isTodos" class="mt-2">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="border border-b-0 border-l-0 border-r-0 p-2"
      >
        <NuxtLink class="text-blue-600 break-all" :to="`/todo/${todo.id}`">
          {{ todo.title }}
        </NuxtLink>
      </li>
    </ul>
    <p v-else class="mt-2">他のタスクはありません。</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheSide',
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
      todos: 'todos/otherTodos',
    }),
    /**
     * 現在のページ以外のToDoが存在するかを返す
     *
     * @return {Boolean}
     */
    isTodos() {
      return this.todos.length > 0
    },
  },
}
</script>
