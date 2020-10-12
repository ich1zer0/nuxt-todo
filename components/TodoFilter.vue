<template>
  <div class="flex items-center">
    <p class="text-sm">絞り込み:</p>
    <div>
      <template v-for="option in options">
        <label :key="option.value" class="ml-2">
          <input
            class="mr-1"
            type="radio"
            :checked="checked === option.value"
            :value="option.value"
            @change="emitChangeEvent(option.value)"
          />
          {{ option.label }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: { type: String, required: true },
    options: { type: Array, required: true },
  },
  methods: {
    /**
     * 絞り込みの状態変更をemitする
     *
     * @param {String} value
     */
    emitChangeEvent(value) {
      this.$emit('change', value)
    },
  },
}
</script>
