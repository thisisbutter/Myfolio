<template>
 <div>
    <div class="post-container">
        <div class="heading-titles">
          
              <p class="bread_crum">/<nuxt-link to="/category/">
                 Category  
              </nuxt-link>/
              <nuxt-link :to=" '/category/' + works.fields.category.sys.id ">
                 {{ works.fields.category.fields.name }}
              </nuxt-link>
              </p>
            
               <v-btn
                v-for="tag in works.fields.tag" :key="tag.sys.id" 
                text
                color="deep-orange lighten-2"
                @click="$router.push('/tag/'+tag.sys.id)"
              >
                {{ tag.fields.name }}
              </v-btn>

            <h1 class="single-post-title">{{  works.fields.title }}</h1>
            <h2 class="single-post-subtitle">{{ works.fields.subtitle }}</h2>
        </div>

    <v-img 
    class="post-img"
    max-height="540px"
    v-bind:src="works.fields.image.fields.file.url"
    >
     
    </v-img>

        <section class="the-content">
            <p v-html="$md.render(works.fields.content)">
            </p>
        </section>

    </div>
 </div>
</template>


<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()


export default {

     asyncData({params}) {
        return Promise.all([
          client.getEntries({
            'content_type': 'works',// workタイプの記事データを全取得
            'fields.slug': params.slug //取得対象をslugで指定
          }),
        ]).then(([works]) => {
          console.log(works.items[0])
          return {
            works: works.items[0] // 取得したデータを配列worksに入れる
          }
          console.log(works.items[0])
        }).catch(console.error)
      },
      mounted() {
        Prism.highlightAll()
      }
    
}
</script>>

<style scoped>
/* パンクずリスト */
.bread_crum {
  font-size: 17px;
  /* color: #2f4f4f */
}
.bread_crum a {
  text-decoration: none;
  color: rgb(36, 92, 83);
}
.bread_crum a:hover {
  color: darkgoldenrod
}

/* タイトルコンテナ */
.post-container {
    margin-top: 60px;
}
.v-btn {
    padding: 0 10px;
    margin-bottom: 30px;
    margin-left: -12px;
}
/* .v-btn:fast-child {
    margin-left: -12px;
} */
.heading-titles {
    max-width: 780px;
    padding: 0 40px;
    margin: 0 auto;
}
.post-img {
    margin: 0 auto;
    width: 80%;
}

.v-responsive {
    margin-top: 100px;
    margin-bottom: 100px;
    
}
.single-post-title {
    font-size: 34px;
    font-family: 'Lato', sans-serif;
    line-height: 68px;
}
.single-post-subtitle {
    font-size: 16px;
    margin-top: 10px;
    font-weight: 300;
    font-family: "Lato, sans-serif"; 
}

/* コンテンツ */
.the-content {
    width: 800px;
    margin: 0 auto;
    min-height: 300px;
    margin-bottom: 100px;
}


</style>>
