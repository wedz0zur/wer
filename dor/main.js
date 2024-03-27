


function href1() {
    const catalogButton = "catalog.html";
    window.location.href = catalogButton;
}

function hrefMain() {
    const logoMain = "index.html";
    window.location.href = logoMain;
}
document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".productt");

    function showProducts() {
        products.forEach(product => {
            if (isElementInViewport(product)) {
                product.classList.add("show");
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    window.addEventListener("scroll", showProducts);
    showProducts();
});

let circle = document.querySelector(".help_choice1");
document.body.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "Enter":
            if (!circle.classList.contains("help_choicee")) {
                circle.className = "help_choicee";
            }
            break;
        case "Escape":
            circle.classList.remove("help_choicee");
            circle.classList.add("help_choice1");
            break;
    }
});
