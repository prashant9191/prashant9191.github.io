// <!-- -------------nav---------------- -->
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
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
    window.open("./images/Prashant_Verma_Resume.pdf", "_blank");
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

