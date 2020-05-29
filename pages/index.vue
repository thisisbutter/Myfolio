<template>
<div class="container">
  
   <blockQuote />

    <magic-grid>
      <Item 
        v-for="work in works" 
        :key="work.sys.id"
        :work="work"
      />
    </magic-grid>
 
 
 </div>
</template>


<script>

  import blockQuote from '@/components/blockQuote.vue';
  import Item from '@/components/Item.vue';
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

    export default {
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


