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