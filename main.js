let images=["1.jpeg", "2.webp", "3.png", "4.jpeg", "5.jpeg"]
let count=0;

let div=document.querySelector(".setImg")

let prev=document.querySelector(".prev")
let next=document.querySelector(".next")

next.addEventListener("click", function(){
    count++ 
    if (count==5) {
        count=0
    } 
    div.style.backgroundImage=`url(${images[count]})`
})

prev.addEventListener("click", function() {
    count--
    if (count==-1) {
    count=4
    }
    div.style.backgroundImage=`url(${images[count]})`
})
