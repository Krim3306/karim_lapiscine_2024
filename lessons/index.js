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

// const stripes = document.querySelectorAll('.stripe')

// for (let i=0; i < stripes.length; i++) {
//     stripes[i].style.backgroundColor = "green" 
// }

// for (i=0; i < stripes.length; i++) {
//     if (i%2 === 0) {
//         stripes[i].style.backgroundColor = "red"
//     } else {
//         stripes[i].style.backgroundColor = "yellow"
//     }
// }

// let arr = ["Dann","Sami","Karim"]
// let result = ""
// // let result = "`[arr[0],arr[1] et arr[2]] assistent au cours de Javascripte`"

// // console.log(`${arr[0]}, ${arr[1]} et ${arr[2]} assistent au cours de Javascripte`)

// for (let index = 0; index < arr.length; index++) {
//     if (index === arr.length - 1) {
//        result += arr[index] + " " 
//     } else if (index === arr.length - 2) {
//         result += arr[index] + " et "
//     } else {
//         result += arr[index] + " , "
//     }
// }
// result += "assistent au cours de Javascripte"

// console.log(result)

// let numbers = [3, 1, 21, 13, 15, 8, 7]
// let total = 0

// for(let index = 0; index < numbers.length; index++)
//     total += numbers[index]

// console.log(total)

// let total_1 = 0 
// let total_2 = 0

// for (let index = 0; index <numbers.length; index++){
//     if (index < numbers.length/2){
//         total_1 += numbers[index]
//     } else {
//        total_2 += numbers[index]
//     }
// }
// console.log(total_1, total_2)

// let people = [
//     {
//         name: "Jean",
//         age: 28,
//         hasCar: false
//     },
//     {
//         name: "Daniel",
//         age: 17,
//         hasCar: false
//     },
//     {
//         name: "Mathilde",
//         age: 21,
//         hasCar: true
//     },
//     {
//         name: "Oscar",
//         age: 12,
//         hasCar: false
//     },
//     {
//         name: "Adèle",
//         age: 43,
//         hasCar: true
//     },
//     {
//         name: "Romane",
//         age: 61,
//         hasCar: false
//     },
//     {
//         name: "Amandine",
//         age: 8,
//         hasCar: false
//     },
//     {
//         name: "Johanna",
//         age: 25,
//         hasCar: true
//     },
// ]

// let totalAgePeople = 0

// for(let index = 0; index < people.length; index++) {
//     totalAgePeople += people[index].age
// }
// console.log(totalAgePeople)

// let ageAverage = totalAgePeople / people.length
// console.log(ageAverage)

// ageAverage = Math.round(ageAverage * 10) / 10
// console.log(ageAverage)

// let nbPeopleWithCar = 0
// for(let i=0; i < people.length; i++) {
//     if (people[i].hasCar) nbPeopleWithCar++
// }
// console.log(nbPeopleWithCar)

// let text = " "

// for (let index = 0; index < people.length; index++) {
//     if(people[index].hasCar===true) {
//         console.log(people[index].name)
//     }
// }

// for (let index = 0; index < people.length; index++)


// for (let index = 0; index < people.length; index++) {
//     if (people[index].hasCar===true && index === people.length - 1) {
//        text += people[index].name + " " 
//     } else if (index === people.length - 2) {
//         text += people[index].name + " et "
//     } else {
//         text += people[index].name + " , "
//     }
// }
// text += "ont une voiture."

// console.log(text)

// let towns = [`Bordeaux`,`Talence`,`Pessac`,`Mérignac`]


// function getTowns(parameter){
//     let sentence = " "

//     for(i = 0; i < parameter.length; i++){
//         sentence += parameter[i]
//         if(i !== parameter.length - 1) {
//             sentence += " - "
//         }
//     }
        
//     return sentence
// }

// let home = getTowns(towns)

// console.log(home)


// function getTowns(parameter){
//     let sentence = " "

//     for(i = 0; i < parameter.length; i++){
//         sentence += parameter[i].name
//         if(i !== parameter.length - 1) {
//             sentence += " - "
//         }
//     }
        
//     return sentence
// }

// let home = getTowns(people)

// console.log(home)

// let myArrayOfObjects = [
//     { name: 'Sara', gender: 'f' },
//     { name: 'Alice', gender: 'f' },
//     { name: 'Antoine', gender: 'm' },
//     { name: 'Stéphane', gender: 'm' },
// ]

// let objectToTest = myArrayOfObjects[2]
// let gone = "parti"

// if (objectToTest.gender === "f") {
//     gone += 'e'
// }

// console.log(`${objectToTest.name} est ${gone} !`)

// for(let i = 0; i < myArrayOfObjects.length; i++) {
//     logCorrectSentence(myArrayOfObjects[i])

// function logCorrectSentence(element){
//     if (element.gender === "f") {
//         console.log(`${element.name} est ${gone}e !`)
//     } else {
//         console.log(`${element.name} est ${gone} !`)
//         }
//     }
// }

