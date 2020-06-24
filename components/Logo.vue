<template>
 

  <div class="title_container">
    <nuxt-link to="/">
     <h1 id="main_title" class="display-2">Butters Log</h1>
    </nuxt-link>
     <h2 class="sub_title">Frontend Web Developer</h2>

    <div class="bee-img">
    <img src="/bumbleBee.png"/>
    </div>
    
   </div>


</template>


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
    font-family: 'Black Han Sans', sans-serif;
    font-size: 46px;
    text-align: center;
    color: rgb(51, 34, 16);
    margin-top: 100px;
    margin-bottom: 0px;
  }
  .sub_title {
    font-size: 22px;
    font-weight: 200;
    text-align: center;
    font-family: 'Lato', sans-serif; 
    color: rgb(72, 187, 178);
    /* color: rgb(112, 212, 212); */
  }

 .bee-img {
   animation: bee-img linear 5s infinite;
   transform-origin: center -30px 0;
 }
 @keyframes bee-img {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
}
  .bee-img img {
    width: 80px;
    margin-top: 60px; 
  }
  .quote {
    text-align: center;
    margin-bottom: 60px; 
  }
</style>