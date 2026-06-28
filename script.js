console.log("CalculatorHubs Loaded Successfully");

const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();

    cards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
