// card navigation buttons to flip between front and back sides 
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change")
    }
})