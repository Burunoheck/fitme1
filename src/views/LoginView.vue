<template>
  <v-img max-height="100%" max-width="100%" src="@/assets/images/exercicio-fisico-metabolismo.jpg">
  <v-container class="d-flex justify-start" fill-height fluid text-center>
      <v-container class="white rounded-lg">
        <v-row>
          <v-col class="primary--text text-center mx-auto pb-4" cols="1" sm="4" offset="4">
          <h1 class="h1">Login</h1>
        </v-col>
      </v-row>
      <v-row class="elavation-3 mx-auto">
        <v-col cols="auto">
        </v-col>
        <v-col>
          <v-form form color="primary">
            <v-text-field label="Email" v-model="user.email" ></v-text-field>
            <v-text-field label="Senha"
            v-model="user.password"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
            @click:append="show = !show">
          </v-text-field>
            <v-btn color="primary" @click="login">Login</v-btn>
            <v-btn class="ml-2" color="warning" @click="reset">Cancelar</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar color="red" v-model="errorLogin" danger multiline timeout="2000">
      Usuário ou senha inválidos
    </v-snackbar>
  </v-container>
  </v-img>
</template>

<script>
  export default {
    data() {
      return {
        user:{},
        show: false,
      };
    },
    methods: {
      reset() {
        this.user = {};
      },
      login() {
        if (this.user.email === 'bruno' && this.user.password === 'bruno') {
          this.$router.push({ name: "home" });
        } else {
          this.errorLogin = true;
      }
    },
  },
};
</script>

<style>

</style>