// let numbers_a = [34, 12, 31, 5, 54, 6]
// let numbers_b = [25, 58, 22, 6, 1, 35]
// // let minimum = numbers_a[0]
// let average = 0
// let sum = 0 


// // for(let i=0; i < numbers_a.length; i++) {
// //     if (numbers_a[i] < minimum){
// //         minimum = numbers_a[i]
// //     }
// // }

// // console.log(minimum)

// // function getMinimum(arrNumbers){
// //     let minimum = arrNumbers[0]
// //     for(let i=0; i < arrNumbers.length; i++){
// //         if (arrNumbers[i] < minimum){
// //     minimum = arrNumbers[i]
// //     // console.log(minimum)
// //     }
// //     }
// //     return minimum
// // }
// // let min_a=getMinimum(numbers_a)
// // console.log(min_a)

// // let min_b=getMinimum(numbers_b)
// // console.log(min_b)

// // function getAverage(arrNumbers){
// //     for(let i=0; i < arrNumbers.length; i++){
// //         sum += arrNumbers[i]
// //         average = sum/arrNumbers.length
// //     }
// //     return average
// // }

// // let average_a = getAverage(numbers_a)
// // console.log(average_a)
// // let average_b = getAverage(numbers_b)
// // console.log(average_b) 

// // function getAverage(arrNumbers){
// //     for(let i=0; i < arrNumbers.length; i++){
// //         sum += arrNumbers[i].age
// //     }
// //     average = Math.round(sum * 1 / arrNumbers.length) / 1
// //     return average
// // }

// // let average_people = getAverage(people)
// // console.log(average_people)

// // CALCUL DE L'IMC : POIDS / (TAILLE * TAILLE)

// const person_1 = {
//     name:"Jean",
//     size: 1.78,
//     weigth: 75
// }
// const person_2 = {
//     name:"Marc",
//     size: 1.92,
//     weigth: 86
// }
// const person_3 = {
//     name:"Julie",
//     size: 1.65,
//     weigth: 62
// }
// const person_4 = {
//     name:"Paul",
//     size: 1.75,
//     weigth: 72
// }

// const imc_1 = getIMC(person_1)
// console.log(`${person_1.name} a un IMC de ${imc_1}`)

// const imc_2 = getIMC(person_2)
// console.log(`${person_2.name} a un IMC de ${imc_2}`)

// function getIMC(param) {
//     let imc = Math.round(param.weigth * 100 / (param.size * param.size) / 100)
//     return imc
// }

// function logIMC(person) {
//     let imc = getIMC(person)
//     console.log(`${person.name} a un IMC de ${imc}`)
// }

// imc = logIMC(person_1)
// imc = logIMC(person_2)
// imc = logIMC(person_3)
// imc = logIMC(person_4)

// const people = [person_1, person_2, person_3, person_4]

// const result_imc = biggestIMC(people)
// console.log(result_imc)
// // logIMC(result_imc)

// function biggestIMC(arr) {
//     let maxIMC = arr[0]
//     let maxPersonIMC = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if (getIMC(arr[i]) > maxIMC){
//             maxIMC = getIMC(arr[i])
//             maxPersonIMC = arr[i]
//         }
//     }
//     return maxPersonIMC
// }



// let arrNumbers_1 = [2, 7, 3, 1, 4]
// let min_1
// let arrNumbers_2 = [12, 17, 13, 11, 14, 31, 6, 28]
// let min_2

// function getMinimum(arrNumbers){
//     let minimum = arrNumbers[0]
//     for(let i = 0; i < arrNumbers.length; i++) {
//         if (arrNumbers[i] < minimum){
//             minimum = arrNumbers[i]
//         }
//     }
//     return minimum
// }

// min_1 = getMinimum(arrNumbers_1)
// min_2 = getMinimum(arrNumbers_2)
// console.log(min_1, min_2)

// const btn = document.querySelectorAll(".btn")
// btn.textContent = "Hello World"
// btn.style.color = "white"
// // const btnBlue = document.querySelector(".btn_blue")
// // btnBlue.textContent = "Hello World"
// // btnBlue.style.color = "white"
// // const btnyellow = document.querySelector(".btn_yellow")
// // btnyellow.textContent = "Hello World"
// // btnyellow.style.color = "white"
// // const btnred = document.querySelector(".btn_red")
// // btnred.textContent = "Hello World"
// // btnred.style.color = "white"

// // for(let i = 0; i < btn.length; i++) {
// //     btn[i].addEventListener("click", onBtnClick)
// // }

// btnBlue.addEventListener("click", onBtnClick)
// btnyellow.addEventListener("click", onBtnClick)
// btnred.addEventListener("click", onBtnClick)

// let btnclicked = false
// function onBtnClick() {
//     if (btnclicked){
//         btnclicked = false
//         btn.textContent = "Clicked"
//     } else {
//         btnclicked = true
//         btn.textContent = "Hello World"
//     }
// }

// INTERACTION AVEC LE DOM
let btnBlue = document.querySelector(".btn-blue")
// btnBlue.textContent = "Salut"
// btnBlue.style.color = "white"
let btnYellow = document.querySelector(".btn-yellow")
let btnRed = document.querySelector(".btn-red")



