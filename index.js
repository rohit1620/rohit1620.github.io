document.addEventListener("DOMContentLoaded", (event) => {
     gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  let gt1=gsap.timeline()
  gt1.from(".pone",{
    y:50,
    opacity:0,
    duration:2
  })
.from(".ptwo",{
    y:50,
    opacity:0,
    duration:1,
  
    stagger:0.3
  },1)
  


  gsap.to(".textDiv_2>img",{
   opacity:1,
    duration:2,
      filter: "blur(0px)",
    
  })
  

  let gt3=gsap.timeline({scrollTrigger: {
      trigger: "#about",
      start: "top 80%",  // jab box viewport me aaye
    //   end: "top 30%",
    //   markers: true      // debugging ke liye
    }})

    gt3.from("#about>div>h1",{
    y:50,
    opacity:0,
    duration:1,
    
    
  })
    gt3.from("#about>div>p",{
    y:20,
    opacity:0,
    duration:0.5,
    
     
  })
  gt3.from(".about-right-col>p",{
    y:50,
    opacity:0,
   duration:1,
    stagger:0.5,
   
  })
   gt3.from(".about-right-col>button",{
    y:20,
    opacity:0,
   
    duration:0.5
     
  })

  let gt4=gsap.timeline({scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",  // jab box viewport me aaye
    //   end: "top 30%",
    //   markers: true      // debugging ke liye
    }})

    gt4.from("#skills>div>h1",{
        y:50,
        opacity:0,
        duration:1,
    }).from("#skills>div>p",{
 y:50,
        opacity:0,
        duration:0.5,
    }).from(".skills-row>div",{
y:50,
        opacity:0,
        stagger:0.3,
        duration:3.5
    })


    let gt5=gsap.timeline({scrollTrigger: {
      trigger: "#services",
      start: "top 80%",  // jab box viewport me aaye
    //   end: "top 30%",
    //   markers: true      // debugging ke liye
    }})

    gt5.from("#services>div>h1",{
        y:50,
        opacity:0,
        duration:1,
    }).from("#services>div>p",{
 y:50,
        opacity:0,
        duration:0.5,
    }).from(".services-row>div",{
y:50,
        opacity:0,
        stagger:0.3,
        duration:2
    })

 })


document.getElementById("linkdin").addEventListener("click",myFun);
function myFun(){
    location.href="https://www.linkedin.com/in/rohit-kumar-malav-205a30229/"
}
document.getElementById("github").addEventListener("click",myGithub);
function myGithub(){
    location.href="https://github.com/rohit1620"
}
let myPen=()=>{
    const x=document.querySelector(".menu").classList.toggle("active")
    const y=document.querySelector(".mobile-nav-icon").style.display;
    // alert("rohit")
    if(x){
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
// document.querySelector(".classBtn").addEventListener("click",myPen)


// document.querySelector(".btn1").addEventListener("click",myResume)


