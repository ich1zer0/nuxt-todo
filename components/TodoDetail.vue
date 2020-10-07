<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TodoDetail',
  computed: {
    ...mapGetters({
      currentId: 'todos/currentId',
      currentTodo: 'todos/currentTodo',
    }),
  },
  created() {
    this.setCurrentId(this.$route.params.id)
  },
  methods: {
    ...mapMutations({
      setCurrentId: 'todos/setCurrentId',
    }),
  },
}
</script>
