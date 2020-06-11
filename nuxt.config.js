import colors from 'vuetify/es5/util/colors'


const config = require('./.contentful.json')
const contentful = require('contentful')

const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
}) 

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 env: {
  CTF_SPACE_ID: config.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
},

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    },
    
    generate: {
      routes () {
        return Promise.all([
          client.getEntries({
            'content_type': 'works'
          }),
          client.getEntries({
            'content_type': 'category'
          }),
          client.getEntries({
            'content_type': 'tag'
          })
        ]).then(([works,categories,tags]) => {
          return [
            ...works.items.map(works => `posts/${works.fields.slug}`),
            ...categories.items.map(category => `category/${category.fields.slug}`),
            ...tags.items.map(tag => `tag/${tag.sys.id}`)
          ]
        })
      }
    },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  //   '@fortawesome/fontawesome-svg-core/styles.css'
       
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/magic-grid', ssr: false},
    {src: '~/plugins/prism', ssr: false},
    { src: '~/plugins/infiniteloading', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  webfontloader: {
    google: {
      families: ['Black Han Sans','Roboto','Lato']
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader'
  ],
  markdownit: { 
    html: true,
    injected: true,
    linkify: true,
    breaks: false
  },
  axios: {
    // proxyHeaders: false
  },
  // fontawesome: {
  //   component: 'fa'
  // },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          // primary: '#CB8433',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
