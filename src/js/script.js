const inputItems = document.querySelectorAll ('.inputItem');
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

    inputItems.forEach((item, i) => {
        updateFieldValidation(item);
        if (item.value === "") {
            allFieldsValid = false;
            warnings[i].classList.remove("warning");
            warnings[i].classList.add("opacity");
        } else {
            warnings[i].classList.remove("opacity");
            warnings[i].classList.add("warning");
        }
    });

    return allFieldsValid;
}

inputItems.forEach((item) => {
    item.addEventListener("blur", () => {
        updateFieldValidation(item);
    });
});

btnSend.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (validateFields()) {
        // Todos os campos estão preenchidos corretamente, continue com o envio do formulário
        // form.submit(); // Envie o formulário (descomente esta linha para permitir o envio)
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Impede a ação padrão de "Enter" (como enviar um formulário)
        btnSend.click(); // Simula um clique no botão de envio
    }
});

