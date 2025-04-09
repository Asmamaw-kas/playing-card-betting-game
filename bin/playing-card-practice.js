
const animation = document.getElementById('animation')
const animation2 = document.getElementById('animation2')
const container = document.querySelector('#container')
let left1,left2,left3,left4,left5,left6,left7,left8,left9,left10
 left1 = 20;left2=-230;
let margin1,margin2,margin3,margin4,margin5,margin6,margin7,margin8,margin9,margin10
let margin = 100
let rand1,rand2,rand3,rand4,rand5,rand6,rand7,rand8,rand9,rand10
rand1 = Math.floor(Math.random()*52) + 1;
rand2 = Math.floor(Math.random()*52) + 1;
rand3 = Math.floor(Math.random()*52) + 1;
rand4 = Math.floor(Math.random()*52) + 1;
rand5 = Math.floor(Math.random()*52) + 1;
rand6 = Math.floor(Math.random()*52) + 1;
rand7 = Math.floor(Math.random()*52) + 1;
rand8 = Math.floor(Math.random()*52) + 1;
rand9 = Math.floor(Math.random()*52) + 1;
rand10 = Math.floor(Math.random()*52) + 1;
animation.style.left = `${left1}px`
animation2.style.left = `${left2}px`
animation.style.marginTop = `${margin}px`
animation2.style.marginTop = `${margin}px`
function caller(){
 left1 = left1+5;
 left2 = left2+5;
 margin1 = Math.sin(`${left1}`) * 20
 margin2 = Math.sin(`${left2}`) * 20
animation.style.marginTop = `${margin1}px`
animation2.style.marginTop = `${margin2}px`
 animation.style.left = `${left1}px`
 animation2.style.left = `${left2}px`
 if(left1 === 1600){
     left1=-240
 }
 if(left2 === 1610){
    left2=-230
}
}
setInterval(caller, 140)
