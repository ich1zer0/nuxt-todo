<template>
  <div class="flex items-center">
    <p class="text-sm">絞り込み:</p>
    <div>
      <label class="ml-2">
        <input v-model="filter" class="mr-1" type="radio" value="all" />すべて
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
        <input v-model="filter" class="mr-1" type="radio" value="done" />完了
      </label>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TodoFilter',
  computed: {
    ...mapGetters({
      currentFilter: 'todos/currentFilter',
    }),
    filter: {
      get() {
        return this.currentFilter
      },
      set(value) {
        this.setCurrentFilter(value)
      },
    },
  },
  methods: {
    ...mapMutations({
      setCurrentFilter: 'todos/setCurrentFilter',
    }),
  },
}
</script>
