const userAgentIsMobile =
    /Mobile|Iphone|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
        navigator.userAgent
    );

// //////////////////////////////////////BURGER FUNCTION///////////////////////////////////////////////////////////////

function myFunction(x) {
    x.classList.toggle("change");
    let burger = document.getElementById('navList');
    burger.classList.toggle("active-menu");
}

////////////////////////////////////////SCROLL FUNCTION///////////////////////////////////////////////////////////////
let menu = document.getElementById('burger');
let burger = document.getElementById('navList');
let anim_Enabled = true;
$("a").click(function (keyframes, options) {
    let elementClick;
    let destination;
    if (anim_Enabled) {
        anim_Enabled = false;
        if (userAgentIsMobile) {
            burger.classList.remove("active-menu")
            menu.classList.remove("change")
        }
        elementClick = $(this).attr("data");
        destination = $(elementClick).offset().top - window.innerHeight / 6;
        $("body,html").animate({
            scrollTop: destination
        }, 750, () => anim_Enabled = true);
    }
});

////////////////////////////////////////MAGNETIC FUNCTION///////////////////////////////////////////////////////////////

let bgg = document.querySelector('.berries_top_water_splash');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bgg.style.transform = 'translate(-' + x * 12 + 'px, -' + y * 6 + 'px)';
});

let bgw = document.querySelector('.berries_top_water_splash img');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bgw.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 5 + 'px)';
});

let bg = document.querySelector('.magnetick');

window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 10 + 'px)';
});


function slickify() {
    $('.berries-sort__list').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        autoplay: true,
        responsive: [{
            breakpoint: 580,
            settings: 'unslick'
        }]
    });
}

slickify();
$(window).resize(function () {
    let $windowWidth = $(window).width();
    if ($windowWidth <= 580) {
        slickify();
    }
});