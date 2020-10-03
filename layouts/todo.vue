<template>
  <div class="container m-auto p-10">
    <div class="md:flex justify-between -mx-8">
      <main class="flex-grow px-8">
        <Nuxt />
      </main>
      <aside class="w-full max-w-xs flex-shrink-0 px-8">
        <TheSide />
      </aside>
    </div>
  </div>
</template>

<script>
import TheSide from '~/components/TheSide.vue'

export default {
  name: 'TodoLayout',
  components: {
    TheSide,
  },
}
</script>
