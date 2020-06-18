<template>
    <div>
      <magic-grid
      maxColWidth = 360
      >
        <Item 
        v-for="work in works" 
        :key="work.sys.id"
        :work="work"
      />
      </magic-grid>
        
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
    components: {
        Item
    },
    asyncData({params}) {
        return Promise.all([
          client.getEntries({
            'content_type': 'works', 
            'fields.category.sys.id': params.id,
            order: '-sys.createdAt' 
          }),
        ]).then(([works]) => {
          console.log(works.items)
          return {
            works: works.items
          }
          console.log(works.items)
        }).catch(console.error)
      }
}
</script>