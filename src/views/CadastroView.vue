<template>
  <v-img max-height="100%" max-width="100%" src="@/assets/images/exercicio-fisico-metabolismo.jpg">
  <v-container class="d-flex justify-start" fill-height fluid text-center>
    <v-col md="4">
      <v-container class="white rounded-lg">
        <v-row>
          <v-col class="text-center mx-auto pb-4" cols="1" sm="4">
            <h1 class="h1 login">Cadastro</h1>
          </v-col>
        </v-row>
        <v-row></v-row>
        <v-divider class="ml-8 mr-8"></v-divider>
        <v-divider class="ml-8 mr-8"></v-divider>
        <v-divider class="mb-8 ml-8 mr-8" ></v-divider>
        <v-row class="elavation-3 mx-auto">
          <v-col>
            <v-form>
              <v-text-field outlined label="Nome" placeholder="Nome" :rules="rules"></v-text-field>
              <v-text-field outlined label="Sobrenome" placeholder="Sobrenome"></v-text-field>
              <v-text-field outlined label="E-mail" placeholder="usuario@gmail.com" :rules="rules"></v-text-field>
              <v-text-field outlined label="Senha"
                placeholder="Senha"
                :rules="rules"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append="show = !show">
              </v-text-field>
              <v-divider></v-divider>
              <v-divider></v-divider>
              <v-divider class="mb-8"></v-divider>
            <v-btn class="mb-4" dark color="#4A3CA5" @click="cadastrar" width="95%" height="50px">Cadastrar</v-btn>
            <v-text class="text--disabled cursor-pointer" font-family="arial" @click="voltarLogin">Voltar para o login</v-text>
          </v-form>
          </v-col>
        </v-row>
    </v-container>
    </v-col>
  </v-container>
  </v-img>
</template>

<script>
  export default {
    data() {
      return {
        user:{},
        show: false,
        rules: [
        value => !!value || 'Campo obrigatório*',
      ],
      };
    },
    methods: {
      reset() {
        this.user = {};
      },
      voltarLogin(){
        this.$router.push({ name: "LoginView" });
      },
      cadastrar(){
        this.$router.push({ name: "PerfilView" });
      }
      },
  };
</script>

<style>
.login{
  color: #4A3CA5;
}
.cursor-pointer{
  cursor: pointer;
}
</style>