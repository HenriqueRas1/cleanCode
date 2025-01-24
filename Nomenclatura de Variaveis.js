// código sujo
/* const users1 = ["Henrique", "Bruno", "Breno"]

const filtered = users.filter(user => {
    return user.startsWith("B")
}) 

console.log(filtered) */



// código limpo, por conta do nome da variavel, se torna mais simples de ler
// Evite nomes genericos (ex: data, response, list, args, params)
const users = ["Henrique", "Bruno", "Breno"]

const usersStartingWithLetterB = users.filter(user => {
    return user.startsWith("B")
}) 

console.log(usersStartingWithLetterB)