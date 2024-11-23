// Property data with uploaded images
const properties = [
    {
        id: 1,
        price: "$500,000",
        details: "3 Beds • 2 Baths • 1,500 sqft",
        address: "1234 Elm St, Springfield, IL",
        image: "../states/images/id1.jpg",
    },
    {
        id: 2,
        price: "$750,000",
        details: "4 Beds • 3 Baths • 2,000 sqft",
        address: "5678 Oak St, Chicago, IL",
        image: "../states/images/id2.png",
    },
    {
        id: 3,
        price: "$250,000",
        details: "4 Beds • 2 Baths • 3,000 sqft",
        address: "9102 Pine St, Los Angeles, CA",
        image: "../states/images/id3.png",
    },
    {
        id: 4,
        price: "$60,000",
        details: "3 Beds • 2 Baths • 5,000 sqft",
        address: "5678 Oak St, Chicago, IL",
        image: "../states/images/id4.png",
    },
    {
        id: 5,
        price: "$68,000",
        details: "5 Beds • 4 Baths • 8,000 sqft",
        address: "4516 Oak St, Chicago, IL",
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
        <h3>${property.price}</h3>
        <p>${property.details}</p>
        <p>${property.address}</p>
        <a href="details.html?id=${property.id}">View Details</a>
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
