<template>
  <NuxtLink to="id">
    <article class="post-preview">
      <div
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"
        class="post-preview-thumbnail">
      </div>
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #232323;
}
.post-preview{
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    width: 90%;
    margin: 5%;
    height: 20rem;
}
.post-preview-thumbnail{
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}
.post-preview-content{
    text-align: center;
    padding: 1rem;
}

</style>
