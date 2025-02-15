// Wait for the window to load completely
window.addEventListener("load", () => {
    // Simulate content loading with a delay (2 seconds for demonstration)
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

        // Hide the loader and show the content
        loader.classList.add("hidden"); // Hide the loader
        content.classList.remove("hidden"); // Show the content
    }, 2000); // Adjust delay as needed
});