document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (!darkModeToggle) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    let isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (darkModeToggle) {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            darkModeToggle.setAttribute("data-mode", "Light Mode");
        }
        darkModeToggle.addEventListener("click", function () {
            isDarkMode = !isDarkMode;
            localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
            document.body.classList.toggle("dark-mode");
            darkModeToggle.setAttribute("data-mode", isDarkMode ? "Light Mode" : "Dark Mode");
            map.setOptions({
                styles: isDarkMode ? darkModeStyle : lightModeStyle,
            });
        });
    }
});