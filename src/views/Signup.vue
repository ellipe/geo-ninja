<template>
  <v-container class="fill-height">
    <Signup />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/auth/Signup.vue'

export default {
  name: 'Home',
  components: {
    Signup,
  },
}
</script>
