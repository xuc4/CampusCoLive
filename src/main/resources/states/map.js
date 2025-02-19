let isDarkMode = localStorage.getItem("darkMode") === "enabled";

const lightModeStyle = [
    {featureType: "poi", stylers: [{ visibility: "off"}]},
    {featureType: "road", elementType: "labels", stylers: [{ visibility: "on" }]},
]


const darkModeStyle = [
    { elementType: "geometry", stylers: [{ color: "#212121" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
    { featureType: "administrative", elementType: "geometry", stylers:[{ color:"#757575" }]},
    { featureType: "road", stylers: [{ color: "#383838" }] },
    { featureType: "road", elementType: "labels", stylers: [{ color: "#808080" }]},
    { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#000000" }]},
    { featureType: "water", stylers: [{ color: "#000000" }] },
    { featureType: "poi", stylers: [{ visibility: "off"}] },
];

var apartments = [
            { name: "Yugo Cincinnati Deacon", distance: 0.5, price: 1600, lat: 39.13002, lng: -84.52333, bedrooms: 3 },
            { name: "The Verge", distance: 1.0, price: 1500, lat: 39.12766, lng: -84.51884, bedrooms: 2 },
            { name: "Tower One", distance: 1.5, price: 2250, lat: 39.12713, lng: -84.50208, bedrooms: 4 },
            { name: "The Clarington", distance: 2.0, price: 1000, lat: 39.12984, lng: -84.50882, bedrooms: 1 }
        ];

        var markers = [];
        var map;

        function initMap() {
            var ucLocation = {lat: 39.13217, lng: -84.51524};

            var medLocation = {lat: 39.13766, lng: -84.50317}
            
            const campusCoords = [
                {lat: 39.13532, lng: -84.52002},
                {lat: 39.13556, lng: -84.51067},
                {lat: 39.12807, lng: -84.51124},
                {lat: 39.12866, lng: -84.52078},
            ];

            const medCoords = [
                {lat: 39.13965, lng: -84.50506},
                {lat: 39.13944, lng: -84.50065},
                {lat: 39.13531, lng: -84.50105},
                {lat: 39.13565, lng: -84.50556},
            ];

            const campusPoly = new google.maps.Polygon({
                paths: campusCoords,
                strokeColor: "#4CAF50",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#E00122",
                fillOpacity: 0.2,
            });

            const medPoly = new google.maps.Polygon({
                paths: medCoords,
                strokeColor: "#4CAF50",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#E00122",
                fillOpacity: 0.2,
            });

            const mapOptions = {
                center: ucLocation,
                zoom: 15,
                styles: isDarkMode ? darkModeStyle : lightModeStyle,
            };

            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            if (isDarkMode) {
                document.body.classList.add("dark-mode");
            }

            campusPoly.setMap(map);
            medPoly.setMap(map);

            const customIcon = {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "#4CAF50",
                fillOpacity: 1,
                strokeColor: "#FFFFFF",
                strokeWeight: 2,
                scale: 10,
            };

            const campusLabel = new google.maps.Marker({
                position: ucLocation,
                map: map,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0,
                },
                label: {
                    text: "University of Cincinnati",
                    font: "Sans-sariff",
                    fontsize: "32px",
                    fontWeight: "bold",
                    color: "#E00122",
                },
            });

            const medLabel = new google.maps.Marker({
                position: medLocation,
                map: map,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0,
                },
                label: {
                    text: "UC Medical Campus",
                    font: "Sans-sariff",
                    fontsize: "32px",
                    fontWeight: "bold",
                    color: "#E00122",
                },
            });

            apartments.forEach(function(apartment) {
                var marker = new google.maps.Marker({
                    position: { lat: apartment.lat, lng: apartment.lng },
                    map: map,
                    title: apartment.name,
                    icon: customIcon
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: `<h3>${apartment.name}</h3><p>Price: $${apartment.price}<br>Distance: ${apartment.distance} miles<br>Bedrooms: ${apartment.bedrooms}</p>`
                });

                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                });

                markers.push(marker);
            });
        }
        
        function filterApartments() {
    var maxDistance = document.getElementById('distanceFilter').value;
    var maxPrice = document.getElementById('priceFilter').value;
    var selectedBedrooms = document.getElementById('bedroomFilter').value;

    var filteredApartments = apartments.filter(function(apartment) {
        var matchesDistance = apartment.distance <= maxDistance;
        var matchesPrice = apartment.price <= maxPrice;
        var matchesBedrooms = selectedBedrooms === 'any' || apartment.bedrooms == selectedBedrooms;

        return matchesDistance && matchesPrice && matchesBedrooms;
    });

    displayApartments(filteredApartments);

    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];

    filteredApartments.forEach(function(apartment) {
        var marker = new google.maps.Marker({
            position: { lat: apartment.lat, lng: apartment.lng },
            map: map,
            title: apartment.name,
            icon: customIcon,
        });

        markers.push(marker);

        var infoWindow = new google.maps.InfoWindow({
            content: `<h3>${apartment.name}</h3><p>Price: $${apartment.price}<br>Distance: ${apartment.distance} miles<br>Bedrooms: ${apartment.bedrooms}</p>`,
        });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
    });
}

    function displayApartments(apartmentsToDisplay) {
        var apartmentList = document.getElementById('apartmentList');
        apartmentList.innerHTML = '';
        apartmentsToDisplay.forEach(function(apartment) {
        var listItem = document.createElement('li');
        listItem.textContent = apartment.name + ' - ' + apartment.distance + ' miles - $' + apartment.price + ' - ' + apartment.bedrooms + ' bedrooms';
        apartmentList.appendChild(listItem);
    });
    }

    document.addEventListener('DOMContentLoaded', function() {
    displayApartments(apartments);
    });
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        map.setOptions({
            styles: isDarkMode ? darkModeStyle : lightModeStyle,
        });
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    });
        