const roomData = {
    title: "Hub Apartment",
    address: "350 Straight St, Cincinnati, OH",
    zipcode:"45219",
    detail: {
        bedroomCount: 2,
        livingroomCount: 1,
        restroomCount: 2,
        garages: "Yes",
        gym: "Yes",
        capacity: "700 SF",
        roomtype: "Apartment",
        elevator: "Yes",
        kitchen: "Yes",
        freeWifi: "Yes",
    },
    landlord: {
        name: "Tom",
        phone: "(513)123-4567",
        email: "Tom@gmail.com",
        uploadTime: "2024-06-28",
    },
    images: [
        "../states/images/roomdetail1.png",
        "../states/images/roomdetail2.png",
        "../states/images/roomdetail3.png"
    ],
    monthPrice: 1400,
    info: "Hub feels like where you were meant to be. A community filled with neighbors on the same wavelength. A home made to live college right.",
    comments: [
        {
            user: { name: "Ethan" },
            commentTime: "2024-09-05 14:30",
            rateCount: 4,
            commentText: "The room was in a great setting and a comfortable stay!"
        },
        {
            user: { name: "Lucas" },
            commentTime: "2024-10-03 12:15",
            rateCount: 5,
            commentText: "The landlord was friendly and the house was clean and tidy, will be back next time."
        },
        {
            user: { name: "Ryan" },
            commentTime: "2024-11-28 09:45",
            rateCount: 3,
            commentText: "Overall good, but slightly poor soundproofing."
        }
    ]
};
