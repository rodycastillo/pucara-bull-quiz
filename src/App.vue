<template >
<div id="app" >
  <div class="container">
    <h1 class="text-center m-5">Pucará Bull</h1>
    <div class="row justify-content-center">
      <div class="col-6">
        <form>
          <div class="form-group mb-5">
            <label>Agregar 5 gasolineras (separado por comas y sin espacios)</label>
            <input 
              placeholder="Ej. 1,2,3,4,5"
              type="text" 
              class="form-control"
            />
          </div>
          <div class="form-group mb-5">
            <label>Agregar 5 costos (separado por comas y sin espacios)</label>
            <input 
              class="form-control"
              placeholder="Ej. 1,2,3,4,5"
              type="text" 
            />
          </div>
          <button 
            type="submit"
            class="btn btn-dark btn-lg btn-block"
          >
            Resultado
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
export default {}
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
