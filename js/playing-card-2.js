
const innerhtml = document.querySelector('.super-div')
let random1,random2,random3,random4,random5,random6,random7,random8;
let loop = null;
let secondelapsed = 0;
let interval = null;
const time = document.getElementById("time")
let anotherRandom = Math.floor(Math.random()*52) + 1;
random1 = Math.floor(Math.random()*52) + 1;
random2 = Math.floor(Math.random()*52) + 1;
random3 = Math.floor(Math.random()*52) + 1;
random4 = Math.floor(Math.random()*52) + 1;
random5 = Math.floor(Math.random()*52) + 1;
random6 = Math.floor(Math.random()*52) + 1;
random7 = Math.floor(Math.random()*52) + 1;
random8 = Math.floor(Math.random()*52) + 1;
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
    if(second<=123){
        if(second<45){
             
               
        
       
            }
        

        else if(second>=45 && second<=49){
            anime.remove()
            let change = 0
            if(second==45 || second==46)
            {
                change='ready';
            }
            else if(second==47){
                change=1;
            }
            else if(second==48){
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
        else if(second>49 && second<=115)
            {
                anime.remove()
                    innerhtml.innerHTML = `
                    <div class="container">
                    <div class="sub-container"><img src="imagess/img-${random1}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random2}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random3}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random4}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random5}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random6}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random7}.jpg" alt="img"></div>
                    <div class="sub-container"><img src="imagess/img-${random8}.jpg" alt="img"></div>
                    </div>
                    `
            }
        else if(second>115 && second<=122){
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
        random1 = Math.floor(Math.random()*52) + 1;
        random2 = Math.floor(Math.random()*52) + 1;
        random3 = Math.floor(Math.random()*52) + 1;
        random4 = Math.floor(Math.random()*52) + 1;
        random5 = Math.floor(Math.random()*52) + 1;
        random6 = Math.floor(Math.random()*52) + 1;
        random7 = Math.floor(Math.random()*52) + 1;
        random8 = Math.floor(Math.random()*52) + 1;
        stopclock();
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
