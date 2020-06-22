<template>

 <div class="contents_main">

 <!-- <no-ssr> -->
   <client-only>
    <magic-grid
     maxColWidth=360
    >
      <Item 
        v-for="work in works" 
        :key="work.sys.id"
        :work="work"
      />
      
    </magic-grid>
 

   <!-- infinite-loading -->
     <infinite-loading 
      ref="infiniteLoading" 
      spinner="spiral"
      @infinite="infiniteHandler">
      <span slot="no-more"></span>
    </infinite-loading>
 <!-- </no-ssr> -->
   </client-only>
 </div>

</template>


<script>

  import Item from '@/components/Item.vue';
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

    export default {
      name: 'InfiniteScroll',
      data() {
        return {
          count: 20
        }
      },
       methods: {
        infiniteHandler() {
         setTimeout(() => {
          if(this.count < 20){
          this.count += 10
          this.$refs.infiniteLoading.stateChanger.loaded()
          } else {
          this.$refs.infiniteLoading.stateChanger.complete()
            }
          }, 1000)
         }
    },
      components: {
        Item
      },

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
          console.log(works.items)
        }).catch(console.error)
      },
    }

</script>


