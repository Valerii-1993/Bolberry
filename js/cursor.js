const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

if (!isMobile()) {
    for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover);
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

// Move the cursor
    function onMouseMove(e) {
        TweenMax.to($bigBall, .4, {
            x: xMousePos - 15,
            y: yMousePos - 15
        })
        TweenMax.to($smallBall, .1, {
            x: xMousePos - 5,
            y: yMousePos - 43
        })
    }

// Hover an element
    function onMouseHover() {
        TweenMax.to($bigBall, .3, {
            scale: 2
        })
    }

    function onMouseHoverOut() {
        TweenMax.to($bigBall, .3, {
            scale: 1
        })
    }

    var xMousePos = 0;
    var yMousePos = 0;
    var lastScrolledLeft = 0;
    var lastScrolledTop = 0;

    $(document).mousemove(function (event) {
        captureMousePosition(event);
        onMouseMove(event);
    })

    $(window).scroll(function (event) {
        if (lastScrolledLeft !== $(document).scrollLeft()) {
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = $(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if (lastScrolledTop !== $(document).scrollTop()) {
            yMousePos -= lastScrolledTop;
            lastScrolledTop = $(document).scrollTop();
            yMousePos += lastScrolledTop;
        }
        onMouseMove(event);
    });

    function captureMousePosition(event) {
        xMousePos = event.pageX;
        yMousePos = event.pageY;
    }
} else {
    $(".cursor").css("display", "none")
}