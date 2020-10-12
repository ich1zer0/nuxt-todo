<template>
  <div>
    <h1 class="text-3xl break-all">ToDo No.{{ todo.id }} {{ todo.title }}</h1>
    <p class="text-xs mt-2">
      <span
        v-if="todo.isDone"
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
    <p class="mt-4 p-4 border bg-gray-100 break-all">{{ todo.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoDetail',
  props: {
    todo: { type: Object, required: true },
  },
}
</script>
