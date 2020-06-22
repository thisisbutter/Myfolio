<template>

   <section id="card">
      
        <img
          class="card_img"
          v-bind:src="work.fields.image.fields.file.url"
          >

       <div class="under-image-content-space">
       <nuxt-link :to="'/posts/' + work.fields.slug">
        <h1 class="card_title">{{ work.fields.title }}</h1>
       </nuxt-link>
         
          
        <h2 class="card_subtitle">{{ work.fields.subtitle }}</h2>
        
        <li class="tag_btn" >
          <button
            class="card_btn"
            v-for="tag in work.fields.tag" :key="tag.sys.id" 
            @click="$router.push('/tag/'+tag.sys.id)">
            {{ tag.fields.name }}
          </button>
<!-- 
          text
          color="#CB8433" -->
          
        </li>
        </div>
       </section>
      <!-- </v-card> -->
    
   

</template>

<script>
export default {
  props: ['work']
}

</script>

<style scoped>

/* カードスタイル */
#card {
  width: 360px !important;
  min-height: 260px;
  border: none;
  border-radius: 13px;
  box-shadow: 0 0 12px gainsboro;
  background-color: white;
}
.card_title {
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: rgb(51, 34, 16);
  padding-top: 6px;
  margin-top: 8px;
  margin-left: 14px;
}

.card_subtitle {
  font-size: 17px;
  color: gray;
  font-weight: 200;
  margin-left: 15px;
  margin-bottom: 0;
  font-family: 'Lato', sans-serif;
  padding: 6px 0px 10px;
}
.card_img {
  width: 100%;
  border-radius: 13px 13px 0 0;
  /* box-sizing: border-box; */
}
#card:hover {
 transform: scale(0.988, 0.988);
 transition: all .14s linear; 

} 

/* カードイメージ下コンテンツのstyle */
.under-image-content-space {
    min-height: 100px;
}
.under-image-content-space a {
  text-decoration: none;
  cursor: pointer;
}
.under-image-content-space a :hover{
  color: rgb(179, 135, 24)
}
.under-image-content-space li {
  list-style: none;
}

/* カードのボタンstyle */
.tag_btn {
  margin-top: 0px;
  margin-bottom: 10px;
}

button.card_btn {
  padding: 10px 15px 10px;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  color: #CB8333;
  text-transform: uppercase;
  border: none;

}
button.card_btn:hover {
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(255, 249, 244);
  border: none;
}
button:focus { 
  outline:0; 
  }

    
</style>