/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)

    data.forEach(car => {
        const carsList = document.createElement("div")
        carsList.classList.add("card")
        const output = document.getElementById("output")
        carsList.innerHTML = 
        `
        <h3>${car.brand}</h3>
        <ul>
        ${car.models.map(model => `<li>${model}</li>`).join('')}
        </ul>
        `

        output.appendChild(carsList)
    });
})
.catch(error => console.error('Error:', error))