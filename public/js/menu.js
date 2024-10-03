window.addEventListener("load", ()=>{
    const hamMenu = document.querySelector(".ham-menu")
    const offScreenMenu = document.querySelector(".off-screen-menu")

    const btnOpenModal = document.querySelector(".openUser--modal")
    const btnCloseModal = document.querySelector(".closeUser--modal")
    const modal = document.getElementById("modalWindow")

    const body = document.querySelector("body")

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active")
        offScreenMenu.classList.toggle("active")
    });

    btnOpenModal.addEventListener("click", ()=>{
        modal.showModal()
        body.classList.add("no-scrollBar")
    })

    btnCloseModal.addEventListener("click", ()=> {
        modal.close()
        body.classList.remove("no-scrollBar")
    })
})