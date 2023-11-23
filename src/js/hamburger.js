document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const menuWrapper = document.querySelector(".header__menu-wrapper");
    const closeBtn = document.querySelector(".header__menu-close");

    // Обработчик события для гамбургер кнопки
    hamburgerIcon.addEventListener("click", () => {
        menuWrapper.classList.toggle("show-menu");
        closeBtn.classList.toggle("active");
    });
    closeBtn.addEventListener("click", () => {
        menuWrapper.classList.toggle("show-menu");
        closeBtn.classList.toggle("active");
    });
});
