<template>
  <v-container class="fundo d-flex teste" fluid>
    <v-app>
      <v-app-bar app color="#0C0B30" class="cabecalho" dark elevation="3">
        <v-list-item>
          <h1>Fitme</h1>
        </v-list-item>
        <v-list-item-group class="d-flex">
          <v-list-item>
            <v-icon size="35" class="mr-4" name="usuario">mdi-account-circle Nome_Usuário</v-icon>
            <label for="usuario" class="cursor-pointer">Nome_Usuário</label>
          </v-list-item>
          <v-list-item @click="sair">Sair</v-list-item>
        </v-list-item-group>
      </v-app-bar>
    </v-app>
  </v-container>
</template>
  
<script>
export default {
  data() {
    return {
      sidebar: true,
      mini: false,
      items: [
        {
          title: "Home",
          icon: "mdi-account",
          to: "/home",
        },
        {
          title: "Perfil",
          icon: "mdi-account-cog",
          to: "/perfil",
        },
        {
          title: "Sair",
          icon: "mdi-exit-to-app",
          to: "/",
        },
      ],
    };
  },
};
</script>
  
<style>
html {
  overflow-y: hidden;

}

.fundo {
  background-color: #083C89;
  width: 100%;
  max-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.teste {
  overflow-y: hidden;
}
</style>
  