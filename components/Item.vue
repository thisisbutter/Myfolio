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
         
         <!-- ▼ここの1行をかくとエラーになってしまうのですがなぜか、パスは合っている模様 -->
          <!-- <p>{{ work.fields.category.fields.name }}</p> -->
          
        <v-card-subtitle class="pb-0">{{ work.fields.subtitle }}</v-card-subtitle>
        
        <li class="d-flex flex-row mb-6" >
          <v-btn
            v-for="tag in work.fields.tag" :key="tag.sys.id" 
            text
            color="primary"
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

<style>
.under-image-content-space {
    height: 150px;
}
    
</style>