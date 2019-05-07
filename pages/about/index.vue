<template>
    <section id="about-page">
      <div class="container">
        <h1> {{title}} </h1>
        <p> {{content}} </p>
      </div>
    </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then(res => {
      // console.log(res.data);
      return {
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    })
  }
}
</script>

<style>
#about-page{
  width: 70%;
  max-width: 500px;
  margin: auto;
}

#about-page{
  white-space: pre-line;
}

</style>
