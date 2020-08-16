<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card>
        <v-card-title class="justify-center">Login</v-card-title>
        <v-card-text>
          <v-form ref="signup" @submit.prevent="login">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="[rules.required, rules.invalidEmail]"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="[rules.required]"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import db from '../../firebase/init'
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rules: {
        invalidEmail: v =>
          // eslint-disable-next-line no-useless-escape
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'E-mail must be valid',
        required: value => !!value || 'Required.',
      },
    }
  },
  methods: {
    login() {
      if (this.$refs.signup.validate()) {
        console.log('DEBUG:::::::::::::::::::::: login')
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$refs.signup.validate()
      }
    },
  },
}
</script>
