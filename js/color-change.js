  function randomColor(){
    let red  = Math.floor(Math.random() * 255) +1
    let green  = Math.floor(Math.random() * 255) +1
    let blue  = Math.floor(Math.random() * 255) +1
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    }