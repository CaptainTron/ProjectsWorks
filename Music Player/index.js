
// This one for start time
let STime = document.querySelector('#STime');
let ETime = document.querySelector("#ETime");
// this one for music files
let Music1  = document.querySelector('.One')
let Music2  = document.querySelector('.two')
// start/stop button goes here
let Img = document.querySelector('.imgcontainer img')
// Music info text goes here
let Txt = document.querySelector(".txtcontainer h3")
let currentMusic = Music2;
// Let Music Array goes here
let MusicImg = ["./1.jpg", "./2.jpeg"]

// Previous btn 
let Prev = document.querySelector(".prev")
Prev.addEventListener('click',()=>{
    Img.src = MusicImg[0]
    Txt.innerHTML = "Chakka Chak";
    currentMusic = Music1;
    Music2.pause();
    Music1.play();
})

// Next btn function goes here
let Nextbtn = document.querySelector(".next")
Nextbtn.addEventListener('click',()=>{
Txt.innerHTML = "Adiyogi";
Img.src = MusicImg[1];
currentMusic = Music2;
Music1.pause();
Music2.play();
})


// let rotatebtn
let rotateimg = document.querySelector(".imgcontainer img")

let stop_play  = document.querySelector('.stop_play')
stop_play.addEventListener('click',()=>{
    if(currentMusic.paused){
        currentMusic.play();
        stop_play.innerHTML = `<i class="fa fa-stop" aria-hidden="true"></i>`
        rotateimg.style.animationPlayState = "running";
    }else{
        currentMusic.pause();
        stop_play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        rotateimg.style.animationPlayState = "paused";
    }
})

// Sound btn controller
let Soundbtn = document.querySelector(".volume")
let MusicBar = document.querySelector(".Musicseekbar")
MusicBar.classList.add("displayme")
Soundbtn.addEventListener('click',()=>{
    MusicBar.classList.toggle("displayme")
})
// This one for heart btn
let bool = true;
let heartbtn = document.querySelector('.heartbtn')
heartbtn.addEventListener('click',()=>{
    if(bool){
        heartbtn.innerHTML = `<i class="fa-solid fa-heart"></i>`
        bool = false;
    }else{
        heartbtn.innerHTML = `<i class="fa-regular fa-heart"></i>`
        bool = true;
    }
})
