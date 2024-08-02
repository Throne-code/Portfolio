const btnEpilog = document.getElementById("btnEpilog");
const nextContent = document.querySelector(".next-content");

btnEpilog.addEventListener("click", () => {
    btnEpilog.style.display = "none"
    nextContent.classList.add(".show")
    nextContent.style.display = "block"
})