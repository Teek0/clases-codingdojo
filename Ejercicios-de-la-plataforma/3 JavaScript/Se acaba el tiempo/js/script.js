function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}


setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var hour = Math.trunc(time/(3600*2));
    var min = Math.trunc((time-(hour*2*3600))/60);
    var sec = time-(hour*2*3600)-(min*60);

    document.querySelector("#hour").style.transform = "rotate(" + (hour*30+180) + "deg)";
    document.querySelector("#minutes").style.transform = "rotate(" + (min*6+180) + "deg)";
    document.querySelector("#seconds").style.transform = "rotate(" + (sec+180) + "deg)";
}, 1000);