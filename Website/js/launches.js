// default initial fetch
fetch('https://launchlibrary.net/1.4/launch?next=9&lsp=SpX&mode=verbose')
    .then(result => result.json())
    .then((res) => {
        createLaunches(res);
    })
    .catch(err => console.log(err));
// spaceX launch button
document.getElementById("spacexLaunchButton").addEventListener("click", function(){
    // remove existing elements
    var launchInfoContainer = document.getElementById("LaunchScriptContainer");
    while (launchInfoContainer.hasChildNodes()) {
        launchInfoContainer.removeChild(launchInfoContainer.lastChild);
    }
    // fetch spaceX launches
    fetch('https://launchlibrary.net/1.4/launch?next=9&lsp=SpX&mode=verbose')
        .then(result => result.json())
        .then((res) => {
            createLaunches(res);
        })
        .catch(err => console.log(err));
});
// all launch button
document.getElementById("allLaunchButton").addEventListener("click", function(){
    // remove existing elements
    var launchInfoContainer = document.getElementById("LaunchScriptContainer");
    while (launchInfoContainer.hasChildNodes()) {
        launchInfoContainer.removeChild(launchInfoContainer.lastChild);
    }
    // fetch all launches
    fetch('https://launchlibrary.net/1.4/launch?next=9&mode=verbose')
        .then(result => result.json())
        .then((res) => {
            createLaunches(res);
        })
        .catch(err => console.log(err));
});
// create html elements
function createLaunches(result) {
    for (var i = 0; i < result.launches.length; i++) {
        // create containers
        var launchInfoCont = document.createElement('article');
        launchInfoCont.className = 'launchInfo';
        var launchHeaderCont = document.createElement('h3');
        launchHeaderCont.className = 'launchCompHeader';
        // populate information
        launchHeaderCont.innerHTML += "Launch Company: " + result.launches[i].lsp.name;
        launchInfoCont.appendChild(launchHeaderCont);
        launchInfoCont.innerHTML += '<a class="launchImgLink" href="' + result.launches[i].rocket.imageURL + '">' + '<img src="' + result.launches[i].rocket.imageURL + '" ' + 'alt="' + result.launches[i].rocket.name + '" ' + 'class="launchImage">' + '</a>';
        launchInfoCont.innerHTML += "<p>Time: " + result.launches[i].windowstart; + "</p>";
        launchInfoCont.innerHTML += "<p>Rocket Type: " + result.launches[i].rocket.name; + "</p>";
        launchInfoCont.innerHTML += "<p>Location: " + result.launches[i].location.name; + "</p>";
        launchInfoCont.innerHTML += "<p>Location: " + result.launches[i].location.pads[0].name; + "</p>";
        // if launch mission is unavailable display N/A
        if (result.launches[i].missions[0] === undefined) {
            launchInfoCont.innerHTML += "<p>Payload Name: " + "N/A" + "</p>";
            launchInfoCont.innerHTML += "<p>Payload Type: " + "N/A" + "</p>";
        } else {
            launchInfoCont.innerHTML += "<p>Payload Name: " + result.launches[i].missions[0].name; + "</p>";
            launchInfoCont.innerHTML += "<p>Payload Type: " + result.launches[i].missions[0].typeName; + "</p>";
        }
        document.getElementById('LaunchScriptContainer').appendChild(launchInfoCont);
    }
}
