const userIcon = document.getElementById("user-icon");
const loginModal = document.getElementById("login-modal");
const closeModal = document.getElementById("close-modal");
const tabLinks = document.querySelectorAll(".tab-link");
const forms = document.querySelectorAll(".form");

// open
userIcon.addEventListener("click", () => {
    loginModal.classList.remove("hidden");
});

// close
closeModal.addEventListener("click", () => {
    loginModal.classList.add("hidden");
});

// switch
tabLinks.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // update
        tabLinks.forEach((link) => link.classList.remove("active"));
        tab.classList.add("active");

        forms.forEach((form) => form.classList.remove("active"));
        forms[index].classList.add("active");
    });
});
