<template>
  <div>
    <h1>Problema 1: Ajedrez</h1>
    <textarea id="input-1" v-model="inputText"></textarea>
    <button @click="calculate">Calcular</button>
    <pre id="output-1">{{ outputText }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      outputText: "",
    };
  },
  methods: {
    calculate() {
      // Aquí puedes llamar a la API y pasar el valor de this.inputText
      // Luego, actualiza this.outputText con la respuesta de la API
    },
  },
};
</script>
