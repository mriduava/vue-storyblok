<template>
  <section class="container">

    <PostPreview 
       v-for="post in posts" 
       :key="post.id" 
       :title="post.title"
       :excerpt="post.text"
       :thumbnail="post.imageurl"
       :id="post.id"/>

  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
export default {
  components: {
    PostPreview
  },  
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: 'Wonderful life...',
  //         text: 'Life is beautiful, always. We are happy with it.',
  //         imageurl: 'https://images.unsplash.com/photo-1490772888775-55fceea286b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  //         id: '23a21'
  //       },
  //         {
  //         title: 'Let fly to the Sky',
  //         text: 'Fly, fly, fly to world, do not stay inside the square.',
  //         imageurl: 'https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  //         id: '23a22'
  //       } 
  //     ]
  //   }
  // }
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'blog/'
      }).then(res => {
        // console.log(res);
        return {
          posts: res.data.stories.map(bp => {
          return {
            id: bp.id,
            title: bp.content.title,
            text: bp.content.summary,
            imageurl: bp.content.thumbnail
          }
        })
        }
        
      })
  }
}
</script>

<style>

</style>
