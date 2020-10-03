<template>
  <div class="container m-auto p-10">
    <section v-if="error.statusCode === 404">
      <h1>
        <img src="~/assets/img/error-404.svg" alt="Page not found" />
      </h1>
    </section>
    <section v-else>
      <h1>
        <img src="~/assets/img/error-other.svg" alt="An error occurred" />
      </h1>
    </section>
    <div class="text-center mt-6">
      <NuxtLink class="text-sm text-blue-600" to="/">トップへ戻る</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: ['error'],
}
</script>
