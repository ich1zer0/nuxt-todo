<template>
  <section v-if="!isLoading">
    <h2 class="text-xl">他のタスク一覧</h2>
    <TodoListSide />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheSide',
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
    }),
  },
}
</script>
