const aluno = require('./aluno');

const andre = new aluno.construtor('André', 0, [8, 9, 7]);
aluno.aumentarFaltas(andre);
aluno.aumentarFaltas(andre);

const bruno   = new aluno.construtor('Bruno', 0, [6, 5, 4]);
aluno.aumentarFaltas(bruno);

const carlos     = new aluno.construtor('Carlos', 0, [8, 7, 7]);
aluno.aumentarFaltas(carlos);
const daniel     = new aluno.construtor('Daniel', 0, [2, 6, 7]);
aluno.aumentarFaltas(daniel);

module.exports = {
    andre,
    bruno,
    carlos,
    daniel,    
}