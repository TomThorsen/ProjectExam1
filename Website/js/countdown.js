/* Script fetches time for next launch, calculates remaining time and displays it on countdowntimer. Updated every second */
fetch('https://launchlibrary.net/1.4/launch?next=1&lsp=SpX&mode=summary')
    .then(result => result.json())
    .then((res) => {
        createCountdown(res);
    })
    .catch(err => console.log(err));

function createCountdown(result) {
    //Fetch time of next launch
    var nextLaunchTime = new Date(result.launches[0].windowstart).getTime();
    // Update every second
    var x = setInterval(function() {
        var currentTime = new Date().getTime();
        var distance = nextLaunchTime - currentTime;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdownScript").innerHTML = "NEXT LAUNCH IN: " + days + "D " + hours + "H "
            + minutes + "M " + seconds + "S ";
        // If time is 0 display custom message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdownScript").innerHTML = "LAUNCH LIVE NOW!";
        }
    }, 1000);
}
