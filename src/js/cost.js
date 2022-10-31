
const car = document.getElementById("cars");
document.getElementById("costt").innerHTML = `IDR 500000`;

car.addEventListener("change", function(){
    const value = document.getElementById("cars").value;
    const result = 500000 * value;

    document.getElementById("costt").innerHTML = `IDR ${result}`;
    document.getElementById("costt2").innerHTML = `IDR ${result}`;
})