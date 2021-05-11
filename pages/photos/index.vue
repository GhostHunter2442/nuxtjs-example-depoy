<template>
  <div class="container">
    <h1>Photos Index</h1>
    <div class="photos">
      <div v-for="photo in photo" :key="photo.id">
        <nuxt-link :to="`/photos/${photo.id}`">
          <img :src="photo.download_url" class="photo-item" />
          <p>{{ photo.author }}</p>
        </nuxt-link>
      </div>
    </div>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const photo = await $axios.$get('https://picsum.photos/v2/list')
    // console.log('photo', photo)
    return { photo }
  },
}
</script>
<style scoped>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>
