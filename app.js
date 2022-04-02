const names = ['stephen', 'bolu', 'ada', 'bisi']


//MAP Returns a value and it is used to make modifications to an array
const newNames = names.map(function(name){
    return name.toUpperCase()
})

console.log(newNames)
console.log(names)

//FIND

const search = names.find(function(name){
    return name.includes('l')
})

console.log(search)