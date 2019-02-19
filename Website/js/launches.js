var launchObject;

// get object from JSON
fetch('https://launchlibrary.net/1.4/launch?next=9&lsp=SpX&mode=verbose')
    .then(result => result.json())
    .then((res) => {
        createLaunches(res);
    })
    .catch(err => console.log(err));

// create elements on webpage from JSON
function createLaunches(result) {
    launchObject = result.launches;
    console.log(launchObject);

    for (var i = 0; i < result.launches.length; i++) {

        var launchInfoCont = document.createElement('div');
        launchInfoCont.className = 'launchInfo';

        var launchHeaderCont = document.createElement('h3');
        launchHeaderCont.className = 'launchCompHeader';

        launchHeaderCont.innerHTML += "Launch Company: " + result.launches[i].lsp.name;

        launchInfoCont.appendChild(launchHeaderCont);

        launchInfoCont.innerHTML += '<a class="launchImgLink" href="' + result.launches[i].rocket.imageURL + '">' + '<img src="' + result.launches[i].rocket.imageURL + '"' + 'alt="' + result.launches[i].rocket.name + '"' + 'class="launchImage">';

        launchInfoCont.innerHTML += "<p>Time: " + result.launches[i].windowstart; + "</p>";

        launchInfoCont.innerHTML += "<p>Rocket Type: " + result.launches[i].rocket.name; + "</p>";
        launchInfoCont.innerHTML += "<p>Location: " + result.launches[i].location.name; + "</p>";
        launchInfoCont.innerHTML += "<p>Location: " + result.launches[i].location.pads[0].name; + "</p>";

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
