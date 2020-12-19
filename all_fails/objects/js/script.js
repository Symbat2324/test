

//ОБЬЕКТЫ

// let obj = {
//     name:"John",
//     surname:"Klark",
//     age:64,
//     book:['гарри поттер','токийские легенды','война и мир'],
//     student:false
// }

// console.log(obj)// вывод всего обьекта
// console.log(obj.name)// вывод определенного обьекта

// delete obj.age//удаление по ключу

// console.log(obj)// вывод всего обьекта


// obj.name = 'MR'//перезапись значение по ключу
// console.log(obj)

// obj["conviction"] = true//добавление нового обьекта
// console.log(obj)


// let books = 'book'
// console.log(obj[books])//вывод списков из обьекта


// let some = prompt('что ты хочешь знать?')
// console.log(obj[some])//выводит в промпт вопросы,ответы в консоль


//          // МЕТОД FOR IN

// for(let key in obj){
//     console.log(key)//все ключи
//     console.log(obj[key])//все значение ключей
// }



//ЗАДАЧА

// const user ={
//     name:'Adam'
// }
// user.name = 'III'// добавляет только в обьектах



// let salaries ={
//     symbat:500,
//     igor:500,
//     baha:100
// }
// let sum = 0

// for(let key in salaries)
// console.log(salaries)

// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)



//Задача 


//1)Создать обьект с 5 значениями
//2)Количество добовляемых слов
//3)Тест,английское слово перевод,за каждое правильное слова 1 балл
//eng-key   rus-val
//4)По итогу вывод






// let point = 0
// let word = {
//     apple: 'Яблоко',
//     name: 'Имя',
//     car: 'Машина',
//     school: 'Школа',
//     pen: 'Ручка'
//  }

//  console.log(obj[key])

 

//  add.addEventListener('click', () => {
//     while (true) {
//         let eng = prompt('Введите английское слово: ')
//         let rus = prompt('Введите перевод: ')
//         if (eng === '' || rus === '') break
//         d = { ...d, [eng]: rus }
//     }
// })

// test.addEventListener('click', () => {
//     for (let key in d) {
//         let answer = prompt('Переведите слово ' + key + ': ')
//         if (d[key] == answer) {
//             point++
//         }
//     }
//     alert(`Вы набрали ${point} баллов из ${Object.keys(d).length}`)
// })

// console.log(obj[key])


//правильный ответ

// while(true){
//     let d, rus, eng, count, points, qwestion

// d = {
//     apple:'яблоко'
// }
// alert('добавь слова в словарь а после пройти тест')
// count = Number(prompt('введите количество слов'))

// for(let i=0; i<count; i++){
//     eng=prompt('Введите слово на английском')
//     rus=prompt('Введи перевод')
//     d[eng]=rus
// }

// alert('Давай устроим тест')

// for (let key in d){
//     qwestion = prompt ('Переведи слово ' +key+ ' на русский')
//     if(qwestion == d[key]){
//         alert('правильно')
//         points++
//     }else{
//         alert('не правильно')
//     }
// }
// alert("Ты прошел тест,ответил на " +points+ " вопросов") 
//  if(repeat == "да"){
//      continue
//  }else{
//      break
//  }

// }