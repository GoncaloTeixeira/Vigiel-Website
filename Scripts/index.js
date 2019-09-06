function displayDate() {
    var Dataatual = document.getElementById("demo").innerHTML = Date();

    document.write("Dataatual");


}


function hello() {

    var timet = new Date();
    var time = timet.getSeconds();




    document.write(time);

}


function slide() {
    var currMarg = 0,
        contStyle = document.getElementById('container').style;

    setInterval(function() {
        currMarg = currMarg == 1800 ? 0 : currMarg + 600;
        contStyle.marginLeft = '-' + currMarg + 'px';
    }, 3000);
}


function slider() {


    document.getElementById("slide1").style.display = "inline-block";
    document.getElementById("slide2").style.display = "none";
    document.getElementById("slide3").style.display = "none";

    var timet = new Date();
    var time = timet.getSeconds();
    document.write(time);

    if (time < 20) {
        document.getElementById("slide1").style.display = "inline-block";
        document.getElementById("slide2").style.display = "none";
        document.getElementById("slide3").style.display = "none";
    }

    if ((time > 20) && (time < 40)) {
        document.getElementById("slide2").style.display = "inline-block";
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide3").style.display = "none";
    }
    if (time > 40) {
        document.getElementById("slide3").style.display = "inline-block";
        document.getElementById("slide1").style.display = "none";
        document.getElementById("slide2").style.display = "none";
    }



    setTimeout(slider, 3000);

}


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}