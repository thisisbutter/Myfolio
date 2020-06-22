<template>
  <div>
      <div class="nav_container">
        <nav class="nav_list">
          <ul>
            <li><a href="/" class="navs">Home</a></li>
            <li><nuxt-link to="/category/PaEXgNdpMzTwxXsEYjWHM" class="navs">Blog</nuxt-link></li>
            <li><nuxt-link to="/category/Ae7gzW3aql6i1aNb6ls1w" class="navs">Work</nuxt-link></li>
            <li><nuxt-link to="/category/7GUtBQJAY7mwGUXhV7uWHF" class="navs">About</nuxt-link></li>
            <input type="text" name="search" placeholder="Search.." class="search" v-model="keyword" 
              @keypress.enter="$router.push('/search/' + keyword)">
          </ul>
        </nav>
        
      </div>

     
      
          <Logo />
          <nuxt /> 
         
          <Footer />
      </div>
</template>

<script>

import Logo from '@/components/Logo.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Logo,
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
  /* ========================
/* ベーシックスタイル */
/* ======================== */
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(241, 241, 241);
    /* background-color: rgb(240, 236, 230); */
  }
   div.container {
   max-width: 1500px; 
   margin-bottom: 100px;
 }
 .wrapper {
   height: auto;
   padding-bottom: 100px;
 }

/* 全体フォント */
#app {
  font-family:"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
  } 

/* 全体画像サイズ */
img {
  width:100%;
  max-width: 100%;
  height: auto;
}

/* ナビゲーション */
.nav_list ul {
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
  margin-bottom: 0px;
}
.nav_list ul li {
  display: block;
  list-style: none;
  padding: 16px;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
}

.nav_list ul li a {
  text-decoration: none;
  cursor: pointer;
  color: black;
}
.nav_list ul li a:hover {
  /* color: rgb(57, 80, 62); */
  color: rgb(113, 190, 190);
}
.search {
  border: none;
  background-color: rgb(241, 241, 241);
  border-bottom: solid 0.6px gray;
  padding: 5px 10px 5px;
  font-size: 12px;
  margin-right: 20px;
  margin-left: 20px;
}
input:focus { 
  outline:0; 
  }

/* レスポンシブ */
@media screen and (max-width:980px) {
 .nav_list {
   display: none;
 }
}


</style>