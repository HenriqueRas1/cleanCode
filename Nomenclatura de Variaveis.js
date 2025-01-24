
const users = ["Henrique", "Bruno", "Breno"]

const filtered = users.filter(user => {
    return user.startsWith("B")
}) 

console.log(filtered)