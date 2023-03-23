// <!-- -------------nav---------------- -->
const nav = document.querySelector('nav');
const scrolbtn = document.getElementById('scrlbtn');
window.addEventListener('scroll', () => {
  
  if (window.pageYOffset >= 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  if(window.pageYOffset >= 800){
    scrolbtn.style.display="block"
  }else{
    scrolbtn.style.display="none"
  }
});

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}


// resume btn 
let btns=document.getElementsByClassName("resume_btan");
for(let btn of btns){
  btn.addEventListener("click",()=>{
    window.open("../images/Prashant_Verma_Resume.pdf", "_blank");
  })
}

// <!-- -------------about---------------- -->
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}




var typed = new Typed(".typing-text", {
  strings: ["Back-End Development", "Front-End Development","Database Management","API Development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

const logoimg=document.querySelector(".logo");
logoimg.addEventListener("click",()=>{
  
  window.scrollTo(0, 0);
})
scrolbtn.addEventListener("click",()=>{
  window.scrollTo(0, 0);
})


// //code for light and darkmode
let lighMbtn=document.getElementById("sun");
let darkmode=document.getElementById("moon");
const body = document.querySelector('body');
lighMbtn.addEventListener("click", () => {
  console.log("I'm clicked");
  body.classList.toggle('dark-mode');
  lighMbtn.style.display="none";
  darkmode.style.display="inline-block";
});
darkmode.addEventListener("click", () => {
  console.log("I'm clicked");
  body.classList.toggle('dark-mode');
  darkmode.style.display="none";
  lighMbtn.style.display="inline-block";
});