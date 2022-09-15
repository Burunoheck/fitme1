<template>
  <v-container class="fundo d-flex" fluid>
    <v-app>
      <v-app-bar app color="#0C0B30" class="cabecalho d-flex justify-space-between" dark elevation="3">
        <v-list-item>
          <h3>Fitme</h3>
        </v-list-item>
        <v-list-item>
          <v-icon x-large class="mr-4">mdi-account-circle</v-icon>
          <v-text>Nome_Usuário |</v-text>
          <v-text>Sair</v-text>
        </v-list-item>
      </v-app-bar>
    </v-app>
    <v-container>
    <v-col cols="12">
      <h1 class="h1 mb-8 ml-15">Nome do Usuário</h1>
    <v-form>
      <v-container>
        <v-text-field
        background-color="white"
            label="Nome"
            placeholder="Nome"
            filled
            rounded
            dense
            width="50%"
          ></v-text-field>
          <v-text-field
          background-color="white"      
            label="Sobrenome"
            placeholder="Sobrenome"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
          background-color="white"
            label="E-mail"
            placeholder="E-mail"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
          background-color="white"
            label="Senha"
            placeholder="Senha"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            background-color="white"
            label="Data de Nascimento"
            placeholder="Data de Nascimento"
            filled
            rounded
            dense
          ></v-text-field>
        <v-btn color="#083C89" dark width="100%">
          salvar alterações
        </v-btn>
      </v-container>
    </v-form>
  </v-col>
</v-container>
    <v-col cols="8" class="ml-10">
      <v-row class="d-flex justify-center">
        <h1 class="h1">
          Progresso Semanal
        </h1>
      </v-row>
      <v-img src="@/assets/images/0xcexG1C9BroKmojA.png"
      class="mt-15"></v-img>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return{
      nome: "",
      sobrenome: "",
    }
  }
};
</script>

<style>
.fundo{
  background-color: #083C89;
}
h1{
  color: white;
}
</style>
