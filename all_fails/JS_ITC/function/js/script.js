  // ES5

// function getAlert (){
//     return'hello world'
// }


// alert(getAlert())
// console.log(getAlert())

// function gerStr(){
//     alert('hello my friend')
//     console.log('hello my friend')
// }
// gerStr()

// function sum(a, b, c){
//     return a+b+c
// }
// alert (sum(7, 3, 5))

// function sumOfConsole(a,b,c){
//     console.log(a+b+c)
// }

// sumOfConsole(10,20,45)


//ES6
// checkAge =(a)=>{
//    if(age > 18){
//        return true
//    }else{
//        return false
//    }
// }

// let age = prompt('сколько вам лет')
// if(checkAge(age)){
//     alert('Доступ открыт')
// }else{
//     alert('Доступ закрыт')
// }
//




// return-это возврат


// checkNum=(a,b,c)=>{
//     if(a>b && a>c) return a
//     else if(b>a && b>c) return b
//     else return c
// }

// alert(checkNum(21,6,12))

// twoNumbersCheck = (a, b) =>{
//     return a < b ? a : b
// }
//  alert(5,8)







  //Решения задачи 
// pow = (x, n)=>{
//    return x ** n
// }

// let x = prompt('x')
// let n = prompt('n')
//  if (n<0){
//      alert('n в отрицательном значении')
//  }else{
//      alert(pow(x, n))
//  }


//задача    1)Создать пустой список
        //  2)Ввод количество гостей
        //  3)Добавить по количеству гостей именна
        //  4)Вывести преглашения

let arr = []
let countGuests = Number(prompt('Количество гостей'))

if(countGuests != null || countGuests != '' || countGuests > 0){
for(let i=1; i<=countGuests; i++){
    let nameGuest = prompt('Имя гостя №' +i)
    arr.push(nameGuest)
}
let str = ''
getPresent=(name)=>{
    srt += 'Уважаемый' +name+'Преглашаю тебя на свой день рождения --/--/--/'
    return str
}

for(let i = 0; i<arr.length; i++){
    getPresent(arr[i])
}
alert (str)
}