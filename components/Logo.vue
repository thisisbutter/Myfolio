<template>
 

  <div class="title_container">

   <a href="/" id="main_title">
    <buttersLogo/>
   </a>
   <img src="/bumbleBee.png" class="bee-img">
   <h1 class="sub_title">Frontend Web Developer</h1>
  </div>
</template>

<script>
import buttersLogo from '@/static/butterslogo.svg'

export default {
  components: {
    buttersLogo
  }
}
</script>


<style scoped>
/* タイトルスタイル */ 
.title_container a {
   text-decoration: none;
 }
.title_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}
#main_title {
    height: 130px;
    width: 350px;
    text-align: center;
    margin-top: 80px;
  }
  .sub_title {
    font-size: 18px;
    font-weight: 200;
    text-align: center;
    font-family: 'Nothing You Could Do', cursive;
    /* font-family: 'Lato', sans-serif;  */
    color: rgb(72, 187, 178);
    margin-bottom: 40px;
  }

img {
    width: 76px;
    margin-bottom: 18px;
}

/* レスポンシブ */
@media screen and (max-width:980px) {
  .title_container {
    height: 310px;
  }
   .nav_list {
   display: none;
 }
}
</style>