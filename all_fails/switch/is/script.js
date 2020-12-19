// let a = 5

// if(a>5){
//     alert('Мало')
// }else if(a === 5){
//     alert('В точку')
// }else if(a>5){
//     alert('Много')
// }else{
//     alert('ЧТО-ТО ПОШЛО НЕ ТАК')
// }


// a < 5 ? alert('Мало') : 
// a === 5  ? alert('В Точку'):
// a > 5 ? alert('больше'):
// alert('ЧТО-ТО ПОШЛО НЕ ТАК')




//условный оператор проверка(switch and тернарный оператор )

// let num = 10 //10
// let result = 2
// switch (num ,result) {
//     case result:// это исход
//         alert('мало')
//         break
//     case result:
//         alert('в точку')
//         break
//     case result:
//         alert('в точку')
//         break
//     default:
//         alert('что-то пошло не так')
//         break;
// }


//МЕТОД ПЕРЕБОРА
//  let arr = ['jggkkk', 123456, "1433.3n", 1.5, false, 0, null, undefined]

// console.log(arr)

// // for (let i=0; i<arr.length; i++){
// //     console.log(arr[i])
// //  }

// arr.map(element=>{
//   if(element == 1.5){
//     console.log('я нашел ее')
//   }else{
//       console.log(element)
//   }
// })
// console.log('----------')



// arr.forEach(adam=>{
//     console.log(adam)
// })

//ПЛАНИРОВАНИЕ ФУНКЦИИ
// sayHello=(name , age)=>{
//     alert('Hello ' +name+ ' ' +age)
// }
// sayHello(Jonh)
// setTimeout(sayHello, 3000, 'JONH',12)//Измеряеться в мили/секундах




// let timer = setInterval(() => {
//     console.log("тик-так")
// }, 2000);

// setTimeout(() => {
//     clearInterval(timer)
//     alert('stop')
// }, 10000);



let n = "adam"

function getName(name){
    alert(name)
}
getName(n)