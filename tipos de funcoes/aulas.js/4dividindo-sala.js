const alunos = ["João","Juliana","Ana","Caio","Lara","Marjorie","Guilherme","Aline","Fabiana","Andre",
    "Carlos","Paulo","Bia","Vivian","Isabela","Vinicius","Renan","Renata","Dayse","Camilo",
]

console.log(alunos.length)//verifica o tamanho
const sala1 = alunos.slice(0,10)//divide o array criando uma copia, não altera o original
console.log(sala1)

const sala2 = alunos.slice(10)//divide o array criando uma copia, não altera o original
console.log(sala2)

const grupos = 2
const sala3 = alunos.slice(alunos.length / grupos)
console.log(sala3)