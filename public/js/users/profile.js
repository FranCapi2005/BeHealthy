window.addEventListener("load", function(){
    const body = document.querySelector("body")
    const truncateText = document.getElementById('tokenC-txt');
    const truncateEmail = document.getElementById('email-txt')
    const btnOpenModalGeneral = document.querySelector(".btnOpen--modalWindowInfo")
    const btnCloseModalGeneral = document.querySelector(".btnClose--modalWindowInfo")
    const modalEssential = document.getElementById("modalWindowEssential")
    const btnOpenModalToken = document.getElementById("btnOpenWindow-token")
    const details = document.getElementById("details")
    const allSummarys = document.querySelectorAll("summary")
    
    const maxLengthToken = 20, maxLengthEmail = 25

    allSummarys.forEach(summary => {
        summary.addEventListener('click', () => {
            allSummarys.forEach(s => s.classList.remove("active"));
            summary.classList.add("active");
        });
    });    

    btnOpenModalGeneral.addEventListener("click", ()=>{
        modalEssential.showModal()
        body.classList.add("no-scrollBar")
    })
    btnCloseModalGeneral.addEventListener("click", ()=> {
        modalEssential.close()
        body.classList.remove("no-scrollBar")
    })

    btnOpenModalToken.addEventListener("click", () =>{
        modalEssential.close()
    })

    if (truncateText.textContent.length > maxLengthToken) {
        truncateText.textContent = truncateText.textContent.slice(0, maxLengthToken) + '...';
    }
    if (truncateEmail.textContent.length > maxLengthEmail) {
        truncateEmail.textContent = truncateEmail.textContent.slice(0, maxLengthEmail) + '...';
    }

})