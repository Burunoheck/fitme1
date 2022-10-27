<template>
  <v-container class="fundo d-flex" fluid>
    <v-app>
      <v-app-bar app color="#0C0B30" class="cabecalho" dark elevation="3">
        <v-list-item>
          <h1>Fitme</h1>
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

      <v-navigation-drawer color="#052d69" class="mt-14 accent-4" permanent>
        <v-list-item-content>
          <v-list-item-title
            class="text-h4 font-weight-black mt-3 ml-4"
            style="color: white"
          >
            Início
          </v-list-item-title>
          <v-divider></v-divider>
        </v-list-item-content>
        <template>
          <v-list-item-content>
            <v-toolbar dense floating elevation="3" class="ml-3 mr-3">
              <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                single-line
                class="ml-1 mr-1"
                label="Procurar"
              ></v-text-field>
            </v-toolbar>
          </v-list-item-content>
        </template>
            <!-- <v-list>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list> -->

        <!-- <template #append>
          <div class="pa-2">
            <v-btn block color="#0C0C1F"> Logout </v-btn>
          </div>
        </template> -->
      </v-navigation-drawer>

      <!-- <template>
        <v-app-bar width="10vw" color="#052d69" lights-out dark prominent>
          <v-toolbar-title></v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>
      </template> -->
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

.fundo {
  padding: 0;
  overflow-y: hidden;
  background-color: #083c89;
}

.menu {
  font-size: 20px;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: rgb(163, 206, 209);
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.473);
  border-radius: 200px;
  border: 1px solid rgb(163, 206, 209);
}
</style>
