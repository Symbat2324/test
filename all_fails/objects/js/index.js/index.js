// let d, rus, eng, count, points, qwestion, repeat 
// d={ apple:'яблоко'}

// window.onload = function() {
//     startGame()
// }

// startGame=()=>{
//     alert('добавь слова в словарь а после пройти тест')
//     count = Number(prompt('введите количество слов'))
//     addDictionary(count)
// }

// addDictionary=(n)=>{
//     for(let i=0; i<count; i++){
//         eng=prompt('Введите слово на английском')
//         rus=prompt('Введи перевод')
//         d[eng]=rus
//     }
//     startTest()
// }
    
// startTest=()=>{
//     points = 0
//     for (let key in d){
//         qwestion = prompt ('Переведи слово ' +key+ ' на русский')
//         qwestion == d[key] 
//         ? (alert('правильно'), 
//          points++
//         )
//         : alert('не правильно')
// }
//    repeat = prompt("Ты прошел тест,ответил на " +points+ " вопросов \n\n Повторим!")
//    repeatGame(repeat)
// }

// repeatGame = (rep)=>{
//     rep == 'да' ? startGame() : null
// }


//ВЕРНИТЕ ЧИСЛО ОТ 0 ДО 10 ВКЛЮЧИТЕЛЬНО С ПОМОЩЬЮ (math.rondom)
//РЕШЕНИЕ ПРИМЕРА

let name = prompt('Привет! Как тебя зовут?')

while (name == '' || name == null){
    name = prompt('Привет! Как тебя зовут?')
}

alert (name + ', я загадал число от 1 до 10.Попробуй отгадать.После каждой попытки я скажу тебе "мало","много" или "угадал".');

let number = Math.ceil(Math.random() * 10);
let guess = prompt('Какое число я загадал?');
let numberGuesses = 0;

while (guess != number){
    if (guess > number){
        guess = prompt('Много,еще раз')
        numberGuesses = numberGuesses + 1;
    }
    if(guess < number){
        guess = prompt('Мало,еще раз')
        numberGuesses = numberGuesses + 1;
    }
}

alert('Ты угадал!Это число ' + number + ' .Тебе понадобилось ' +numberGuesses+ ' попыток.');