<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1 pa-8" style="color: white">Calculadora de IMC</h1>
    <v-form id="formulario">
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
            for="kilos"
            type="number"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field 
            outlined
            cols="12"
            sm="6"
            md="3"
            dark
            label="Altura(centímetros)"
            for="centimetros"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            outlined
            dark
            label="Metros"
            for="metros"
            type="number"
          >
          </v-text-field>
          <el-skeleton :rows="5" />
        </v-col>
        <v-btn @click="calcular()" id="corzinha" style="color: gray">
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
      imc: "",
    };
  },
  methods: {
    calcular() {
      var formulario = document.getElementById("formulario");
      var kilos = +formulario.kilos.value;
      var metros = +formulario.metros.value;
      var centimetros = +formulario.centimetros.value;
      var altura = (metros * 100 + centimetros) / 100;
      var imc = kilos / (altura * altura);
      formulario.imc.value = imc.toFixed(2);
      if (imc < 20) {
        alert("Você esta abaixo do peso!");
      } else if (imc > 20 && imc <= 25) {
        alert("Peso Ideal");
      } else if (imc > 25 && imc <= 30) {
        alert("Sobrepeso");
      } else if (imc > 30 && imc <= 35) {
        alert("Obesidade Moderada");
      } else if (imc > 35 && imc <= 40) {
        alert("Obesidade Severa");
      } else if (imc > 40 && imc <= 50) {
        alert("Obesidade Morbida");
      } else {
        alert("Gordo");
      }
    },
  },
};
</script>

<style>
#corzinha {
  background-color: lightcyan;
}
</style>
