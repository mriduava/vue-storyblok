<template>
  <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img style="width: 100%" :src="image" alt="">
        </div>
        <div class="card-block p-3">
            <h3 class="card-title text-secondary">{{ title }}</h3>
            <p class="card-text">{{ content }}</p>
            <h5 class="text-primary">Price: {{price}} </h5>
            <a href="#" class="btn btn-warning">ADD TO BAG</a>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
            FOOTER
        </div>
    </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/women/" + context.params.menId, {
        version: "draft"
      })
      .then(res => {
          console.log(res.data);
          
        return {
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          price: res.data.story.content.price,
          content: res.data.story.content.summary
        };
      });
  }
};
</script>

<style>

</style>
