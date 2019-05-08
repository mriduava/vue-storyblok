<template>
 <div class="container">

      <div class="card">
        <div :style="{backgroundImage: 'url(' + thumbnail + ')'}"
          class="thumbnail">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ title }} <span class="price float-right">{{price}}</span></h5>
          <p class="card-text">{{ excerpt }}</p>
        </div>

        <div class="card-footer bg-light">
           <NuxtLink to="id"><a class="btn btn-outline-warning btn-sm text-dark">LIKE</a></NuxtLink>
           <NuxtLink :to="'/' + id"><a class="btn btn-outline-success btn-sm">ADD TO BAG</a></NuxtLink>
        </div>
      
      </div>   

  </div>

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
        price: {
          type: String,
          required: true
        },
        id: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.thumbnail{
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 20rem;
}
.card-title{
  color: #034f84;
}
.price{
  color: #D4AF37;
}

</style>
