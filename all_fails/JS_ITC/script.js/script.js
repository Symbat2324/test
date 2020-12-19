//  let number = 8

//  if(number == 5){
//      alert('Равно')
//  }else{
//      alert('Не равно')/ }

// let year = prompt("в каком году был опубликованно спецификация ES-2015?")
// if(year == 2015){ alert('Правильный ответ')
//                       alert('Ты молодец')
//                     }else alert('Не правильный ответ')


// if(year > 2015){
//     alert("это слишком много")
// }else(year > 2015){
//     alert("Маловато")
// }else{
//     alert('в точку')
// }


// if(year == 2015){
//     alert('Истина')
// }
// else if(year == 2020){
//     alert('ну почти,вычти с этого числа 5')
// }
// else if(year == 2010){
//     alert('ну почти,добавь  числа 5')
// }
// else{
//     alert('Интересный год')
// }



// let i= 10

// if ( i > 10) alert('оно больше')
// if ( i >= 10) alert('оно больше либо равно')
// if ( i < 10) alert('оно меньше')
// if ( i <= 10) alert('оно меньше либо равно')
// if ( i != 10) alert('оно не равняеться 10')

// if( i == 10){
//     alert("10")
// }else{
//     alert('что то пошло не так')
// }
//= оператор присваивание
// == не строгая проверка
// === строгая проверка проверяет на тип данных 



//ES5
// let accessAllow 
// let age = prompt('How old are you?')

// if(age >= 18){
//     accessAllow  = true
// }
// else{
//     accessAllow  = false
// }
// alert(accessAllow)




// ES6 В основном используеться в модальных окнах
// let age = prompt ('How old are you?')
// let accessAllow = (age >= 18) ? true : false

// alert(accessAllow)

//  ES6
// let age = prompt('Возраст')
// let message = (age < 5) ? 'привет ребенок' :
//               (age < 18) ? 'Привет' :
//               (age < 100) ? 'Здравствуйте' :
//               'Не обычный возраст'
               
// alert(message)


// if (0){
//     alert(true)
// }else{
//     alert(false)
// }



// let num = 10
// let sNum = 5
// if (num === 10 && === 10){  // && и
//     alert('Они ровны')
// }
// else if(num === 5 && === 10){   // || или
//        alert('тру')
// }
// else{
//     alert(Что-то пошло не так)
// }





// let num1 , operant , num2 ,result
// num1 = prompt('Введите первое число')
// operant= prompt('Выберите * / + -')
// num2 = prompt('Введите второе число')

// if(operant == '+'){
//     result = num1+num2
// }
// else if(operant == '-'){
//     result = num1-num2
// }  
//   else if(operant == '*'){
//     result = num1*num2
// }  
// else if(operant == '/'){
//     result = num1/num2
// } 
// alert(result) 



// короткий калькулятор
// let calc = prompt ('Введите пример')
// alert(eval(calc))


var one = 0
alert('Добро пожаловать!')

let tree = prompt('Зимой и летом одним цветом?')


if(tree == "елка" || tree == "Елка" || tree == "ЕЛКА"){
   one ++ ;
   alert("Это правильно!Переходи к следующиму вопросу.")
}else{
    alert("вы проиграли")
}



let tree1 = prompt('У кого за носом пятка?')

if(tree1 == "Обувь" || tree1 == "Йог" || tree1 == "обувь"){
   one ++ ;
   alert("Это правильно!Переходи к следующиму вопросу.")
}else{
    alert("вы проиграли")
}




let tree2 = prompt('Идут,идут а с места не сойдут?')

if(tree2 == "Часы" || tree2 == "Туфли" || tree2 == "не знаю"){
   one ++ ;
   alert("Это правильно!Переходи к следующиму вопросу.")
}else{
    alert("вы проиграли")
}
alert("Ты молодец!Правильных ответов:" + one);