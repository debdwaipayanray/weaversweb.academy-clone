document.getElementById("toogleMenuIcon").addEventListener("click", function () {
    document.getElementsByClassName("mobileMenu")[0].classList.add("nav_active");
});

document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementsByClassName("mobileMenu")[0].classList.remove("nav_active");
})

// Test