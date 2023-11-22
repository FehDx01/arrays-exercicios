//a

const array1 = [10, 23, 45, 18]
const array2 = ["maça", "banana", "chevette"]
const array3 = [14, "panela", true]

function primeiroArray(numerosCopia) {

    numerosCopia = array1.slice()

    numerosCopia.unshift(6)

    console.log(array1)
    console.log(numerosCopia)

}

primeiroArray(array1)

//b

function segundoArray(frasesCopia) {

    frasesCopia = array2.slice()

    frasesCopia.pop()

    console.log(array2)
    console.log(frasesCopia)

}

segundoArray(array2)

//c

function terceiroArray(mistoCopia) {

    mistoCopia = array3.slice()

    mistoCopia.splice(1, 1)

    console.log(array3)
    console.log(mistoCopia)

}

terceiroArray(array3)
