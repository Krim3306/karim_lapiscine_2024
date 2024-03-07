const myLastName = "Regrag"
const myFirstName = "Karim"

// const myFullName = myFirstName + " " + myLastName 
const myFullName = `${myFirstName} ${myLastName}`
console.log(myFullName)

let name1 = "J'habite à "
name1 += "Talence"
console.log(name1)

let age1 = 12
let age2 = 23
let age3 = 30
let age4 = 70 

if (age4 <= 10) {
    console.log("Tu as moins de 10 ans")
} else if (age4 >=11 & age4 <=30){
   console.log("Tu as entre 11 et 30 ans") 
} else if (age4 >=31 & age4 <=50){
    console.log("Tu as entre 31 et 50 ans") 
} else (age4 >50)
    console.log("Tu as plus de 50 ans")

 const myIdentity = {
    firstname: "Karim",
    lastname: "Regrag",
    age: 23,
    town: "Bordeaux"
 }
 
//  const fullName = myIdentity.firstname + " " + myIdentity.lastname
// const fullName = `${myIdentity.firstname} ${myIdentity.lastname}`
let fullName = `Bonjour, je m'appelle ${myIdentity.firstname} ${myIdentity.lastname}, j'ai ${myIdentity.age} ans, et j'habite ${myIdentity.town}`
 console.log(fullName)

 let adult = "adulte"

 if (myIdentity.age < 18) {
    adult = "enfant"
 }
fullName += `et je suis un ${adult}`
console.log(fullName)

const person1 = {
    firstname: "Paul",
    lastname: "Doazan",
    age: 35,
    town: "Marseille",
}
const person2 = {
    firstname:"Pierre",
    lastname:"Doazan",
    age: 17,
    town:"Bordeaux",
}
const person3 = {
    firstname:"Mathilde",
    lastname:"Doazan",
    age: 15,
    town:"Paris",
}
let personToTest = person2
// if(personToTest.town === "Bordeaux" & personToTest.age <18) {
//     console.log(`${personToTest.firstname} est mineur à Bordeaux`)
// } else {
//     console.log(`${personToTest.firstname} n'est pas mineur à Bordeaux`)
// }
if(personToTest.town === "Paris" || personToTest.town === "Marseille") {
    console.log(`${personToTest.firstname} n'habite pas à Bordeaux.`)
}    else {
        console.log(`${personToTest.firstname} habite à Bordeaux.`)
}
 let myArray = ["Sara", "Alice", "Antoine", "Stéphane"]
 let myArrayOfObjects = [
    {name: "Sara", gender: "f"},
    {name:"Alice", gender: "f"},
    {name:"Antoine", gender: "m"},
    {name:"Stéphane", gender: "m"}
]

 let fName = myArray[3]

 console.log(`${myArray[0]}, ${myArray[1]} et ${myArray[3]} sont partis.`)

let objectToTest = myArrayOfObjects[2]
let gone = "parti"

if (objectToTest.gender === "f")
gone += "e" 

console.log(`${objectToTest.name} est ${gone} !`)