document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".product-card");
    const selectedProductsList = document.getElementById("selected-products");
    const totalPriceHeading = document.getElementById("total-price-heading");
    const couponCodeInput = document.getElementById("coupon-code");
    const applyCouponButton = document.getElementById("apply-coupon");
    const discountResult = document.getElementById("discount-result");
    const makePurchaseButton = document.getElementById("make-purchase");
    const purchaseModal = document.getElementById("purchase-modal");
    const backToHomeButton = document.getElementById("back-to-home");

    let selectedProducts = [];
    let totalDiscountedPrice = 0;

    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const productName = card.querySelector("h2").textContent;
            selectedProducts.push(productName);
            selectedProductsList.innerHTML = selectedProducts.map(product => `<li>${product}</li>`).join("");

            const productPrice = parseInt(card.querySelector("p").textContent.match(/\d+/)[0]);
            totalDiscountedPrice += productPrice;
            totalPriceHeading.textContent = `Total Price: $${totalDiscountedPrice}`;

            if (totalDiscountedPrice >= 200) {
                applyCouponButton.removeAttribute("disabled");
                applyCouponButton.classList.remove("disabled:opacity-50");
            }
        });
    });

    couponCodeInput.addEventListener("input", () => {
        if (couponCodeInput.value.trim() !== "") {
            applyCouponButton.removeAttribute("disabled");
            applyCouponButton.classList.remove("disabled:opacity-50");
        } else {
            applyCouponButton.setAttribute("disabled", true);
            applyCouponButton.classList.add("disabled:opacity-50");
        }
    });

    applyCouponButton.addEventListener("click", () => {
        const couponCode = couponCodeInput.value.trim();
        // You can implement coupon code logic here
        // Calculate and update discount result accordingly
        updateDiscountResult();
    });

    makePurchaseButton.addEventListener("click", () => {
        purchaseModal.classList.remove("hidden");
    });

    backToHomeButton.addEventListener("click", () => {
        selectedProducts = [];
        totalDiscountedPrice = 0;
        selectedProductsList.innerHTML = "";
        totalPriceHeading.textContent = "Total Price: $0";
        updateDiscountResult();
        purchaseModal.classList.add("hidden");
    });

    function updateDiscountResult() {
        // Calculate discount and update the discountResult element
    }
});
