<template>

  <div class="container">
          <v-card
        v-for="work in works" 
        :key="work.sys.id"
        class="mx-auto"
        max-width="370"
        min-height="260"
          
      >
        <v-img
          class="white--text align-end"
          max-height="380px"
          v-bind:src="work.fields.image.fields.file.url"
          >
        </v-img>

        <v-card-title>{{ work.fields.title }}</v-card-title>
        <v-card-subtitle class="pb-0">{{ work.fields.subtitle }}</v-card-subtitle>
        
        <li class="d-flex flex-row mb-6" >
          <v-btn
            v-for="tag in work.fields.tag" :key="tag.sys.id" 
            text
            color="primary"
          >
            {{ tag.fields.name }}
          </v-btn>
        </li>
      </v-card>
        <!-- </v-row>
      </v-col>

          <v-col
            cols="3"
            md="2"
          >
            
          </v-col>
        </v-row>
  </v-container> -->
  </div>

</template>



<script>
  
  import { createClient } from '~/plugins/contentful.js'
  import VueMasonryWall from "vue-masonry-wall";
  // import MagicGrid from 'magic-grid'
 
  const client = createClient()



    export default {
      // name: 'app',
      // components: {VueMasonryWall},
      // data() {
      //   return {
      //     items: [
      //       {title: 'Item 0', content: 'Content'},
      //       {title: 'Item 1', content: 'Content'},
      //     ]
      //   }
      // }, 

      asyncData() {
        return Promise.all([
          client.getEntries({
            'content_type': 'works', // workタイプの記事データを全取得
            order: '-sys.createdAt' // 作成日時順に並べる
          })
        ]).then(([works]) => {
          console.log(works.items)
          return {
            works: works.items // 取得したデータを配列worksに入れる
          }
        }).catch(console.error)
      },
      // mounted(){
      //   const items = []
      //   const options = {
      //     width: 300,
      //     padding: {
      //       default: 12,
      //       1: 6,
      //       2: 8
      //     }
      //   }
 
        // const append = () => {
        //   // API call and add items
        //   this.items.push(...[])
        // }
      }
    //   methods: {
    //   append() {
    //     for (let i = 0; i < 20; i++) {
    //       this.items.push({title: `Item ${this.items.length}`, content: 'Content'})
    //     }
    //   }
    // }

</script>


<style>
  .v-card__title{
    padding-top: 20px;
    padding-bottom: 0;
  }
  li{
    list-style: none;
    width: auto
  }
  .v-application .pb-0{
    margin-top: 8px;
    min-height: 36px;
  }
 .row{
   align-items: baseline;
 }
  
</style>