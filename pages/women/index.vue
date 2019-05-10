<template>
   <div class="container">
    <div class="row">
      <div class="col-md-6 mt-0 mb-4" v-for="woman in women" :key="woman.id" >
        <PostPreview 
          :title="woman.title"
          :excerpt="woman.text"
          :price="woman.price"
          :thumbnail="woman.imageurl"
          :id="woman.id"
        />
     </div>
    </div>
   </div>
</template>

<script>
import PostPreview from "@/components/Store/PostPreview";
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
      starts_with: 'women/'
      }).then(res => {
        // console.log(res);
        return {
          women: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            text: bp.content.summary,
            price: bp.content.price,
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
