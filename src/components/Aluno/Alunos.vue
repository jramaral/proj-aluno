<template>
  <div>
    <titulo texto="Aluno" />
    <div>
      <input type="text" placeholder="Nome do Aluno" v-model="nome" v-on:keyup.enter="addAluno()" />
      <button class="btn btnInput" @click="addAluno()">Adicionar</button>
    </div>

    <table>
      <thead>
        <th>Matricula</th>
        <th>Nome</th>
        <th>Opções</th>
      </thead>
      <tbody v-if="alunos.length>0">
        <tr v-for="(aluno, index) in alunos" :key="index">
          <td>{{aluno.id}}</td>
          <td>{{aluno.nome}} {{aluno.sobrenome}}</td>
          <td>
            <button class="btn" @click="remover(aluno)">Remover</button>
          </td>
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
      titulo: "Aluno",
      nome: "",
      alunos: []
    };
  },
  props: {},
  created() {
    this.$http
      .get("http://localhost:3000/alunos")
      .then(res => res.json())
      .then(alu => (this.alunos = alu));
    console.log(this.alunos);
  },
  methods: {
    addAluno() {
      let _aluno = {
        id: "",
        nome: this.nome,
        sobrenome: ""
      };

      this.$http.post("http://localhost:3000/alunos", _aluno).then(res => {
        console.log(res.data);
        this.alunos.push(res.data);
      });
      
      console.log(this.alunos);
      this.nome = "";
    },
    remover(aluno) {

       this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`).then(() => {
        const indice = this.alunos.findIndex(t => t.id === aluno.id);
        this.alunos.splice(indice, 1);
       
      });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: cadetblue;
  display: inline;
}
.btnInput {
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  display: inline;
  background-color: darkgray;
}
</style>
