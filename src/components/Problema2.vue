

<template>
  <div>
    <h1>Problema 2: valor de cadena</h1>
    <textarea id="input-2" v-model="inputText"></textarea>
    <button @click="calculate">Calcular</button>
    <pre id="output-2">res: {{ outputText }}</pre>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      inputText: "",
      outputText: "",
    };
  },
  methods: {
    async calculate() {
      // Aquí puedes llamar a la API y pasar el valor de this.inputText
      // Luego, actualiza this.outputText con la respuesta de la API
      const inputValue = document.getElementById('input-2').value;
      const url = `http://127.0.0.1:8000/problema-1/${inputValue}/`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.text();
          document.getElementById('output-2').textContent = data;
        } else {
          document.getElementById('output-2').textContent = `Error al consultar la API: ${response.status} - ${response.statusText}`;
        }
      } catch (error) {
        // document.getElementById('output-2').textContent =`Error al consultar la API: ${error}`;
      }
    },
  },
};
</script>
