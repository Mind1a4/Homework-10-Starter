const carForm = document.getElementById("carForm");

carForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;

  function showError(id, message) {
    document.getElementById(id).textContent = message;
    valid = false;
  }

  function clearError(id) {
    document.getElementById(id).textContent = "";
  }

  const newCar = {
    name: document.getElementById("name").value.trim(),
    type: document.getElementById("type").value.trim(),
    fuel: document.getElementById("fuel").value.trim(),
    transmission: document.getElementById("transmission").value,
    capacity: document.getElementById("capacity").value.trim(),
    price: document.getElementById("price").value.trim(),
    favorite: document.getElementById("favorite").checked,
    img: "./assets/Car.png",
    oldPrice: null,
    per: "day",
  };

  if (!newCar.name) {
    showError("nameError", "Car name is required");
  }
});