const btnsArray = document.querySelectorAll(".btn")

const container = document.querySelector(".container")



for(let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].isClicked = false
    btnsArray[i].addEventListener("click", onBtnClick)
}

// btnBlue.isClicked = false
// btnYellow.isClicked = false
// btnRed.isClicked = false

// btnBlue.addEventListener("click", onBtnClick)
// btnYellow.addEventListener("click", onBtnClick)
// btnRed.addEventListener("click", onBtnClick)

// let btnBlueClicked = false
// let btnYellowClicked = false
// let btnRedClicked = false

function onBtnClick(e) {
    e.currentTarget.isClicked = !e.currentTarget.isClicked
    

    // container.style.backgroundColor = e.currentTarget.textContent
    let color_1 = Math.random()*255
    let color_2 = Math.random()*255
    let color_3 = Math.random()*255
    
    // for(let i = 0; i < btnsArray.length; i++) {
    //     btnsArray[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    // }

    container.style.backgroundColor = `rgb(${color_1}, ${color_2}, ${color_3})`
    
    if(e.currentTarget.isClicked) {
        e.currentTarget.style.transform = "rotate(360deg)"
    } else{
        e.currentTarget.style.transform = "rotate(0deg)"
    }
}

// function onBtnBlueClick() {
//     btnBlueClicked = !btnBlueClicked
//     if (btnBlueClicked) {
//         btnBlue.textContent = "Salut"
//     } else {
//         btnBlue.textContent = "Hello"
//     }
// }

// function onBtnYellowClick() {
//     if (btnYellowClicked) {
//         btnYellowClicked = false
//         btnYellow.textContent = "Salut"
//     } else {
//         btnYellowClicked = true
//         btnYellow.textContent = "Hello"
//     }
// }

// function onBtnRedClick() {
//     if (btnRedClicked) {
//         btnRedClicked = false
//         btnRed.textContent = "Salut"
//     } else {
//         btnRedClicked = true
//         btnRed.textContent = "Hello"
//     }
// }


console.log("Hello")

const btnsTab = document.querySelectorAll(".btn")
const numbersTab = document.querySelectorAll(".number")
const result = document.querySelector(".result")
const refreshDiv = document.querySelector(".refresh")

// let randomNumbers = []
let correctResult = 0

for(let i = 0; i < btnsTab.length; i++){
    btnsTab[i].addEventListener("click", onBtnsClick)
}

refreshDiv.addEventListener("click", init)

init()

function init() {

    correctResult = 0

    refreshDiv.style.display = "none"
    

    container.style.backgroundColor = `rgb(255,255,255)`

    btnBlue.style.color = `rgb(255,255,255)`
    btnYellow.style.color = `rgb(255,255,255)`
    btnRed.style.color = `rgb(255,255,255)`

    btnBlue.style.backgroundColor = `rgb(69,93,122) `
    btnYellow.style.backgroundColor = `rgb(69,93,122) `
    btnRed.style.backgroundColor = `rgb(69,93,122) `
   

    for(let i = 0; i < numbersTab.length; i++) {
        const random = Math.round(Math.random()*99)
        // randomNumbers.push(random)
        numbersTab[i].textContent = random
        correctResult += random 
        
    }
    let randomMargin = getRandomBetweenNumbers(1, 2)
    for(let i = 0; i < btnsTab.length; i++) {
        
        if (Math.random < 0.5) {
        btnsTab[i].textContent = correctResult - randomMargin
        } else {
        btnsTab[i].textContent = correctResult + randomMargin
        }
        randomMargin = getRandomBetweenNumbers(randomMargin + 1, randomMargin + 2)
    }
    let randomPosition = Math.round(Math.random()*(btnsTab.length - 1))
    btnsTab[randomPosition].textContent = correctResult

    result.textContent = "..."
}


function getRandomBetweenNumbers(min, max) {
    return Math.round(Math.random() * (max - min) + min)
 }
 function onBtnsClick(e) {
    console.log(e.currentTarget.textContent)
    if(e.currentTarget.textContent == correctResult) {
        console.log("correct")
        result.textContent = "BRAVO ! Mais c'était facile.."
        btnBlue.style.color = `rgb(0,0,0)`
        btnYellow.style.color = `rgb(0,0,0)`
        btnRed.style.color = `rgb(0,0,0)`
        container.style.backgroundColor = `rgb(0,255,0)`
        e.currentTarget.style.backgroundColor = `rgb(0,255,0)`
        refreshDiv.style.display = "block"
        refreshDiv.textContent = "RECOMMENCER"
    } else {
        console.log("incorrect")
        result.textContent = "RECOMMENCE IDIOT"
        btnBlue.style.color = `rgb(0,0,0)`
        btnYellow.style.color = `rgb(0,0,0)`
        btnRed.style.color = `rgb(0,0,0)`
        container.style.backgroundColor = `rgb(255,0,0)`
        e.currentTarget.style.backgroundColor = `rgb(255,0,0)`
    }
 }
