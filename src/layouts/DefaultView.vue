<template>
  <v-container class="app d-flex" fluid>
    <v-app>
      <v-app-bar id="pagi" app color="#0C0B30" class="cabecalho" dark elevation="3">
        <v-list-item>
          <h1>Página de programação</h1>
        </v-list-item>
        <v-list-item-group class="menu d-flex">
          <v-divider vertical></v-divider>
          <v-list-item>
            <label for="usuario" class="cursor-pointer"> Treino </label>
          </v-list-item>
          <v-divider vertical></v-divider>
          <v-list-item>
            <label for="usuario" class="cursor-pointer">Exercício</label>
          </v-list-item>
          <v-divider vertical></v-divider>
          <v-list-item>
            <label for="usuario" class="cursor-pointer">Alimentação</label>
          </v-list-item>
          <v-divider vertical></v-divider>
          <v-list-item>
            <v-icon size="35" class="mr-4" name="usuario"
              >mdi-account-circle Nome_Usuário</v-icon
            >
            <label for="usuario" class="cursor-pointer">Perfil</label>
          </v-list-item>
          <v-list-item @click="sair()">Sair</v-list-item>
        </v-list-item-group>
      </v-app-bar>
    </v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
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
  methods: {
    sair() {
      console.log("Saiu");
    },
  },
};
</script>

<style>
html {
  margin: 0;
  overflow-y: hidden;
}

#pagi {
  background: linear-gradient(90deg, rgb(12, 77, 181) 0%, rgb(21, 141, 155) 100%)
}
#img {
  border-radius: 50%;
}
.app {
  background: linear-gradient(90deg, rgb(10, 0, 75) 0%, rgb(143, 3, 186) 100%);
}
.menu {
  font-size: 20px;
}

body::-webkit-scrollbar {
  width: 5px;
}
</style>
