let myCheckbox = document.querySelector(".switch input"),
    duration = document.querySelector(".month"),
    price = document.querySelector(".price .pricefix"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".myrange"),
    pageViews = document.querySelector(".pageviews");

// Create price on switch
switcher.addEventListener('click', function() {
    let priceInt = parseFloat(price.textContent);
    if (myCheckbox.checked == true) {
        price.textContent = `${Math.round((priceInt - (priceInt * .25)) * 12)}`;
        duration.textContent = `/year`;
    } else {
        duration.textContent = `/month`;
    }
    updatePrice(); // Fiyatı slider'a göre de güncelle
});

// Update price
function updatePrice() {
    if (range.value == 1) {
        price.textContent = myCheckbox.checked ? `${Math.round((8 - (8 * .25)) * 12)}` : 8;
        pageViews.textContent = "10k";
    } else if (range.value == 2) {
        price.textContent = myCheckbox.checked ? 108 : 12;
        pageViews.textContent = "50k";
    } else if (range.value == 3) {
        price.textContent = myCheckbox.checked ? 144 : 16;
        pageViews.textContent = "100k";
    } else if (range.value == 4) {
        price.textContent = myCheckbox.checked ? 216 : 24;
        pageViews.textContent = "500k";
    } else if (range.value == 5) {
        price.textContent = myCheckbox.checked ? 324 : 36;
        pageViews.textContent = "1M";
    }
}

// Add event listener to range slider
range.addEventListener('input', updatePrice);

// Initial call to set price
updatePrice();
