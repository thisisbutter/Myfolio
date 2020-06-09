<template>
  <v-app>
    <v-content>
      <div class="nav_menu">
        <nav class="nav_list">
          <v-text-field
            label="Search"
            v-model="keyword" 
            @keypress.enter="$router.push('/search/' + keyword)"
            class="d-none d-lg-block"
            >
          </v-text-field>
          <nuxt-link to="/category/7GUtBQJAY7mwGUXhV7uWHF" class="navs">About</nuxt-link>
          <nuxt-link to="/category/PaEXgNdpMzTwxXsEYjWHM" class="navs">Blog</nuxt-link>
          <nuxt-link to="/category/Ae7gzW3aql6i1aNb6ls1w" class="navs">Work</nuxt-link>
          <nuxt-link to="/" class="navs">Home</nuxt-link>
        </nav>

      </div>
      <v-container>
        <Logo />
        <nuxt />
      </v-container>
    </v-content>
     
     <Footer />
    
  </v-app>
</template>

<script>

import Logo from '@/components/Logo.vue';
import blockQuote from '@/components/blockQuote.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Logo,
    blockQuote,
    Footer
  },
    data() {
      return {
        keyword: ''
      }
  },
  
}
</script>

<style>
  .v-label {
    font-size: 14px;
  }
  .v-input {
    max-width: 10%;
    margin-top: 20px;
    font-size: 12px;
  }
  /* ナビゲーション */
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
    color: black !important;
  }
  .v-application a:hover{
   color: goldenrod;
  }
  /* ========================
/* ベーシックスタイル */
/* ======================== */
   div.container {
   max-width: 1500px; 
   margin-bottom: 100px;
 }
 
.v-application--wrap {
  background-color: rgb(240, 236, 230);
}
.wrapper {
  height: auto;
} 
/* 全体フォント */
#app {
  font-family:"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
  } 
#main_title {
  font-family: 'Black Han Sans', sans-serif !important;
}
/* 全体画像サイズ */
img {
  width:100%;
  max-width: 100%;
  height: auto;
}
</style>