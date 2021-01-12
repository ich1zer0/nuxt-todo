<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-if="!isLoading && currentTodo" class="md:flex justify-between -mx-8">
      <main class="flex-grow px-8">
        <section>
          <TodoDetail :todo="currentTodo" />
          <div class="text-right mt-6">
            <NuxtLink class="text-sm text-blue-600" to="/">
              トップへ戻る
            </NuxtLink>
          </div>
        </section>
      </main>
      <aside class="w-full md:max-w-xs flex-shrink-0 px-8 mt-8 md:mt-0">
        <section>
          <h2 class="text-xl">他のタスク一覧</h2>
          <TodoListSide :todos="otherTodos" />
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todo',
  data() {
    return {
      currentId: parseInt(this.$route.params.id), // 現在のページのToDoのID
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
      allTodos: 'todos/allTodos',
    }),
    /**
     * 現在のページのToDoを返す
     *
     * @return {Object}
     */
    currentTodo() {
      return this.allTodos.filter((todo) => todo.id === this.currentId)[0]
    },
    /**
     * 現在のページ以外のToDoを返す
     *
     * @return {Array}
     */
    otherTodos() {
      return this.allTodos.filter((todo) => todo.id !== this.currentId)
    },
  },
  created() {
    // ToDoリストが存在しなければトップページへ遷移する
    if (!this.currentTodo) {
      return this.$router.push('/')
    }
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
    }),
  },
}
</script>
