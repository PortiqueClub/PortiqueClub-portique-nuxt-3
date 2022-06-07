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
  ssr: false,
  head: {
    title: 'Le Portique club',
    meta: [
      { charset: 'utf-8' },
      { title: 'Unplugin' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Le Portique Club , depuis 1932, anime des activités et propose des cours de natation dans une piscine chauffée sur la plage pour les enfants pendant la période estivale. Il accueille vos enfants de 3 à 13 ans, du Dimanche au Vendredi (fermeture le Samedi) de 10h à 13h et de 15h30 à 18h30, de début Juillet à fin Août. L’inscription sur la plage est simple et rapide : à la journée, à la demi-journée ou à la semaine. Nous acceptons les chèques vacances. Le club se situe sur la Plage centrale de la Tranche-sur-Mer, à proximité du centre-ville.' },
      { hid: 'keywords', name: 'keywords', content: 'animation, enfants, piscine, activités, cours de natation, tranche sur mer' },
    ],
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          HeadlessUiResolver({}),
          name => {
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
    },
  },
  intlify: {
    vueI18n: {
      // You can setting same `createI18n` options here !
      locale: 'fr',
    },
  },
})
