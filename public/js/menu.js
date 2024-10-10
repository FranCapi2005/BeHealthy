window.addEventListener("load", ()=>{
    const hamMenu = document.querySelector(".ham-menu")
    const offScreenMenu = document.querySelector(".off-screen-menu")

    const body = document.querySelector("body")

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active")
        offScreenMenu.classList.toggle("active")
    });
})