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
      professores: [
        { id: 1, nome: "Jose", sobrenome: "Amaral" },
        { id: 2, nome: "Pedro", sobrenome: "Amaral" },
        { id: 3, nome: "Guilherme", sobrenome: "Amaral" }
      ]
    };
  }
};
</script>

<style scoped>
.centralizarTexto {
  text-align: center;
}
</style>