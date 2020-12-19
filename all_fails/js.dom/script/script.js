// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.head)
// // console.log(document.getElementById('hello'))
// let h = document.getElementById('hello')
// // h.classList= 'root'

// h.setAttribute('class','root')// первое класс и второе название
// console.log(h)



// console.log('********************')
// let div = document.getElementsByClassName('block')
// console.log(div)

// let redDiv = document.createElement('div')// Добавляем новый див
// redDiv.classList = 'red'
// redDiv.innerHTML = '<p>Hello world inner ITC</p>'//Добавляем параграф 
// redDiv.innerHTML = '<p>ITC Bootcamp</p>'// Перезапишит
// document.body.appendChild(redDiv)


// let redDiv = document.getElementById('coube')
// var left = 0
// var mtop = 0
// var rotate = 0

// setInterval(()=>{
//     redDiv.style.transform ='rotate('+rotate+'deg)'
//     if(left ==0 && mtop<=550  &&  mtop>0){
//         mtop=mtop-10
//         redDiv.style.top = mtop+'px';  
//     }else if(left<=650 && mtop==550){
//         left=left-10
//         redDiv.style.left = left+'px';
//     }else if(mtop>=0 && mtop<=540 && left>=640){
//         mtop=mtop+10
//         redDiv.style.top = mtop+'px'; 
//     }else if(left>=0 && mtop==0 && left<=640){
//         left=left+10
//         redDiv.style.left = left+'px';
//     }
//     rotate+=15
// },30);


let arr =[]
addToArray=()=>{
    let inputText = document.getElementById('text').Value
    arr.push(inputText)
    console.log(arr)
    let div = document.getElementById('output')
    div.innerHTML=''
    arr.forEach(el=>{
        let h = document.createElement('h1')
        h.innerHTML=el
        div.appendChild(h)
    })
}
