            // JOUR 1 //

// const myLastName = "Regrag"
// const myFirstName = "Karim"

// // const myFullName = myFirstName + " " + myLastName 
// const myFullName = `${myFirstName} ${myLastName}`
// console.log(myFullName)

// let name1 = "J'habite à "
// name1 += "Talence"
// console.log(name1)

// let age1 = 12
// let age2 = 23
// let age3 = 30
// let age4 = 70 

// if (age4 <= 10) {
//     console.log("Tu as moins de 10 ans")
// } else if (age4 >=11 & age4 <=30){
//    console.log("Tu as entre 11 et 30 ans") 
// } else if (age4 >=31 & age4 <=50){
//     console.log("Tu as entre 31 et 50 ans") 
// } else (age4 >50)
//     console.log("Tu as plus de 50 ans")

//  const myIdentity = {
//     firstname: "Karim",
//     lastname: "Regrag",
//     age: 23,
//     town: "Bordeaux"
//  }
 
// //  const fullName = myIdentity.firstname + " " + myIdentity.lastname
// // const fullName = `${myIdentity.firstname} ${myIdentity.lastname}`
// let fullName = `Bonjour, je m'appelle ${myIdentity.firstname} ${myIdentity.lastname}, j'ai ${myIdentity.age} ans, et j'habite ${myIdentity.town}`
//  console.log(fullName)

//  let adult = "adulte"

//  if (myIdentity.age < 18) {
//     adult = "enfant"
//  }
// fullName += `et je suis un ${adult}`
// console.log(fullName)

// const person1 = {
//     firstname: "Paul",
//     lastname: "Doazan",
//     age: 35,
//     town: "Marseille",
// }
// const person2 = {
//     firstname:"Pierre",
//     lastname:"Doazan",
//     age: 17,
//     town:"Bordeaux",
// }
// const person3 = {
//     firstname:"Mathilde",
//     lastname:"Doazan",
//     age: 15,
//     town:"Paris",
// }
// let personToTest = person2
// // if(personToTest.town === "Bordeaux" & personToTest.age <18) {
// //     console.log(`${personToTest.firstname} est mineur à Bordeaux`)
// // } else {
// //     console.log(`${personToTest.firstname} n'est pas mineur à Bordeaux`)
// // }
// if(personToTest.town === "Paris" || personToTest.town === "Marseille") {
//     console.log(`${personToTest.firstname} n'habite pas à Bordeaux.`)
// }    else {
//         console.log(`${personToTest.firstname} habite à Bordeaux.`)
// }
//  let myArray = ["Sara", "Alice", "Antoine", "Stéphane"]
//  let myArrayOfObjects = [
//     {name: "Sara", gender: "f"},
//     {name:"Alice", gender: "f"},
//     {name:"Antoine", gender: "m"},
//     {name:"Stéphane", gender: "m"}
// ]

//  let fName = myArray[3]

//  console.log(`${myArray[0]}, ${myArray[1]} et ${myArray[3]} sont partis.`)

// let objectToTest = myArrayOfObjects[2]
// let gone = "parti"

// if (objectToTest.gender === "f")
// gone += "e" 

// console.log(`${objectToTest.name} est parti${gone} !`)

                // JOUR 2 //

// let person1 = {
//     name: `Max`,
//     vehicle:`car`,
//     town: `Paris`
// }
// let person2 = {
//     name: `Nathalie`,
//     vehicle:`bike`,
//     town: `Bordeaux`
// }
// let person3 = {
//     name: `Cathy`,
//     vehicle:`car`,
//     town: `Lyon`
// }
// let personToTest = person1

// if(personToTest.town == `Paris`) {
//     console.log(`${personToTest.name} n'a pas besoin de se rendre a Paris`)
// } else {
//     if(personToTest.vehicle === `car`) {
//         console.log(`${personToTest.name} peut se rendre a Paris`)
//     } else {
//         console.log(`${personToTest.name} ne peut pas se rendre a Paris`)
//     }  
// } 

// const myArray = [2, 5, 7, 9]

// const myResult = myArray[0] + myArray[1] + myArray[2] + myArray[3]

// console.log(`${myResult}`)

// const arr = [
//     {
//         brand: "Citroen" , 
//         model: "Berlingo", 
//         year: 2014, 
//         electric : false
//     },
//     {
//         brand: "Renault" , 
//         model: "Kangoo", 
//         year: 2018, 
//         electric: true
//     }
// ]

// let isElectricSentence = "est électrique"
// let arrBrandTest = arr[0]
// if(arrBrandTest.electric === false){
//     isElectricSentence = "n'est pas électrique"
// }

// console.log(`Le modèle ${arrBrandTest.brand} ${arrBrandTest.year} de la marque ${arrBrandTest.model} ${isElectricSentence}`)



// for (let index = 0; index < 50; index++) {
//     if(index%3==0) {
//         console.log(`multiple de 3 : ` + index)
//     }
// }

// let sum = 0

// for (let index = 0; index < 100; index++) {
//     if(index%index === 1){
//        sum += index
//        console.log(sum)   
//     }
    
// }

// let numbers = [2, 4, 1, 5, 3]
// console.log(numbers.length)



// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 10) {
//          myResult += numbers[i]
//     }
           
// }
        
// console.log(myResult)

// let numbers = [12, 4, 67, 32, 11, 3, 1, 14]
// let sum = 0
// let average = 0
// let myResult = 0

// for(let i=0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// average = sum/numbers.length

// console.log(sum)

// for(let i=0; i < numbers.length; i++) {
//     if(numbers[i] > average) {
//         myResult += numbers[i]
//     }
// }

// console.log(myResult)

const stripes = document.querySelectorAll('.stripe')

for (let i=0; i < stripes.length; i++) {
    stripes[i].style.backgroundColor = "green" 
}

for (i=0; i < stripes.length; i++) {
    if (i%2 === 0) {
        stripes[i].style.backgroundColor = "red"
    } else {
        stripes[i].style.backgroundColor = "yellow"
    }
}