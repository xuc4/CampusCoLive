const roommates = [
    {
        name: "Edward",
        age: 31,
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
        age: 24,
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
        age: 27,
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
        age: 29,
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
        age: 25,
        gender: "female",
        location: "Downtown, Cincinnati",
        budget: 850,
        description: "Looking for a roommate near downtown.",
        lat: 39.132,
        lng: -84.512,
        image: "../states/images/h5.jpg",
    }
];

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.133, lng: -84.515 }, // University of Cincinnati's approximate location
        zoom: 15 // Zoomed-in view for closer visualization
    });

    roommates.forEach((roommate) => {
        const marker = new google.maps.Marker({
            position: { lat: roommate.lat, lng: roommate.lng },
            map: map,
            title: roommate.name
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
