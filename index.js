document.getElementById("linkdin").addEventListener("click",myFun);
function myFun(){
    location.href="https://www.linkedin.com/in/rohit-kumar-malav-205a30229/"
}
let myPen=()=>{
    const x=document.querySelector(".menu").classList.toggle("active")
    const y=document.querySelector(".mobile-navbar-btn").style.display;
    // alert("rohit")
    if(x && y=="block"){
        document.querySelector(".head").classList.remove("header")
    }else{
        document.querySelector(".head").classList.add("header")
    }
    
    
    console.log("rhau");
}


document.querySelector(".mobile-nav-icon").addEventListener("click",myPen)
document.querySelector(".skillss").addEventListener("click",myPen)
document.querySelector(".abouts").addEventListener("click",myPen)

document.querySelector(".servicess").addEventListener("click",myPen)
document.querySelector(".contactss").addEventListener("click",myPen)
document.querySelector(".homes").addEventListener("click",myPen)
document.querySelector(".classBtn").addEventListener("click",myPen)



document.querySelector(".skillss1").addEventListener("click",myPen)
document.querySelector(".abouts1").addEventListener("click",myPen)

document.querySelector(".servicess1").addEventListener("click",myPen)
document.querySelector(".contactss1").addEventListener("click",myPen)
// document.querySelector(".homes1").addEventListener("click",myPens)
document.querySelector(".classBtn").addEventListener("click",myPen)
