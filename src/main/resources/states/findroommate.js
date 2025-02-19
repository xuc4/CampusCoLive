let isDarkMode = localStorage.getItem("darkMode") === "enabled";

const roommates = [
    {
        name: "Edward",
        age: 23,
        gender: "male",
        location: "Newport, KY",
        budget: 800,
        description: "Looking for a room to rent in Newport.",
        lat: 39.133,
        lng: -84.516,
        image: "../states/images/h1.jpg",
    },
    {
        name: "Jet",
        age: 21,
        gender: "male",
        location: "Cincinnati, OH",
        budget: 1000,
        description: "Looking for a room in Cincinnati.",
        lat: 39.134,
        lng: -84.513,
        image: "../states/images/h2.jpg",
    },
    {
        name: "Anna",
        age: 19,
        gender: "female",
        location: "Covington, KY",
        budget: 700,
        description: "Looking for a cozy room in Covington.",
        lat: 39.135,
        lng: -84.514,
        image: "../states/images/h3.jpg",
    },
    {
        name: "Michael",
        age: 22,
        gender: "male",
        location: "Clifton, OH",
        budget: 900,
        description: "Need a shared apartment in Clifton.",
        lat: 39.136,
        lng: -84.517,
        image: "../states/images/h4.jpg",
    },
    {
        name: "Sophia",
        age: 18,
        gender: "female",
        location: "Downtown, Cincinnati",
        budget: 850,
        description: "Looking for a roommate near downtown.",
        lat: 39.132,
        lng: -84.512,
        image: "../states/images/h5.jpg",
    }
];

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

let map;

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

    roommates.forEach((roommate) => {
        var marker = new google.maps.Marker({
            position: { lat: roommate.lat, lng: roommate.lng },
            map: map,
            title: roommate.name,
            icon: customIcon,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <h3>${roommate.name}, ${roommate.age}</h3>
                <p>${roommate.description}</p>
                <p><strong>$${roommate.budget} / month</strong></p>
            `
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

function renderRoommates() {
    const list = document.getElementById("roommate-list");
    list.innerHTML = "";
    roommates.forEach((roommate) => {
        const card = document.createElement("div");
        card.className = "roommate-card";

        card.innerHTML = `
            <img src="${roommate.image}" class="roommate-photo" alt="Roommate Image">
            <h3>${roommate.name}, ${roommate.age}, ${roommate.gender}</h3>
            <p>${roommate.description}</p>
            <p><strong>$${roommate.budget} / month</strong></p>
            <button>Message</button>
        `;

        list.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderRoommates();

    document.getElementById("budget-btn").addEventListener("click", () => {
        document.getElementById("budget-modal").classList.remove("hidden");
    });

    document.getElementById("filters-btn").addEventListener("click", () => {
        document.getElementById("filters-modal").classList.remove("hidden");
    });

    document.querySelectorAll(".close-modal").forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
            closeBtn.parentElement.parentElement.classList.add("hidden");
        });
    });
});