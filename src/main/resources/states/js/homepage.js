// Property data with uploaded images
const properties = [
    {
        id: 1,
		name: "The Clarington",
        price: "$1000/m",
        details: "1 Bed • 1 Bath • 1,500 sqft",
        address: "2617 Short Vine St, Cincinnati, OH",
        image: "../states/images/id1.jpg",
    },
    {
        id: 2,
		name: "The Verge",
        price: "$1500/m",
        details: "2 Beds • 3 Baths • 2,000 sqft",
        address: "165 W McMillan St, Cincinnati, OH",
        image: "../states/images/id2.png",
    },
    {
        id: 3,
		name: "Yugo Cincinnati Deacon",
        price: "$1600/m",
        details: "3 Beds • 3 Baths • 3,000 sqft",
        address: "424 Straight St, Cincinnati, OH",
        image: "../states/images/id3.png",
    },
    {
        id: 4,
		name: "Tower One",
        price: "$2250/m",
        details: "4 Beds • 4 Baths • 5,000 sqft",
        address: "2515 Burnet Ave, Cincinnati, OH",
        image: "../states/images/id4.png",
    },
    {
        id: 5,
		name: "Auburndale",
        price: "$950/m",
        details: "1 Beds • 1 Baths • 550 sqft",
        address: "2508 Auburn Ave, Cincinnati, OH",
        image: "../states/images/id4.png",
    },
];

// Render properties
function renderProperties(filter = "") {
    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = "";

    const filteredProperties = properties.filter((property) =>
        property.address.toLowerCase().includes(filter.toLowerCase())
    );

    filteredProperties.forEach((property) => {
        const card = document.createElement("div");
        card.className = "property-card";

        card.innerHTML = `
      <img src="${property.image}" alt="Property Image">
      <div class="details">
        <h3>${property.name}</h3>
        <p>${property.price}</p>
		<p>${property.details}</p>
        <p>${property.address}</p>
        <a href="../../templates/roomdetails.html">View Details</a>
      </div>
    `;
        propertyList.appendChild(card);
    });
}

// Add event listener for search
document.getElementById("search-btn").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
    renderProperties(query);
});

// Initial render
renderProperties();
