import { defineNuxtConfig } from 'nuxt'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
  ],
  target: 'static',
  // ssr: false,
  vite: {
    plugins: [
      Components({
        resolvers: [
          HeadlessUiResolver({}),
          (name) => {
            if (name.includes('IconSolid')) {
              const realName = name.split('Solid')[0]
              return `@heroicons/vue/solid/esm/${realName}.js`
            }
            if (name.includes('IconOutline')) {
              const realName = name.split('Outline')[0]
              return `@heroicons/vue/outline/esm/${realName}.js`
            }
          },
        ],
        include: [/\.vue$/, /\.vue\?vue/],
        extensions: ['vue'],
      }),
    ],
  },
  runtimeConfig: {
    // https://v3.nuxtjs.org/guide/features/runtime-config#environment-variables
    MAPBOX_ACCESS_TOKEN: '',
    public: {
      MAPBOX_ACCESS_TOKEN: '', // Or a default value
    }
  },
  intlify: {
    vueI18n: {
      // You can setting same `createI18n` options here !
      locale: 'en',
      localeDir: 'locales',
      messages: {
        en: {
          hello: 'Hello'
        },
        fr: {
          hello: 'Bonjour'
        },
      },
    },
  },
})
