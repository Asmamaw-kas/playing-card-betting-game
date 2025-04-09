
const innerhtml = document.querySelector('.super-div')
let random;
let loop = null;
let secondelapsed = 0;
let interval = null;
const time = document.getElementById("time")
let anotherRandom = Math.floor(Math.random()*52) + 1;
random = Math.floor(Math.random()*52) + 1;
console.log(random)
const anime = document.querySelector('#animation')
let left = -380
anime.style.left=`${left}px`



                
function timer(){
    secondelapsed++;
    settime()
}
function startclock(){
    if(interval) stopclock()
    interval = setInterval(timer, 1000)
}

function stopclock(){
    clearInterval(interval)
}


function settime(){
   
    const minute = Math.floor(secondelapsed/60)
    const second = secondelapsed ;
    if(second<=105){
        if(second<30){
                   
            }
        

        else if(second>=30 && second<=34){
            anime.remove()
            let change = 0
            if(second==30 || second==31)
            {
                change='ready';
            }
            else if(second==32){
                change=1;
            }
            else if(second==33){
                change=2;
            }
            else{
                change=3
            }
                innerhtml.innerHTML = `<div class="conta">
                <div>
                           <h1 class="head1">${change}</h1>
                           </div>
                        </div>
                         `  
        }
        else if(second>34 && second<=100)
            {
                anime.remove()
                    innerhtml.innerHTML = `<div class="container">
                    <div>
                    <img src="imagess/img-${random}.jpg" alt="img">
                    </div>
                    <div id="goodluck"> <p><b>#</b>GOOD LUCK</p></div>  </div> `
            }
        else if(second>100 && second<=105){
            anime.remove()
                innerhtml.innerHTML = `<div class="conta">
                <div>
                           <h1 class="head1">Congratulations!</h1>
                           </div>
                        </div>
                         `  
            }
    }
    else {
        document.querySelector('.conta').remove()
        document.body.appendChild(anime)
        random = Math.floor(Math.random()*54) + 1;
        stopclock()
        secondelapsed = 0; 
        startclock()        
    }
   
}
 

 function randomColor(){
    let red  = Math.floor(Math.random() * 255) +1
    let green  = Math.floor(Math.random() * 255) +1
    let blue  = Math.floor(Math.random() * 255) +1
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    }
