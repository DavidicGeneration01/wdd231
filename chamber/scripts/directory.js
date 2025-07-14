
const getCompanyGrid = document.querySelector("#comp-grid");
const getCompanyList = document.querySelector("#comp-list");


const getGridBtn = document.querySelector("#grid-btn");
const getListBtn = document.querySelector("#list-btn");

let allCompanies = [];

const url = "data/member.json"
 
async function getCompanies() {
    const response = await fetch(url); // fetch data from the url
    const data = await response.json(); // convert the data to json
    allCompanies = data.companies;

    displayGrid(allCompanies)
    displayList(allCompanies)

}
getCompanies();




// Show grid
getGridBtn.addEventListener("click", () => {
    getCompanyList.style.display = "none";
    getCompanyGrid.style.display = "grid";
});


// Build and display grid view
function displayGrid(allCompanies) {
    getCompanyGrid.innerHTML = "";
    
    allCompanies.forEach(allCompany => {
        let container = document.createElement("div");
        container.setAttribute("style", "width: 100%; height: 292px;");

        container.innerHTML = `
            <img src="${allCompany.imageUrl}" alt="${allCompany.name}" style="width: 50%; height: auto; margin: 0 auto;">
            <h1>${allCompany.name}</h1>
            <p>${allCompany.address}</p>
            <p>${allCompany.phoneNumbers}</p>
            <a href="${allCompany.webAddress}" target="_blank" style="color:#2a7b48;">Visit Site</a>
        `
        getCompanyGrid.appendChild(container);        
    });
}




// Show list
getListBtn.addEventListener("click", () => {    
    getCompanyGrid.style.display = "none";
    getCompanyList.style.display = "grid";
});

// Build and display list view
function displayList(allCompanies) {
    getCompanyList.innerHTML = "";
    
    allCompanies.forEach(allCompany => {

        let table = document.createElement("div");
        table.classList.add("table-list");

        table.innerHTML = `
            <div>${allCompany.name}</div>
            <div>${allCompany.address}</div>
            <div>${allCompany.phoneNumbers}</div>
            <div><a href="${allCompany.webAddress}" target="_blank">${allCompany.webAddress}</a></div>
        `
        getCompanyList.appendChild(table);
        
    });
}