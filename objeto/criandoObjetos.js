//usando a notação literal
//primeira forma de criar um objeto
const obj1 = {}
console.log(obj1)

//Objeto em JS
//criando apartir de uma função construtora
//console.log(typeof Object, typeof new Objetct)
//const obj2 = new Object
//console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 10.00, 0.15)
const p2 = new Produto('Notebook', 3000.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 8000, 4)
const f2 = criarFuncionario('Maria', 12000, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna objeto..
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)