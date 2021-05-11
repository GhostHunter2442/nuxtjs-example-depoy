<template>
  <div>
    <h1>user</h1>
    <p>{{ id }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
