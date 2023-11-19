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
// const home = benDetails.others.property.first
// console.log(home);





const products = [
    {name:'Shirt', price:6000, quantity:50 },
    {name:'T-Shirt', price:5000, quantity:45 },
    {name:'Pant', price:4000, quantity:55 },
]

for(const product of products){
    console.log(product.price);
}