//var myMap = heatmap("cost_of_living", {
//    center: [37.7749, -122.4194],
//    zoom: 13
//});
var myMap = JSON.parse(data);

    // loop through the data and push the lat and long to the heatArray
for (var i = 0; i < data.length; i++) {
    var location = data[i].location;
    if (location) {
            heatArray.push([location.coordinates[1], location.coordinates[0]]); // lat and long are reversed in the data
        }
    }






    

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000"

d3.json(url).then(function (data) {
    console.log(data);

    var heatArray = [];

    // loop through the data and push the lat and long to the heatArray
    for (var i = 0; i < data.length; i++) {
        var location = data[i].location;
        if (location) {
            heatArray.push([location.coordinates[1], location.coordinates[0]]); // lat and long are reversed in the data
        }
    }
    
     // create the heatmap layer
     var heat = L.heatLayer(heatArray, {
        radius: 20,
        blur: 35
    }).addTo(myMap);
});

