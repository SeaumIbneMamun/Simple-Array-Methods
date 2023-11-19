// const numbers = [32, 45, 79, 32];
// // const first = numbers[0]
// // const second = numbers[1]

// const [first, second, তিন] = [32, 45, 79, 32]
// console.log(first, second, তিন);


// const benDetails = {
//     name: 'Ben',
//     address: 'Bellwood',
//     age: 15,
//     phone: 'unknown',
//     others:{
//         father: 'father',
//         profession: 'Work',
//         property:{
//             first: 'house',
//             second: 'food',
//             third: 'domination',
//         }
//     }
// }

// const addr = benDetails.address;
// const father = benDetails.others.father;
// const second = benDetails.others.property.second;
// console.log(second);


const benDetails = {
         name: 'Ben',
         address: 'Bellwood',
         age: 15,
         phone: 'unknown',
         property:{
            first:'home',
            second:'food',
            third:'domination'
         }
}
const{age, address} = benDetails;
const {first, second} = benDetails.property
console.log(first, second);