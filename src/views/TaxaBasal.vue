<template>
  <v-container class="pa-8" fluid>

    <h1 class="h1 pa-8" style="color: white">
      Calculadora de Taxa Metabólica Basal
    </h1>
    <v-form>
      <!-- <v-row> -->
    <v-container class="pl-8">
      <v-col cols="12" sm="6" md="3">
        <v-text-field 
          outlined
          cols="12"
          sm="6"
          md="3"
          dark
          label="Peso(kg)"
          v-model="novaTarefa"
          @keydown.enter="adicionar"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          outlined
          dark
          label="Idade(anos)"
          v-model="novaTaref"
          @keydown.enter="adiciona"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          outlined
          dark
          label="Altura(centímetros)"
          v-model="novaTare"
          @keydown.enter="adicion"
        >
        </v-text-field>
        <el-skeleton :rows="5" />
      </v-col>
    <v-btn id="corzinha" style="color: gray">
      <h3>Calcular</h3>
    </v-btn>
    <h2 class="h2 pl-2 pt-8" style="color: white">Resultado:</h2>
    <h3 class="h3 pl-2" style="color: white"></h3>
      </v-container>
      <!-- </v-row> -->
    </v-form>
    
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      novaTarefa: "",
      tarefas: [],
    };
  },
  methods: {
    adicionar(e) {
      e.preventDefault();
      this.tarefas.push({ titulo: this.novaTarefa });
      this.novaTarefa = "";
    },
  },
};
</script>
  
  <style>
#corzinha {
  background-color: lightcyan;
}
</style>