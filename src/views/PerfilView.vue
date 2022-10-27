<template>
  <v-container class="fundo d-flex" fluid>
    <v-app>
      <v-app-bar app color="#0C0B30" class="cabecalho" dark elevation="3">
        <v-list-item>
          <h1>Fitme</h1>
        </v-list-item>
        <v-list-item-group class="d-flex">
          <v-list-item>
            <v-icon size="35" class="mr-4" name="usuario"
              >mdi-account-circle Nome_Usuário</v-icon
            >
            <label for="usuario" class="cursor-pointer">Nome_Usuário</label>
          </v-list-item>
            <v-list-item @click="logout">Sair</v-list-item>
        </v-list-item-group>
      </v-app-bar>
    </v-app>
    <v-container>
      <v-col cols="12">
        <h1 class="h1 d-flex justify-center">Nome do Usuário</h1>
        <v-icon dark size="300" class="d-flex justify-center" name="usuario"
          >mdi-account-circle Nome_Usuário</v-icon
        >
        <v-divider dark></v-divider>
        <v-divider dark></v-divider>
        <v-divider dark class="mb-5"></v-divider>
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
            >
            </v-text-field>
            <v-text-field
            background-color="white"
            label="E-mail"
            placeholder="usuario@gmail.com"
            filled
            rounded
            dense
            >
          </v-text-field>
          <v-text-field
          placeholder="Senha"
          background-color="white"
          label="Senha"
          filled
          rounded
          dense
          :rules="rules"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
          >
        </v-text-field>
        <v-text-field
          background-color="white"
          label="Sexo"
          placeholder="Sexo"
          filled
          rounded
          dense
        >
        </v-text-field>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  background-color="white"
                  filled
                  rounded
                  dense
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
              </v-date-picker>
            </v-menu>
          </v-col>
        <v-btn color="#083C89" dark width="100%"> salvar alterações </v-btn>
       </v-container>
      </v-form>
     </v-col>
    </v-container>
    <v-col cols="8" class="ml-10">
      <v-row class="d-flex justify-center">
        <h1 class="h1">Progresso Semanal</h1>
      </v-row>
      <v-img src="@/assets/images/0xcexG1C9BroKmojA.png" class="mt-15"></v-img>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  meta: {
    auth: true
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  data() {
    return {
      usuario: "",
      sobrenome: "",
      user: {},
      show: false,
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    sair() {
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>

<style>
.fundo {
  background-color: #083c89;
}

h1 {
  color: white;
}

.cursor-pointer {
  cursor: pointer;
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
