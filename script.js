const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function videoContAnimation() {
    var videoCont = document.querySelector(".video-container");
    var playbtn = document.querySelector(".play");

    videoCont.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            zIndex: "1",
            opacity: 1
        });
    });

    videoCont.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            zIndex: "0",
            opacity: 0
        });
    });

    videoCont.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 70
        });
    });
}

videoContAnimation();

function loadingAnimation() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    });
    gsap.from(".page1 .video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.9
    });
}

loadingAnimation();

document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelector("itemOne").addEventListener("mouseenter", function(){
    gsap.to(".cursor",{  
    transform: 'translate(-50%,-50%) scale(1)'
    })
})