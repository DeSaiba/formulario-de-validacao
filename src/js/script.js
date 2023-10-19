const inputItem = document.querySelectorAll('.inputItem')
const btnSend = document.querySelector('.btn-send')
const warning = document.querySelectorAll('.warning');

btnSend.addEventListener('click', (e) => {
    e.preventDefault()

    inputItem.forEach((input) => {
        if (input.value) {
            input.classList.add('border-green')
            input.nextElementSibling.classList.remove('border-red')
        } else {
            input.classList.remove('border-green')
            input.classList.add('border-red')
            input.nextElementSibling.classList.add('warning')
        }
    })
})

/*
const inputItem = document.querySelectorAll('.inputItem');
const btnSend = document.querySelector('.btn-send');
const warning = document.querySelectorAll('.warning');

inputItem.forEach((item) => {
    item.addEventListener("change", () => {
        if (item.value !== "") {
            item.classList.add("border-green")
        } else {
            item.classList.add("border-red");
        };
    });

    warning.forEach((opacity) => {
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
*/