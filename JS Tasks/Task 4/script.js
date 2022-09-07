/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function getData() {
  fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cars) => {
        const brand = document.createElement("h3");
        const model = document.createElement("h3");
        const car = document.createElement("div");

        car.style.display = "flex";
        car.style.justifyContent = "space-between";
        car.style.margin = "1rem auto";
        car.style.text = "white";
        brand.style.width = "8rem";
        model.style.color = "black";
        brand.style.color = "black";
        car.style.backgroundColor = "#cbc1c1";

        brand.textContent = cars.brand;

        model.textContent = cars.models;

        car.append(brand, model);

        const output = document.getElementById("output");
        output.append(car);
      });
    });
}
getData();
