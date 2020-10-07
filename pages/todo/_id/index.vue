<template>
  <section v-if="!isLoading">
    <TodoDetail />
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
      allTodos: 'todos/allTodos',
    }),
  },
  created() {
    // ToDoリストが存在しなければトップページへ遷移する
    if (!this.allTodos.length) {
      return this.$router.push('/')
    }
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
