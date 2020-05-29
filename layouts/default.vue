<template>
  <v-app>
    <v-content>
      <div class="nav_menu">
        <nav class="nav_list">
          <nuxt-link to="/about" class="navs">About</nuxt-link>
          <nuxt-link to="/" class="navs">Blog</nuxt-link>
          <nuxt-link to="/" class="navs">Work</nuxt-link>
          <nuxt-link to="/" class="navs">Home</nuxt-link>
        </nav>

      </div>
      <v-container>
        <Logo />
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

import Logo from '@/components/Logo.vue';
import blockQuote from '@/components/blockQuote.vue';
// import Item from '@/components/Item.vue';

export default {
  components: {
    Logo,
    blockQuote,
    // Item
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hey!.js'
    }
  }
}
</script>
