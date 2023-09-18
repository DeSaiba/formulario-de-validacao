const inputItem = document.querySelectorAll('.inputItem');
const btnSend = document.querySelector('.btn-send');
const warning = document.querySelectorAll('.warning');

inputItem.forEach((item, indice) => {
    item.addEventListener("change", () => {
        if (item.value !== "") {
            item.classList.add("border-green")
        } else {
            item.classList.add("border-red");
        };
    });

    warning.forEach((opacity, indice) => {
        btnSend.addEventListener("click", () => {
            if (item.value === "") {
                item.classList.add("border-red")
                opacity.classList.remove("warning");
                opacity.classList.add("opacity");
            } else {
                item.classList.remove("border-red");
                opacity.classList.remove("opacity");
                opacity.classList.add("warning");
            }
        })
    })
});