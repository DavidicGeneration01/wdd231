const dateObject = new Date;

document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.querySelector("#currentYear");
    if (currentYear) {
        currentYear.textContent = dateObject.getFullYear();
    }
});
    // const getCurrentYYear = document.querySelector("#currentYear").textContent = dateObject.getFullYear();
    document.querySelector("#lastModified").textContent = `Last Modified ${new Date(document.lastModified).toLocaleDateString()}`;