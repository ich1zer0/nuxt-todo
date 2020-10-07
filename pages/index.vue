<template>
  <section v-if="isLoading" class="mt-4 pb-2">
    <h1 class="text-3xl">ToDoリスト</h1>
    <template v-if="isTodos">
      <div class="mt-2">
        <TodoFilter />
      </div>
      <div class="mt-2">
        <TodoList />
      </div>
    </template>
    <section class="mt-6">
      <h2 class="text-xl">新規タスクの追加</h2>
      <div class="mt-4">
        <TodoInput />
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import TodoFilter from '~/components/TodoFilter'
import TodoList from '~/components/TodoList'
import TodoInput from '~/components/TodoInput'

export default {
  name: 'Index',
  components: {
    TodoList,
    TodoFilter,
    TodoInput,
  },
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
      allTodos: 'todos/allTodos',
    }),
    /**
     * ToDoが存在するかを返す
     *
     * @return {Boolean}
     */
    isTodos() {
      return this.allTodos.length > 0
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
    }),
  },
}
</script>
