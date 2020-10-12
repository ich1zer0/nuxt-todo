<template>
  <div>
    <ul v-if="isOtherTodos" class="mt-2">
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
  </div>
</template>

<script>
export default {
  name: 'TodoListSide',
  props: {
    todos: { type: Array, required: true },
  },
  computed: {
    /**
     * 現在のページ以外のToDoが存在するかを返す
     *
     * @return {Boolean}
     */
    isOtherTodos() {
      return this.todos.length > 0
    },
  },
}
</script>
