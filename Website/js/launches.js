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
        var launchTable = document.createElement('table');
        launchTable.className = 'launchTable';

        // populate information
        launchHeaderCont.innerHTML += "Launch Company: " + '<br>' + result.launches[i].lsp.name;
        launchInfoCont.appendChild(launchHeaderCont);

        launchInfoCont.innerHTML += '<a class="launchImgLink" href="' + result.launches[i].rocket.imageURL + '">' + '<img src="' + result.launches[i].rocket.imageURL + '" ' + 'alt="' + result.launches[i].rocket.name + '" ' + 'class="launchImage">' + '</a>';

        var launchTableRowTime = document.createElement('tr');
        launchTableRowTime.className = 'launchTableRowTime';
        launchTableRowTime.innerHTML += "<th>Time:</th>";
        launchTableRowTime.innerHTML += "<td>" + result.launches[i].windowstart + "</td>";
        launchTable.appendChild(launchTableRowTime);
        launchInfoCont.appendChild(launchTable);

        var launchTableRowType = document.createElement('tr');
        launchTableRowType.className = 'launchTableRowType';
        launchTableRowType.innerHTML += "<th>Rocket Type:</th>";
        launchTableRowType.innerHTML += "<td>" + result.launches[i].rocket.name + "</td>";
        launchTable.appendChild(launchTableRowType);
        launchInfoCont.appendChild(launchTable);

        var launchTableRowLocation = document.createElement('tr');
        launchTableRowLocation.className = 'launchTableRowLocation';
        launchTableRowLocation.innerHTML += "<th>Location:</th>";
        launchTableRowLocation.innerHTML += "<td>" + result.launches[i].location.pads[0].name; + "</td>";
        launchTable.appendChild(launchTableRowLocation);
        launchInfoCont.appendChild(launchTable);

        // if launch mission is unavailable display N/A
        if (result.launches[i].missions[0] === undefined) {
            var launchTableRowPayloadName = document.createElement('tr');
            launchTableRowPayloadName.className = 'launchTableRowPayloadName';
            launchTableRowPayloadName.innerHTML += "<th>Load Name:</th>";
            launchTableRowPayloadName.innerHTML += "<td>N/A</td>";
            launchTable.appendChild(launchTableRowPayloadName);
            launchInfoCont.appendChild(launchTable);

            var launchTableRowPayloadType = document.createElement('tr');
            launchTableRowPayloadType.className = 'launchTableRowPayloadType';
            launchTableRowPayloadType.innerHTML += "<th>Load Type:</th>";
            launchTableRowPayloadType.innerHTML += "<td>N/A</td>";
            launchTable.appendChild(launchTableRowPayloadType);
            launchInfoCont.appendChild(launchTable);
        } else {
            var launchTableRowPayloadName = document.createElement('tr');
            launchTableRowPayloadName.className = 'launchTableRowPayloadName';
            launchTableRowPayloadName.innerHTML += "<th>Load Name:</th>";
            launchTableRowPayloadName.innerHTML += "<td>" + result.launches[i].missions[0].name; + "</td>";
            launchTable.appendChild(launchTableRowPayloadName);
            launchInfoCont.appendChild(launchTable);

            var launchTableRowPayloadType = document.createElement('tr');
            launchTableRowPayloadType.className = 'launchTableRowPayloadType';
            launchTableRowPayloadType.innerHTML += "<th>Load Type:</th>";
            launchTableRowPayloadType.innerHTML += "<td>" + result.launches[i].missions[0].typeName; + "</td>";
            launchTable.appendChild(launchTableRowPayloadType);
            launchInfoCont.appendChild(launchTable);
        }

        document.getElementById('LaunchScriptContainer').appendChild(launchInfoCont);
    }
}
