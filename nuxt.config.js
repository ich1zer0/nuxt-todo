export default {
  head: {
    title: 'nuxt-todo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  css: ['~/assets/scss/main.scss'],
  buildModules: ['@nuxtjs/tailwindcss'],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
