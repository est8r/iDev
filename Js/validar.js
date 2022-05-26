function compara() {
  const password = document.querySelector("#floatingPassword");
  const passTwo = document.querySelector("#floatingPasswordTwo");

  if (passTwo.value === password.value) {
    passTwo.setCustomValidity("");
  } else {
    passTwo.setCustomValidity("as senhas não conferem");
  }
}

function comparaOk() {
  alert(
    "Tudo certo! Verifique sua caixa de mensagens do email para a confirmação!"
  );
}

function verifica() {
  const password = document.querySelector("#floatingPassword");
  const passTwo = document.querySelector("#floatingPasswordTwo");
  const show = document.querySelector("#invalid");

  const maisculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "0123456789";

  for (i = 0; i < password.length; i++) {
    if (maisculas.indexOf(chartAt(i)) != -1) {
      show.style.display = "flex";
    }
  }
}
