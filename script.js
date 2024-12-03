let searcBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searcBtn.addEventListener("click", () => {
    let countryName = countryInp.ariaValueMax;
    let finalURL = 'https://restcountries.com/v3.1';
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(object.keys(data[0].currencies[0]));
        console.log(data[0].currencies[object.keys(data[0].currencies)].name);
     })
     console.log(objectvalues(data[0].languages).toString().split(",").join(",")
    );
    XPathResult.innerHTML = `
    <img src="${data[0].flags.svg}"
    class="flag-img">
    `
})