<template>
  <v-img max-height="100%" max-width="100%" src="@/assets/images/exercicio-fisico-metabolismo.jpg">
  <v-container class="d-flex justify-start" fill-height fluid text-center>
    <v-col md="4">
      <v-container class="white rounded-lg">
        <v-row>
          <v-col class="text-center mx-auto pb-4" cols="1" sm="4">
            <h1 class="h1 login">Login</h1>
          </v-col>
        </v-row>
        <v-row class="elavation-3 mx-auto">
          <v-col>
            <v-form form>
              <v-text-field outlined label="Nome de Usuário" placeholder="Nome" v-model="user.nome" ></v-text-field>
              <v-text-field outlined label="Senha"
                placeholder="Senha"
                v-model="user.senha"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append="show = !show">
              </v-text-field>
            <v-btn class="mx-2" dark color="#4A3CA5" @click="login" width="95%" height="50px">Login</v-btn>
            <v-row class="d-flex mt-4">
              <v-divider width="auto" class="mt-3 ml-8"></v-divider>
              <v-text class="ml-2 mr-2 text--disabled" font-family="arial">ou continue com</v-text>
              <v-divider width="auto" class="mt-3 mr-8"></v-divider>
            </v-row>
            <v-row class="d-flex justify-space-between ml-10 mr-10 mt-5 mb-2">
              <v-icon x-large color="red">
                mdi-gmail
              </v-icon>
              <v-icon x-large color="primary">
                mdi-facebook
              </v-icon>
              <v-icon x-large color="indigo">
                mdi-linkedin
              </v-icon>
            </v-row>
            <v-text class="text--disabled cursor-pointer" font-family="arial" @click="criarConta">Não tem uma conta? Crie aqui</v-text>
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
      };
    },
    methods: {
      reset() {
        this.user = {};
      },
      login() {
        if (this.user.nome === 'bruno' && this.user.senha === 'bruno') {
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