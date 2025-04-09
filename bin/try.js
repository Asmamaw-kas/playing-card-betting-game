const cont = document.querySelector('#div1')
left = -300
cont.style.left = `${left}px`

random = Math.floor(Math.random()*52) + 1;
console.log(random)
function caller(){
    left = left+5;
    cont.style.left = `${left}px`
    if(left === 1600){
        left=-500
    }

}
setInterval(caller, 10)
console.log('hello this is ethiopia')
