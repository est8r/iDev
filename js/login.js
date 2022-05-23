const emailInput = document.querySelector("#floatingInput")
const passwordInput = document.querySelector("#floatingPassword")
const submitButton = document.querySelector("#submit")
const errorReport = document.querySelector("#msg")

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue === '' || passwordValue === ''){
        errorReport.textContent = "Por favor, digite todos os campos.";
        errorReport.classList= 'error';
    }
})
