const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fixedblockAnimation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")

    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})



var elems = document.querySelectorAll(".elem")


elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}

fixedblockAnimation()

// ========================================================================================


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

swiperAnimation()

// ========================================================================================

function cursorAnimation(){

    var cursor = document.querySelector("#cursor")
    var main = document.querySelector("#main")
    var navpart2 = document.querySelectorAll("#nav-part2 a") 
    var video = document.querySelector("video")
    var swiper = document.querySelector(".swiper")      

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x : dets.x,
        y : dets.y,
        duration : 1,
    })
})

navpart2.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale : 2,
            backgroundcolor : "#fe390d98",
            duration: 1,
            filter : "blur(10px)"
        })
    })
})

navpart2.forEach(function(e){
    e.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale : 1,
            backgroundcolor : "#fe390d",
            duration:1,
            filter: "none",
        })
    })
})

video.addEventListener("mouseenter",function(){
    cursor.innerHTML = "▶"
    gsap.to(cursor,{
        scale : 2,
        duration: 1,
        filter : "blur(1px)"
    })
})

video.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale : 1,
        duration: 1,
        filter: "none",
    })
})

swiper.addEventListener("mouseenter",function(){
    cursor.innerHTML = "< >"
    gsap.to(cursor,{
        scale : 2,
        duration: 1
    })
})

swiper.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale : 1,
        duration: 1
    })
})

}

cursorAnimation()

// ========================================================================================

function menuAnimation(){
    var nav_h2 = document.querySelector("nav h2")       
    var menu = document.querySelector("#menu")
    var navimg = document.querySelector("nav img")
    var flag = 0

nav_h2.addEventListener("click",function(){
    if(flag == 0){
        menu.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }
    else{
        menu.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})
}

menuAnimation()

// ========================================================================================

function loaderAnimation(){
    
    var loader = document.querySelector("#loader")
        setTimeout(function(){
        loader.style.top = "-100%"
    },4000)

}

loaderAnimation()