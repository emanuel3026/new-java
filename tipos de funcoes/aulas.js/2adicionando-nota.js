const notas = [10,9,8];

notas.push(8.2)

const sum = (arg) => arg.reduce((acc, curr) => acc + curr,0)

const media = sum(notas) / notas.length;

console.log(media.toFixed(2))
