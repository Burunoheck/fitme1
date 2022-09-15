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
            <v-form form>
              <v-text-field outlined label="Nome" placeholder="Nome" :rules="rules"></v-text-field>
              <v-text-field outlined label="Sobrenome" placeholder="Sobrenome"></v-text-field>
              <v-text-field outlined label="E-mail" placeholder="E-mail" :rules="rules"></v-text-field>
              <v-text-field outlined label="Senha"
                placeholder="Senha"
                :rules="rules"
                v-model="user.password"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append="show = !show">
              </v-text-field>
              <v-divider></v-divider>
              <v-divider></v-divider>
              <v-divider class="mb-8"></v-divider>
            <v-btn class="mx-2" dark color="#4A3CA5" @click="login" width="95%" height="50px">Cadastrar</v-btn>
          </v-form>
          </v-col>
        </v-row>
    </v-container>
    </v-col>
      
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
        rules: [
        value => !!value || 'Campo obrigatório*',
      ],
      };
    },
    methods: {
      reset() {
        this.user = {};
      },
      login() {
        if (this.user.email === 'bruno' && this.user.password === 'bruno') {
          this.$router.push({ name: "PerfilView" });
        } else {
          this.errorLogin = true;
      }
      },
      criarConta(){
        this.$router.push({ name: "CadastroView" });
      },
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