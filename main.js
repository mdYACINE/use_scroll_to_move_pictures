let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountains7 = document.getElementById('mountains7')
let nouvil = document.querySelector('.nouvil')



onscroll = function(){
    stars.style.left = scrollY + 'px'
    moon.style.top = scrollY * 4 + 'px'
    mountains3.style.top = scrollY * 1.5 + 'px'
    mountains4.style.top = scrollY * 1.2 + 'px'
    river.style.top = scrollY * 1.1 + 'px'
    boat.style.top = scrollY  + 'px'
    boat.style.left = scrollY * 3 + 'px'
    nouvil.style.fontSize = scrollY + 'px'
    if(scrollY >= 68){
        nouvil.style.fontSize = 68 + 'px'
        nouvil.style.position = 'fixed'
        if(scrollY >= 460){
            nouvil.style.display = 'none'
        }else{
            nouvil.style.display = 'block'
        }
        if(scrollY >= 100){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#40063c,#1b0227)'
        }
    }
}