// código sujo
const users = ["Henrique", "Bruno", "Breno"]

const filtered = users.filter(user => {
    return user.startsWith("B")
}) 

console.log(filtered)


const users = ["Henrique", "Bruno", "Breno"]

const usersStartingWithLetterB = users.filter(user => {
    return user.startsWith("B")
}) 

console.log(usersStartingWithLetterB)