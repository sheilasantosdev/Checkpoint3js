class Aluno {
    constructor (nome, faltas, notas){
      this.nome = nome
      this.faltas = faltas
      this.notas = notas
    }
    calcularMedia () {
        let soma = 0;
        this.notas.forEach(nota => {
          soma += nota;
        })
        return soma / this.notas.length; 
        
    }
    faltas () {
    this.qtdfaltas += 1;
    }
}

const aluno1 = new Aluno('Afra', 0, [10, 10, 10])
const aluno2 = new Aluno('Bianca', 2, [9, 10, 6])
const aluno3 = new Aluno('Gabriel', 1, [6, 9, 4])
const aluno4 = new Aluno('Lariana', 8, [10, 10, 2])

console.log(aluno1, aluno4)
console.log(aluno4.calcularMedia());

const curso = {
    nome: 'Programação',
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: [],
    adicionarAluno(aluno) {
      this.listaEstudantes.push(aluno);
    },
    statusAluno(aluno){
      const media = aluno.calcularMedia();
      if(media >= this.notaAprovacao && aluno.qtdFaltas < this.faltasMaximas){
        return true;
      } else if(aluno.qtdFaltas === this.faltasMaximas && media >= this.notaAprovacao * 1.1){
        return true;
      }
      return false;
    },
      listaStatus() {
        return this.listaEstudantes.map((aluno) => this.statusAluno(aluno));
      }
    
  }

curso.adicionarAluno(aluno1);
curso.adicionarAluno(aluno2);
curso.adicionarAluno(aluno3);
curso.adicionarAluno(aluno4);