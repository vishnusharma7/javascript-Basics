// let firstName ="Bishnu"
// let lastName = "Sharma"
// let videos = 30
// let subscriber = 1000

// let fullName = firstName +" "+ lastName

// console.log(fullName)

// console.log(firstName[0])
// console.log(firstName[1])
// console.log(firstName[2])

// //length of first name
// console.log(firstName.length)
// //convert to upper case
// console.log(firstName.toUpperCase())

// console.log(firstName.startsWith("V"))
// console.log(lastName.endsWith("a"))

// console.log(fullName.includes("ar"))

// let htmlTemplate = `<h1>${firstName}${lastName}</h1>
// <p>Videos: ${videos}</p>
// <p>Subscribers: ${subscriber}</p>`

// console.log(htmlTemplate)

// let product = ["Roti", "Sabji", "Paani Puri", "Sab khao"]
// let update  = ["Bread", "v kha le"]
// let productsMethod = product.join(",")
// console.log(productsMethod)
// console.log(product)

// let productsMethod1 = product.indexOf("Roti")
// console.log(productsMethod1)
// console.log(product)

// let productsMethod2 = product.concat(update)
// console.log(productsMethod2)


// let productsMethod3 = product.push("water v pio")
// console.log(productsMethod3)
// console.log(product)


// let score = 20;
// console.log(score)

// let update = null
// console.log(update)
// console.log(update, update + 20, `My score is ${update}`)

// let year
// console.log(year)
// console.log(year, year + 20, `My year is ${year}`)

// let value = [true, false, "true", "false"]
// console.log(value)

// let students = ["alex", "jhon", "Dev", "tanay"]


// console.log(10 == '10')
// console.log(10 == '99')
// console.log(10 != '99')
// console.log(10 != 10)

// let a = 10;
// let b = '10'
// let c = 10

// console.log(a === b)

// console.log(a === c)

// const students = ["subh", "alexa", "hatori", "kursi"]
// console.log("hello")

// for (let student of students) {
//     console.log(student)
// }

// console.log("\n")
// for (let index in students) {
//     console.log(students[index])
// }

// const student = {
//     username: "Jhons",
//     age: 30
// }

// for (let key in student) {
//     console.log(students[key])
// }

// const username = "Alix"

// for (let character of username) {
//     console.log(character)
// }

// let ratings = [2,5,0,8,9,0,0,3]

// function addition(numOne,numTwo){
//     return numOne + numTwo
// }
// function subtraction(numOne,numTwo){
//     return numOne - numTwo
// }

// console.log(addition(3,7))
// console.log(addition(9,11))
// console.log(subtraction(10,7))

// let intro = function(){
//     console.log("Welcome to AEC")
// }

// intro();

function fullName(firstName="AEC", lastName="XYZ"){
    console.log(`Welcome to ${firstName} ${lastName}`)
}

fullName("Jhon", "Alix")
fullName();

let welcomeArrow = (name) => {
    console.log("Welcome to", name)
}

welcomeArrow("Alixa")


let product = ["bread", "butter", "jam","bottle"]
product.forEach(product => console.log(product))

let students = ["A","B","C", "D"]
students.forEach((students,index)=> {
    console.log(students ,index)
})


let userCallback = (user,index) => {
    console.log(user ,index)

}

let users = ["Q","R","S", "T"]

users.forEach(userCallback)