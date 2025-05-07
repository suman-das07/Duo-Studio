function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

var crsr=document.querySelector(".cursor");
var main=document.querySelector(".main")
var vdo = document.querySelector("#video")
var crs_txt= document.querySelector(".cursor-text")
document.addEventListener("mousemove",function(move){
  crsr.style.left=move.x-20+"px",
  crsr.style.top=move.y-20+"px",
  crs_txt.style.left =move.x-60+"px",
  crs_txt.style.top= move.y -20+"px"
  

})

vdo.addEventListener("mouseenter",function(){
  crs_txt.style.display= "flex",
  crsr.style.display="none"

});
vdo.addEventListener("mouseleave",function(){
  crs_txt.style.display= "none",
  crsr.style.display="flex"

});
var tl= gsap.timeline({
    scrollTrigger:{
        trigger:".hero-section h1",
        scroller:".main",
        // markers:true,
        start:"top 26%",
        end:"top 0",
        scrub:2
    }
})
tl.to(".hero-section h1",{
    x:-250
},"move")
tl.to(".hero-section h2",{
    x:250
},"move")

tl.to(".hero-section video",{
    width:"90%"
},"move")

tl.to(".main",{
  backgroundColor:"white",
  scrollTrigger:{
    trigger:".page2",
    scroller:".main",
    // markers:true,
    start: "top 55%",
    end:"top 0",
    scrub:2,
stagger:3
  }
})

var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:".page3-img",
    scroller:".main",
    // markers: true,
    start:"top 0",
    end:"top 0",
    scrub:2
  }
})
tl2.to("#img1",{
  x:100
},"move")
tl2.to("#img2",{
  x:-100
},"move")
tl2.to(".box1",{
  x:100
},"move")
tl2.to(".box2",{
  x:-100
},"move")


var blr1=document.querySelector(".box1");
var blr2=document.querySelector(".box2");

blr1.addEventListener("mouseenter",function(){
   blr1.style.opacity="1";
})
blr1.addEventListener("mouseleave",function(){
  blr1.style.opacity="0";
})
blr2.addEventListener("mouseenter",function(){
  blr2.style.opacity="1";
})
blr2.addEventListener("mouseleave",function(){
 blr2.style.opacity="0";
})

var tl3=gsap.timeline({
  scrollTrigger:{
    trigger:".page1",
    scroller:".main",
    // markers: true,
    start:"top -350%",
    end:"top -400%",
    scrub:3
  }
})
tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})

gsap.from(".hero-section h1",{
  rotateX:90,
  opacity:0,
  duration:0.8,
  ease: "power4.out",
  stagger:0.2
},"rot")
gsap.from(".hero-section h2",{
  rotateX:90,
  opacity:0,
  duration:0.8,
  ease: "power4.out",
  stagger:0.2
},"rot")

var low_sec= document.querySelectorAll(".lower-sec");
low_sec.forEach(function(enter){
  enter.addEventListener("mouseenter",function(){
    var att= enter.getAttribute("data-image")
    
    crsr.style.width="450px"
    crsr.style.height="350px"
    crsr.style.borderRadius="10px"
    crsr.style.mixBlendMode="normal"
    crsr.style.color="white"
    crsr.style.backgroundImage=`url(${att})`

const h4= enter.querySelector("h4");
const h3= enter.querySelector("h3");
if(h3){
  h3.style.color="white"
}
if(h4){
  h4.style.color="white"
}
  })
  enter.addEventListener("mouseleave",function(){
    var att= enter.getAttribute("data-image")
    
    crsr.style.width="20px"
    crsr.style.height="20px"
    crsr.style.borderRadius="50%"
    crsr.style.mixBlendMode="difference"
    crsr.style.backgroundImage=`none`
    const h4= enter.querySelector("h4");
    const h3= enter.querySelector("h3");
if(h3){
  h3.style.color="#8b8b8b"
}
    if(h4){
      h4.style.color="#8b8b8b"
    }

  })

})

const navItems = document.querySelectorAll(".nav-inner h4");
const purple = document.querySelector(".purple");
const marquee = document.querySelector(".purple-marquee");

navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        marquee.textContent = item.getAttribute("data-text"); 
        purple.style.transform = "translateY(0%)";
        const repeatedText = item.textContent.repeat(550);
  marquee.innerText = repeatedText;
    });

    item.addEventListener("mouseleave", () => {
        purple.style.transform = "translateY(-100%)";
    });
});
