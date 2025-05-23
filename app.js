const { createApp, ref } = Vue

createApp({
  data() {
    return {
      eModoEscuro: false
    }
  },
  methods: {
    mudarModo() {
      this.eModoEscuro = !this.eModoEscuro;
    }
  },
  computed: {
    temaAtual() {
      return this.eModoEscuro ? "modoEscuro.css" : "modoClaro.css"
    }
  }
}).mount('#app')