<template>
   
 
     <v-card
        class="mx-auto"
        min-width="360"
        min-height="260"
          
      >
        <v-img
          class="white--text align-end"
          max-height="380px"
          v-bind:src="work.fields.image.fields.file.url"
          >
        </v-img>
       <div class="under-image-content-space">
       <nuxt-link :to="'/posts/' + work.fields.slug">
        <v-card-title>{{ work.fields.title }}</v-card-title>
       </nuxt-link>
          
           <!-- <nuxt-link to="'/category/' + works.fields.category.sys.id">
           <div>
            {{ works.fields.category.fields.name }}
           </div>
          </nuxt-link>  -->
          
        <v-card-subtitle class="pb-0">{{ work.fields.subtitle }}</v-card-subtitle>
        
        <li class="d-flex flex-row mb-6" >
          <v-btn
            v-for="tag in work.fields.tag" :key="tag.sys.id" 
            text
            color="#CB8433"
            @click="$router.push('/tag/'+tag.sys.id)">
            {{ tag.fields.name }}
        
          </v-btn>
          
        </li>
        </div>
      </v-card>
  
</template>

<script>
export default {
  props: ['work']
}

</script>

<style scoped>
.v-card {
 /* transition: all 5s ease !important;  */
 border-radius: 10px !important;
 /* position: relative;
 z-index: 1; */
}
.v-card .under-image-content-space a {
  /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-indent:-999px;
    z-index: 2; */
}
.v-card:hover {
 transform: scale(0.986, 0.986);
 transition: all .14s linear !important; 

}
.v-image {
  cursor: pointer;
}
/* .v-image--cover:hover{
    transform: scale(1.5);
}  */
.under-image-content-space {
    height: 150px;
}
.under-image-content-space a {
  text-decoration: none;
} 
 .v-card__title{
    padding-top: 20px;
    padding-bottom: 0;
    font-family: 'Lato', sans-serif;
  }
  li{
    list-style: none;
    width: auto
  }
  .v-application .pb-0{
    padding-bottom: 10px !important;
    font-size: 16px
  }
  .v-btn {
    font-family: 'Lato', sans-serif;
    font-size: 13px;
    font-weight: 600;
  } 

    
</style>