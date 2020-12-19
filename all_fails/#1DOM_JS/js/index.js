// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.head)
// let h=document.getElementById('hello')
// h.setAttribute('class','root')
// console.log(h)

// console.log('*****************************************')

// let div=document.getElementsByClassName('block')
// console.log(div)

// console.log('*****************************************')

// let redDiv=document.createElement('div')//Имползуется создать элемента
// redDiv.classList='red'

// redDiv.innerHTML='<p>Hello World and ITC </p>'//Добавляем текс внутри дивку
// redDiv.innerHTML='<p> ITC BOOTCAMP</p>'//Перезаписывает текст
// document.body.appendChild(redDiv)//appendChild-указываем его возми ребенка

let redDiv=document.getElementById('coube')
var left=0
var mtop=0
let rotate=0
setInterval(() => {
    redDiv.style.transform='rotate('+rotate+'deg)';
    if(left==0 && mtop<=450 && mtop>0){ 
        mtop=mtop-10
        redDiv.style.top=mtop+'px';
    }else if(left<=600 && mtop==450){
        left=left-10
        redDiv.style.left=left+'px';
    }else if(mtop>=0 && mtop<=450 && left>=600){
        mtop=mtop+10
        redDiv.style.top=mtop+'px'
    }else if(left>=0 && mtop==0 && left<=600){
        left=left+10
        redDiv.style.left=left+'px'

    }
    rotate+=15
  
}, 30);

document.body.appendChild(redDiv)//appendChild-указываем его возми ребенка
// setTimeout(redDiv,2000)




