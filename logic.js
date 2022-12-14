// Create the base layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


// Create a baseMaps object.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};


// Define a map object.
var myMap = L.map("map", {
  center: [-0, -0],
  zoom: 3,
  layers: [street]
});

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br><br>' : '+');
    }

    return div;
};

legend.addTo(myMap);

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, {}).addTo(myMap);

  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function getColor(d) {
  return d > 1000 ? '#800026' :
          d > 500  ? '#BD0026' :
          d > 200  ? '#E31A1C' :
          d > 100  ? '#FC4E2A' :
          d > 50   ? '#FD8D3C' :
          d > 20   ? '#FEB24C' :
          d > 10   ? '#FED976' :
                    '#FFEDA0';
};

// Store the API query variables.
// For docs, refer to https://dev.socrata.com/docs/queries/where.html.
// And, refer to https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9.
var baseURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
//   var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
//   var complaint = "&complaint_type=Rodent";
//   var limit = "&$limit=10000";

// Assemble the API query URL.
var url = baseURL;


  
// Get the data with d3.
d3.json(url).then(function(response) {
  // Loop through the earthquake array, and create one marker for each city object.
  var earthquakes = response.features;
  for (var i = 0; i < earthquakes.length; i++) {
    if (earthquakes[i].properties.mag < 0){
      console.log("negative magnitude, skipping");
      continue;
    };

    // Conditionals for country gdp_pc
    var depth = earthquakes[i].geometry.coordinates[2];
    var color = getColor(depth);
    console.log(depth);

    // Add circles to the map.
    var coords = [earthquakes[i].geometry.coordinates[1],earthquakes[i].geometry.coordinates[0]];
    // //trick to display data centred on pacific better
    // if (coords[1]<-20){
    //   coords[1] += 360
    // };
    var size = earthquakes[i].properties.mag * 50000;

    L.circle(coords, {
      fillOpacity: 0.5,
      color: "black",
      fillColor: color,
      // Adjust the radius.
      radius: size
    }).bindPopup(`<h1>${earthquakes[i].properties.place}</h1> <hr> <h3>Magnitute: ${earthquakes[i].properties.mag}</h3><hr> <h3>Depth: ${earthquakes[i].geometry.coordinates[2]}</h3>`).addTo(myMap);
  }
});


var tectonic_url = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

d3.json(tectonic_url).then(function(response){
  console.log("read in url");
  console.log(response)
  L.geoJson(response, {
    color: "#FF0000",
    weight: 2
  }).addTo(myMap)
});