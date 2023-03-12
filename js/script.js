const school = document.querySelector('#school');
const Sign= document.querySelector('#sign-in');
const pro = document.querySelector("#pro");
const arrow = document.querySelector(".arrow");
const timer1 = document.getElementById("time1");
const timer2 = document.getElementById("time2");
const timer3 = document.getElementById("time3");
const timer4 = document.getElementById("time4");
const propos = document.querySelectorAll(".avg");
const val = document.querySelectorAll('.val')

// setTimeout(() => {
//     school.classList.remove("hidden");
//     setTimeout(()=>{
//         pro.classList.remove("hidden");
//         Sign.classList.remove("hidden");
//         arrow.classList.remove("hidden");
//     },1100)
// }, 600);

let temps1 = 0;
let temps2 = 0;
let temps3 = 0;
let temps4 = 0;
const sr = ScrollReveal({
    duration:1000
});
sr.reveal(school,{
    scale:0.5,
    origin:'top'
});
sr.reveal(pro,{
    delay:400,
    scale:0.5
})
sr.reveal(Sign,{
    delay:600,
    scale:0.5
});
sr.reveal(arrow,{
    opacity : 0,
    delay:800
})
sr.reveal('.cdtn',{
    scale:0.5,
    delay:100
})
sr.reveal('#definition',{
    scale:0.5,
    delay:300
})
sr.reveal(propos,{
    opacity:0,
    delay:600,
    origin:'top',
    distance:'30px'
})
sr.reveal('.valeur',{
    scale:0.5
})
sr.reveal('.valeurs',{
    scale:0.5,
    delay:200
})
sr.reveal(val,{
    origin:'left',
    distance:'30px',
    delay:400
})
sr.reveal('.event',{
    scale:0.5
})
sr.reveal('.events',{
    scale:0.5,
    delay:200
})
sr.reveal('.containerHover',{
    origin:'left',
    distance:'30px',
    delay:400
})
sr.reveal('.team',{
    scale:0.5
})
sr.reveal('.teams',{
    scale:0.5,
    delay:200
})
sr.reveal('.one',{
    opacity:0,
    delay:400
})
sr.reveal('.two',{
    opacity:0,
    delay:600
})
sr.reveal('.three',{
    opacity:0,
    delay:800
})
sr.reveal('.four',{
    opacity:0,
    delay:1000
})
sr.reveal('.Ryan',{
    opacity:0
})
sr.reveal('.join',{
    opacity:0,
    delay:100
})
sr.reveal('.info',{
    opacity:0,
    delay:300
})


window.addEventListener("DOMContentLoaded",function(){
    confirmation.classList.add("hidden");
    error.classList.add("hidden");
    function mitombo1(){
        if(temps1<=20){
            timer1.innerText = temps1;
            temps1++;
        }
    }
    setInterval(mitombo1,62);
    function mitombo2(){
        if(temps2<=15){
            timer2.innerText = temps2;
            temps2+=1;
        }
    }
    setInterval(mitombo2,90);
    function mitombo3(){
        if(temps3<=150){
            timer3.innerText = temps3;
            temps3+=10;
        }
    }
    setInterval(mitombo3,80);
    function mitombo4(){
        if(temps4<=5){
            timer4.innerText = temps4;
            temps4+=1;
        }
    }
    setInterval(mitombo4,200);
});
const sign = document.getElementById("sendBtn");
const input1 = document.getElementById("nameInput");
const input2 = document.getElementById("birthInput");
const input3 = document.getElementById("baccInput");
const select1 = document.getElementById("serieInput");
const select2 = document.getElementById("mentionInput");
const input4 = document.getElementById("nomParentInput");
const input5 = document.getElementById("phoneParentInput");
const input6 = document.getElementById("phonestdInput");

sign.addEventListener("click",function(){
    if(input1.value != "" && input2.value != "" && input3.value != "" && select1.value != "" && input4.value != "" && input5.value != "" && input6.value != ""){
        confirmation.classList.remove("hidden");
        sendBtn.classList.add("hidden");
        function afterValue(){
            input1.value = "";
            input2.value = "";
            input3.value = "";
            select1.value = "";
            select2.value = "";
            input4.value = "";
            input5.value = "";
            input6.value = "";
            confirmation.classList.add("hidden");
            sendBtn.classList.remove("hidden");
        }
        setTimeout(afterValue,2000);
    }
    else{
        error.classList.remove("hidden");
        sendBtn.classList.add("hidden");
        function errorHide(){
            error.classList.add("hidden");
            sendBtn.classList.remove("hidden");          
        }
        setTimeout(errorHide,2000);
    }
})
//scrollTop event
let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos *100)/calcHeight);
    pos > 100 ? scrollProgress.style.display = "grid" : scrollProgress.style.display = "none";
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#dfa408 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    
    