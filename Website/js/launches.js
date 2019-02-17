var launchObject;

// get object from JSON
fetch('https://launchlibrary.net/1.4/launch?next=5&lsp=SpX&mode=verbose')
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
        // Header
        var launchHeader = document.createElement('h1');
        launchHeader.className = 'launchCompHeader';
        // White Container
        var launchContainerBox = document.createElement('div');
        launchContainerBox.className = 'launchBox';
        // Info Container
        var launchContainer = document.createElement('div');
        launchContainer.className = 'launchCont';
        // Time Content
        var launchTimeCont = document.createElement('div');
        launchTimeCont.className = 'launchTime';
        // Type Content
        var launchTypeCont = document.createElement('div');
        launchTypeCont.className = 'launchType';
        // Company Content
        var launchCompanyCont = document.createElement('div');
        launchCompanyCont.className = 'launchCompany';

        launchHeader.innerHTML += "Launch Company: " + result.launches[i].lsp.name;

        launchTimeCont.innerHTML += "<p><i>Time:</i> " + result.launches[i].windowstart; + "</p>";

        launchTypeCont.innerHTML += "<p><i>Rocket Type: </i>" + result.launches[i].rocket.name; + "</p>";
        launchTypeCont.innerHTML += "<p><i>Location: </i>" + result.launches[i].location.name; + "</p>";
        launchTypeCont.innerHTML += "<p><i>Location: </i>" + result.launches[i].location.pads[0].name; + "</p>";

        launchCompanyCont.innerHTML += "<p><i>Payload Name:</i> " + result.launches[i].missions[0].name; + "</p>";
        launchCompanyCont.innerHTML += "<p><i>Payload Type:</i> " + result.launches[i].missions[0].typeName; + "</p>";

        document.getElementById('LaunchScriptContainer').appendChild(launchHeader);
        document.getElementById('LaunchScriptContainer').appendChild(launchContainerBox);
        document.getElementById('LaunchScriptContainer').appendChild(launchContainer);
        launchContainerBox.appendChild(launchContainer);
        launchContainer.appendChild(launchTimeCont);
        launchContainer.appendChild(launchTypeCont);
        launchContainer.appendChild(launchCompanyCont);

    }
}

