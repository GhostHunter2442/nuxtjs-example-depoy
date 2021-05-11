<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <div class="links">
        <nuxt-link to="about">About</nuxt-link>
        <nuxt-link to="photos">Photo</nuxt-link>
      </div>
      <b-button @click="logout">logout</b-button>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const post = await $content('posts/hello').fetch()
    return { post, title: post.title }
  },
  data() {
    // const post = await this.$content('posts/hello').fetch()
    // console.log('posts', post)
    return {
      title: 'Nuxt js',
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
