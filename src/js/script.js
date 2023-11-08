const inputItems = document.querySelectorAll('.inputItem');
const btnSend = document.querySelector('.btn-send');
const warnings = document.querySelectorAll('.warning');

function updateFieldValidation(item) {
    if (item.value !== "") {
        item.classList.remove("border-red");
        item.classList.add("border-green");
    } else {
        item.classList.remove("border-green");
        item.classList.add("border-red");
    }
}

function validateFields() {
    let allFieldsValid = true;

    inputItems.forEach((item) => {
        if (item.value === "") {
            item.classList.add("border-red");
            allFieldsValid = false;
        } else {
            item.classList.remove("border-red");
        }
    });

    warnings.forEach((opacity, i) => {
        if (inputItems[i].value === "") {
            opacity.classList.add("opacity");
            opacity.classList.remove("warning");
        } else {
            opacity.classList.remove("opacity");
            opacity.classList.add("warning");
        }
    });

    return allFieldsValid;
}

inputItems.forEach((item) => {
    item.addEventListener("change", () => {
        updateFieldValidation(item);
    });
});

btnSend.addEventListener("click", () => {
    const allFieldsValid = validateFields();

    if (allFieldsValid) {
        // O código aqui é executado quando todos os campos estão preenchidos corretamente.
        // Posso adicionar a lógica para enviar o formulário ou realizar outra ação aqui.
    }
});