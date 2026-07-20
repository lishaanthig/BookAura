// ==========================
// BookAura JavaScript
// ==========================

// Dark Mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// ==========================
// Search Books
// ==========================

const searchInput = document.getElementById("search");
const books = document.querySelectorAll(".book");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    books.forEach(book => {

        const title = book.querySelector("h3").textContent.toLowerCase();
        const author = book.querySelector("p").textContent.toLowerCase();

        if (title.includes(value) || author.includes(value)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});

// ==========================
// Cart
// ==========================

let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartCounter = document.getElementById("cart-count");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        alert("📚 Book added to cart successfully!");

    });

});

// ==========================
// Browse Button
// ==========================

const shopBtn = document.querySelector(".shop-btn");

shopBtn.addEventListener("click", () => {

    document.querySelector(".books").scrollIntoView({
        behavior: "smooth"
    });

});

// ==========================
// Welcome Message
// ==========================

window.onload = function(){

    console.log("Welcome to BookAura 📚");

};
// Remove Item

const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

    button.addEventListener("click", function(){

        this.parentElement.remove();

        alert("Book removed from cart!");

    });

});

// Checkout

const checkout = document.querySelector(".checkout-btn");

if(checkout){

checkout.addEventListener("click",()=>{

alert("Thank you for shopping with BookAura!");

});

}