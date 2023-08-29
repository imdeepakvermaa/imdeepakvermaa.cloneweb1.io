var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x - 175 + "px"
    blur.style.top = dets.y - 175 + "px"
    
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor : "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -10",
        scrub:1
    }

})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1, 
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"Body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }

})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1, 
    scrollTrigger:{
        trigger:".card",
        scroller:"Body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }

})
gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"Body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }

})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"Body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }

})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"page4 h1",
        scroller:"Body",
        // markers:true,
        start:"top 4%",
        end:"top 7%",
        scrub:3

    }
})