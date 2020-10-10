<template>
  <div class="-mt-2">
    <div class="flex flex-col w-full mt-2">
      <label class="text-sm" for="title">タスクのタイトル</label>
      <input
        id="title"
        v-model="title"
        class="border border-gray-600 mt-1 p-4"
        type="text"
        placeholder="タスクのタイトルを入力してください。"
      />
    </div>
    <div class="flex flex-col w-full mt-2">
      <label class="text-sm" for="text">タスクの詳細</label>
      <textarea
        id="text"
        v-model="text"
        class="border border-gray-600 mt-1 p-4"
        rows="5"
        placeholder="タスクの詳細を入力してください。"
      ></textarea>
    </div>
    <div class="text-center mt-6">
      <button
        class="text-xl text-white w-full max-w-xs rounded-md bg-gray-300 p-4"
        :class="{ 'bg-blue-600': isClickable }"
        :disabled="!isClickable"
        @click="handleSubmit"
      >
        追加
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      title: '', // タスクのタイトル
      text: '', // タスクの詳細
    }
  },
  computed: {
    /**
     * 追加ボタンの活性状態を返す
     *
     * @return {Boolean}
     */
    isClickable() {
      return this.title !== '' && this.text !== ''
    },
  },
  methods: {
    /**
     * ToDoを追加をemitして入力をクリアする
     */
    handleSubmit() {
      this.$emit('submit', { title: this.title, text: this.text })
      this.title = ''
      this.text = ''
    },
  },
}
</script>
