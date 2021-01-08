<template >
<div id="app" >
  <div class="container">
    <h1 class="text-center m-5">Pucará Bull</h1>
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="handleSubmit">
          <div class="form-group mb-5">
            <label>Agregar 5 gasolineras (separado por comas y sin espacios)</label>
            <input 
              placeholder="Ej. 1,2,3,4,5"
              type="text" 
              class="form-control"
              v-model="gasolineras"
            />
          </div>
          <div class="form-group mb-5">
            <label>Agregar 5 costos (separado por comas y sin espacios)</label>
            <input 
              class="form-control"
              placeholder="Ej. 1,2,3,4,5"
              type="text" 
              v-model="costos"
            />
          </div>
          <button 
            type="submit"
            class="btn btn-dark btn-lg btn-block"
          >
            Calcular
          </button>
          <div class="alert alert-warning mt-5" role="alert" v-if="resultado">
            <div>{{ respuesta }}</div>
            <div> El resultado es: {{ resultado }} </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
import { calcular } from './lib'
export default {
  data() {
    return {
      gasolineras: '',
      costos:'',
      resultado: null,
    }
  },
 methods: {
    handleSubmit(){
      const arrayGasolineras = this.gasolineras
        .split(",")
        .map((value) => Number(value));
      const arrayCostos = this.costos.split(",").map((value) => Number(value));

      this.resultado = calcular(arrayGasolineras, arrayCostos)
    }
 },
 computed: {
    respuesta: function(){
      return this.resultado === -1 ? "Nunca llegaras" : "Vamos! que si llegamos"
   }
 },
}
</script>

<style>
#app {
  align-items: center;
  color: white;
  display: flex;
  background-color: #5758BB;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  width: 100vw;
  height: 100vh;
}
</style>
