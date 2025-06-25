const slider = document.querySelectorAll(".slider")

slider.forEach((slider) => {
    slider.addEventListener("click",() => {
        removeCurrentActives();
        slider.classList.add("active")
    })
})

function removeCurrentActives(){
    slider.forEach((slider) => {
        slider.classList.remove("active")
    })
}