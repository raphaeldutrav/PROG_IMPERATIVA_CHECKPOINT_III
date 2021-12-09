const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [
        estudantes.andre,
        estudantes.bruno,
        estudantes.carlos,
        estudantes.daniel
    ],
    adicionarAluno: function(nome, faltas, notas) {
        this.listaEstudantes.push(new aluno.construtor(nome, faltas, notas));
    },
    aprovacao: function(estudante) {
        const media = aluno.calcularMedia(estudante);

        if (
            media >= this.notaAprovacao &&
            estudante.quantidadeFaltas < this.faltasMaximas
        ) {
            return `O aluno ${estudante.nome} foi aprovado`;
        } else if (
            estudante.quantidadeFaltas === this.faltasMaximas &&
            media > this.notaAprovacao * 1.1
        ) {
            return `O aluno ${estudante.nome} foi aprovado com ressalvas`;
        } else {
            return `O aluno ${estudante.nome} foi reprovado`;
        }
    },
    listaAprovados: function() {
        let todos = [];

        this.listaEstudantes.forEach(estudante => {
            todos.push(this.aprovacao(estudante));
        });

        return todos;
    }
}

curso.adicionarAluno('Elson', 1, [8, 7, 6]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});


//console.log(curso);