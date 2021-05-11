<template>
  <div>
    <h1>user/slug</h1>
    <p>slug: {{ id }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.slug,
    }
  },
}
</script>
