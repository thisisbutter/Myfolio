<template>
  <v-app>
    <v-content>
      <div class="nav_menu">
        <nav class="nav_list">
          <nuxt-link to="/" class="navs">About</nuxt-link>
          <nuxt-link to="/" class="navs">Blog</nuxt-link>
          <nuxt-link to="/" class="navs">Works</nuxt-link>
        </nav>

      </div>
      <v-container>
        <NavBar />
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
import NavBar from '@/components/NavBar.vue';
import Logo from '@/components/Logo.vue';
export default {
  components: {
    NavBar,
    Logo,
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

<style>
.nav_list{
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
  
}
.navs{
  display: block;
  padding: 40px 12px 0px;
  color: black;
  text-decoration: none;
  font-size: 18px;
}
.navs:first-child{
  margin-right: 140px;
}

.v-application a {
  color: black;
}
.v-application :hover{
 color: goldenrod;
}
  
</style>