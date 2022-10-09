//Notas escolares

let score = Math.floor(Math.random() * 100)

if(score >= 90 && score <= 100){
  console.log('A')
}else if(score >= 80 && score <= 89){
  console.log('C')
}else if(score >= 70 && score <= 79){
  console.log('B')
}else if(score >= 60 && score <= 69){
  console.log('D')
}else if(score >= 0 && score < 60){
  console.log('F')
}else{
  console.log('Nota inválida')
}


//Fluxo de caixa familiar

var family = {
  incomes: [300, 4400, 330],
  expenses: [100, 50, 350, 1000, 150, 900]
}

function sum(array){
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance(){
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  const total = calculateIncomes - calculateExpenses

  if(total >= 0){
    console.log('Seu saldo é positivo')
    console.log(`Saldo: R$ ${total}`)
  }else{
    console.log('Seu saldo é negativo')
    console.log(`Saldo: R$ ${total}`)
  }
}

calculateBalance()


//Celsius to Fahrenheit

function transformDegree(degree){
  const celsiusExists = degree.toUpperCase().includes('C')
  const farenheitExists = degree.toUpperCase().includes('F')

  if(!celsiusExists && !farenheitExists){
    throw new Error('Grau não identificado')
  }

  let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = (farenheit) => (farenheit - 32) * 5/9
  let degreeSign = 'C'

  if(celsiusExists){
    updatedDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = (celsius) => celsius * 9/5 +32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('50C'))
  console.log(transformDegree('50Z'))
} catch (error) {
  console.log(error.message)
}

//Buscando e encontrando dados em Array

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason"
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter"
      }
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Curry"
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Curry"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      }
    ],
  }
]

const totalCategories = booksByCategory.length
console.log(totalCategories)

for(let category of booksByCategory){
  console.log('Total de livros da categoria', category.category)
  console.log(category.books.length)
}

function countAuthor(){
  let authors = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }
  }
  console.log("Total de autores:", authors.length)
}
countAuthor()

function booksOfAuthor(author){
  let books = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(book.author === author){
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do author ${author}: ${books.join(", ")}`)
}
booksOfAuthor('T. Harv Eker')