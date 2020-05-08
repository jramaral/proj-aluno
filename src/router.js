import Vue from 'vue'
import Router from 'vue-router'

import Alunos from "./components/Aluno/Alunos.vue";
import Professores from "./components/Professor/Professor"
import Sobre from "./components/Sobre/Sobre"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/professores',
            nome: 'Professores',
            component: Professores
        },
        {
            path: '/alunos/:prof_id',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/alunosall',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: Sobre
        },
    ]
}

)