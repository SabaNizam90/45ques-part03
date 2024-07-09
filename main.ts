
//Q:03
//Name Cases:store a person`s name in a variable, and then print that person`s name in lowercase,uppercae & titlecase.

let person_name = `junaid `
//console.log(person_name.toLocaleLowerCase())
//console.log(person_name.toUpperCase())
console.log(person_name.charAt(0).toUpperCase()+person_name.slice(1))
console.log(person_name.slice(0,3))