<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul class="nav-link">
                <nuxt-link tag="li" to="/"><a>POSTS</a></nuxt-link>
                <nuxt-link tag="li" to="/about"><a>ABOUT</a></nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>

.main-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
    height: 4.5rem;
}
.main-nav{
    height: 100%;
    z-index: 10;
}
.nav-link{
    list-style: none;
    margin: 0 1rem;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.nav-link a{
    margin: 0 5%;
    padding: 0 10%;
    display: block;
    text-decoration: none;
    color: #fff;
}

.nav-link.nuxt-link-exact-active{
    border-bottom: 3px solid #045642;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active{
    color: #06ffff;
}

</style>
