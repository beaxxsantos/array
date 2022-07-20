let nome = ['Bea', 'Mateus', 'Mauricio','Janaina', 'Bernardo'  ]
console.log(nome)

nome.unshift('Erika')
console.log(nome)

nome.pop()
console.log(nome)

nome.splice(5,0, 'Sonia', 'Sergio')
console.log(nome)

nome.splice(0, 1)
console.log(nome)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
  return a-b
})
console.log(numbers)
