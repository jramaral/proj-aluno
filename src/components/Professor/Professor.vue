<template>
  <div>
    <titulo texto="Professores" />
    <table>
      <thead>
        <th>Cod.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length>0">
        <tr v-for="(professor, index) in professores" :key="index">
          <td class="centralizarTexto">{{professor.id}}</td>

          <router-link
            to="/alunos"
            tag="td"
            style="cursor: pointer"
          >{{professor.nome}} {{professor.sobrenome}}</router-link>

          <td class="centralizarTexto">3</td>
        </tr>
      </tbody>
      <tfoot v-else>
        <p>Não há registros</p>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../share/Titulo";
export default {
  components: {
    Titulo
  },
  data() {
    return {
      professores: []
    };
  },
  props: {},
  created() {
    this.$http
      .get("http://localhost:3000/professores")
      .then(res => this.professores =  res.data)
      
  },
};
</script>

<style scoped>
.centralizarTexto {
  text-align: center;
}
</style>