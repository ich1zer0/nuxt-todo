<template>
  <section v-if="!isLoading">
    <h1 class="text-3xl break-all">
      Todo No.{{ currentId }} {{ currentTodo.title }}
    </h1>
    <p class="text-xs mt-2">
      <span
        v-if="currentTodo.isDone"
        class="inline-block text-green-600 border border-green-600 px-4 py-1"
      >
        完了
      </span>
      <span
        v-else
        class="inline-block text-blue-600 border border-blue-600 px-4 py-1"
      >
        作業中
      </span>
    </p>
    <p class="mt-4 p-4 border bg-gray-100 break-all">{{ currentTodo.text }}</p>
    <div class="text-right mt-6">
      <NuxtLink class="text-sm text-blue-600" to="/">トップへ戻る</NuxtLink>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Todo',
  layout: 'todo',
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
      currentId: 'todos/currentId',
      currentTodo: 'todos/currentTodo',
      allTodos: 'todos/allTodos',
    }),
  },
  created() {
    // ToDoリストが存在しなければトップページへ遷移する
    if (!this.allTodos.length) {
      return this.$router.push('/')
    }
    this.setCurrentId(this.$route.params.id)
    this.changeLoading(false)
  },
  destroyed() {
    this.changeLoading(true)
  },
  methods: {
    ...mapMutations({
      changeLoading: 'loading/changeLoading',
      setCurrentId: 'todos/setCurrentId',
    }),
  },
}
</script>
