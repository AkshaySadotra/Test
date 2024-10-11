function loadingAnimation(){
    
var tl=gsap.timeline();
tl.from(".line h1",{
    y:100,
    opacity:0,
    stagger:0.25,
    duration:0.5,
    delay:0.5 
})
tl.from("#line1-part1",{
    
opacity:0,
onstart:function(){//jaise  hei ye chalega andr wala func call ho jyega
    var h5=document.querySelector("#line1-part1 h5");
    var count=0;
    var int=setInterval(function(){
        count++
        if(count===100){
           
            clearInterval(int);
        }
        
        h5.innerHTML=count
    },25);
    
}
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3
})

tl.from("#page1",{
    y:1500,
    opacity:0,
    delay:0.2
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
 
tl.from("#hero1 h1",{
    y:140,
    stagger:0.2
})

tl.from("#hero2 h1",{
    y:140,
    stagger:0.2
})

tl.from(".hero #undrline",{
    y:140,
    stagger:0.2
})
tl.from("#hero4 h1",{
    y:140,
    stagger:0.2
})
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })

    Shery.makeMagnet("#nav-part2 h3");
}

cursorAnimation()

