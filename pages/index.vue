<template>
<div>
    <magic-grid>
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

 </div>
</template>


<script>

  import blockQuote from '@/components/blockQuote.vue';
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
        blockQuote,
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


