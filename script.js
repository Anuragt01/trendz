

 function navbarToggle(){
    let menuBars = document.querySelector('#menu-bars');
let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle("aactive");
 }

 $('#owl-carousel1').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
 $('#owl-carousel2').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
 $('#owl-carousel3').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
         700:{
            items:3
        },
        1000:{
            items:4
        }
    }
})




