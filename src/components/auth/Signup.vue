<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card>
        <v-card-title class="justify-center">Signup</v-card-title>
        <v-card-text>
          <v-form ref="signup" @submit.prevent="signup">
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
              :rules="[rules.required, rules.min]"
            ></v-text-field>

            <v-text-field
              v-model="alias"
              label="Alias"
              type="text"
              :rules="[rules.required]"
              :error-messages="invalidAlias"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text>Cancel</v-btn>
          <v-btn color="success" @click="signup">Signup</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import slugify from 'slugify'
import db from '../../firebase/init'

export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      alias: '',
      slug: null,
      invalidAlias: null,

      rules: {
        invalidEmail: v => /.+@.+/.test(v) || 'E-mail must be valid',
        min: v => v.length >= 8 || 'Min 8 characters',
        required: value => !!value || 'Required.',
      },
    }
  },
  methods: {
    signup() {
      if (this.$refs.signup.validate()) {
        this.$refs.signup.resetValidation()
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+.~()'"!\-:@]/g,
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          this.invalidAlias = doc.exists
            ? 'This alias is been used, please choose another'
            : null
        })
      } else {
        this.$refs.signup.validate()
      }
    },
  },
}
</script>
