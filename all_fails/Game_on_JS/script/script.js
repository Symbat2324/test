var cvs = document.getElementById('canvas')
var ctx = cvs.getContext('2d')

var bird = new Image()
var bg = new Image()
var fg = new Image()
var pipeUp = new Image()
var pipeBottom = new Image()

//ПУТИ ДЛЯ КАРТИНОК
bird.src = 'img/bird.png'
bg.src = 'img/bg.png'
fg.src = 'img/fg.png'
pipeUp.src = 'img/pipeUp.png'
pipeBottom .src = 'img/pipeBottom.png'

document.addEventListener('keydown' , moveUp)
function moveUp(){
    yPos -=30
}


//СОЗДАНИЕ БЛОКОВ
var pipe = []
pipe[0]={
    x: cvs.width,
    y: 0
}

//ОТСТУП
var otstup = 80
var score = 0

//ПОЗИЦИИ ПТИЧКИ
var xPos = 10
var yPos = 150
var grav = 1.5
function draw(){
    ctx.drawImage(bg, 0, 0)
    for (var i=0; i<pipe.length; i++){
         ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y)
         ctx.drawImage(pipeBottom,pipe[i].x,pipe[i].y + pipeUp.height+otstup)

         pipe[i].x --

         if(pipe[i].x == 130){
             pipe.push({
                 x: cvs.width,
                 y: Math.floor(Math.random()*pipeUp.height)-pipeUp.height
             })
         }
    


    //ОТСЛЕЖИВАНИЕ ПРИКОСНОВЕНИЙ
    if(xPos + bird.width>=pipe[i].x &&
        xPos<=pipe[i].x + pipeUp.height &&
        (yPos<=pipe[i].y + pipeUp.height ||
            yPos + bird.height>= pipe[i].y+pipeUp.height + otstup ||
            yPos + bird.height>=cvs.height - fg.height)
        ){
            location.reload()
        }
        if(pipe[i].x ==5){
            score++
        }
    }
    


    ctx.drawImage(fg, 0, cvs.height - fg.height)
    ctx.drawImage(bird, xPos, yPos)

    yPos += grav

    ctx.fillStyle = "#000"
    ctx.font = '24px Verdana'
    ctx.fillText('Счет: '+score, 10, cvs.height-20)

    requestAnimationFrame(draw)
}
pipeBottom.onload = draw