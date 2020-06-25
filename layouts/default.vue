<template>
   <div>
      <div class="nav_container">
        <nav class="nav_list">
          <ul>
            <li><a href="/" class="navs">Home</a></li>
            <li><nuxt-link to="/category/PaEXgNdpMzTwxXsEYjWHM" class="navs">Blog</nuxt-link></li>
            <li><nuxt-link to="/category/Ae7gzW3aql6i1aNb6ls1w" class="navs">Works</nuxt-link></li>
            <li><nuxt-link to="/category/7GUtBQJAY7mwGUXhV7uWHF" class="navs">About</nuxt-link></li>
            <input type="text" name="search" placeholder="Search.." class="search" v-model="keyword" 
              @keypress.enter="$router.push('/search/' + keyword)">
          </ul>
        </nav>
        
       <!-- navigation-drawer -->

        <div id="nav-drawer">
          <input id="nav-input" type="checkbox" class="nav-unshown">
          <label id="nav-open" for="nav-input"><span></span></label>
          <label class="nav-unshown" id="nav-close" for="nav-input"></label>
        <!-- ドロワー中身 -->
          <div id="nav-content">
             <nav class="humb_nav">
              <ul>
                <li><a href="/" class="navs">Home</a></li>
                <li><nuxt-link to="/category/PaEXgNdpMzTwxXsEYjWHM" class="navs">Blog</nuxt-link></li>
                <li><nuxt-link to="/category/Ae7gzW3aql6i1aNb6ls1w" class="navs">Works</nuxt-link></li>
                <li><nuxt-link to="/category/7GUtBQJAY7mwGUXhV7uWHF" class="navs">About</nuxt-link></li>
                <!-- <input type="text" name="search" placeholder="Search.." class="search" v-model="keyword" 
                  @keypress.enter="$router.push('/search/' + keyword)"> -->
              </ul>
            </nav>
            </div>
      </div> 
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
        keyword: ' '
      }
  },
  
}
</script>

<style>
  /* ========================
/* ベーシックスタイル */
/* ======================== */
  /* 全体フォント */
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(241, 241, 241);
    font-family: "Poppins", "游ゴシック", "YuGothic", "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", sans-serif;
  }
   div.contents_main {
   margin-bottom: 100px;
 }
 .wrapper {
   height: auto;
   /* max-width: 1500px;  */
   padding-bottom: 100px;
   margin: 0 auto;
 }
 /* ============================= */
 /* ナビゲーションドロワー */
 /* ============================= */
 #nav-drawer {
  position: relative;
  height: 40px;
  display: none;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}

/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}

/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 30px;/*長さ*/
  border-radius: 3px;
  background: rgb(65, 116, 101);
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}

/*閉じる薄黒カバー*/
#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;/*全体に*/
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}

/*中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;/*最前面に*/
  width: 90%;/*右側に隙間を作る（閉じるカバーを表示）*/
  max-width: 420px;/*最大幅（調整してください）*/
  height: 100%;
  background: rgb(231,214,195);/*背景色*/
  opacity: 0.95;
  transition: .3s ease-in-out;/*滑らかに表示*/
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/*左に隠しておく*/
}

/*チェックが入ったら表示*/
#nav-input:checked ~ #nav-close {
  display: block;/*カバー*/
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/*中身を表示（右へスライド）*/
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
 /* ============================= */
 /* ナビゲーションドロワー中身 */
 /* ============================= */
 .humb_nav ul {
   margin-top: 40px;
 }
 .humb_nav ul li {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    text-decoration: none;
    padding: 10px;
    padding-left: 30px;
    line-height: 32px;
 }
 .humb_nav ul li a {
    text-decoration: none;
    cursor: pointer;
    color: grey;
 }
 .humb_nav ul li a:hover {
   color: rgb(109, 109, 8)
 }
 /* a:any-link {
  
 } */
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
  color: grey;
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
  #nav-drawer {
    display: block;
    display: flex;
    align-items: center;
    left: 50px;
    top: 60px;
    position: relative;
    height: 40px;
 }
}


</style>