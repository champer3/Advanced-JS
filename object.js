// function sayHi(){
//     console.log(`Hello there ${name}`)
//     changeName()
//     console.log('sayHi had ended')
// }

// function changeName(name){
//     name = 'stephen'
//     console.log(`we changes the name to ${name}`)
//     console.log('changeName is finished')
// }

// let name = 'dev ed'
// sayHi()

// console.log('we are done with the code')


//This refers to an object

// const user = {
//     name: 'stephen',
// }

// const admin = {
//     name: 'admin'
// }

// function sayHi(){
//     console.log(this)
// }

// user.hi = sayHi
// admin.hi = sayHi

// user.hi()
// admin.hi()

// const lists = document.querySelectorAll('li')

// lists.forEach(li => {
//     li.addEventListener('click', function(){
//         console.log(this)
//     })
// })

// const user = {
//     name: 'stephen',
//     videos: ['html', 'fcss', 'css', 'react', 'JavaScript'],
//     greet(){
//         console.log(`Hello there ${this.name}`)
//         //ADD FUNCTION
//         const getVideos = () =>{
//             console.log(`You curentyl have ${this.videos.length} videos`)
//         }
//         getVideos()
//     }
// }

// user.greet()

//BIND, CALL, and APPLY

// const person = {
//     firstName: 'stephen',
//     lastName: 'okunola',
//     getName(){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// function registerUser(country, lang){
//     //Additional Fnctionality
//     this.getName()
//     console.log(`My country is ${country} and my language is ${lang}`)
// }

// // const register = registerUser.bind(person)

// registerUser.call(person, "nigeria", "english")
// registerUser.apply(person, ["nigeria", "english"])

