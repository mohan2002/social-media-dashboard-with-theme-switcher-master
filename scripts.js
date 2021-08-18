// onclick="this.classList.toggle('active') change()

var demo = document.getElementById("click");
var witch = document.getElementById("switch");
var pattern = document.querySelector(".pattern")
var top_card = document.querySelectorAll("div.bg-topcard")
var bottom_card = document.querySelectorAll("div.btm-card")

demo.addEventListener('click',(() =>{
    click.classList.toggle("active")
    witch.classList.toggle("bg-color")
    pattern.classList.toggle("bg-pattern")
    cardcolor(top_card)
    cardcolor(bottom_card)
}))

function cardcolor(card){
    var index = 0;
    var length = card.length;
    for(; index<length;index++){
        card[index].classList.toggle("bg-demo")
    }
}