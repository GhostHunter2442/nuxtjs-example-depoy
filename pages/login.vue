<template>
  <div class="container">
    <b-form @submit="login">
      <b-input v-model="email" type="email" name="email" class="mt-2" />
      <b-input
        v-model="password"
        type="password"
        name="password"
        class="mt-2"
      />
      <b-button type="submit" class="mt-2">Login</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      const payload = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push('/about')
      } catch (e) {
        this.$router.push('/login')
      }
    },
  },
}
</script>
