$(document).ready(function () {
  function clean() {
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#estado").val("");
  }

  $("#cep").blur(function () {
    var cep = $(this).val().replace(/\D/g, "");
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#estado").val("...");

        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
          function (dados) {
            if (!("erro" in dados)) {
              $("#rua").val(dados.logradouro);
              $("#bairro").val(dados.bairro);
              $("#cidade").val(dados.localidade);
              $("#estado").val(dados.uf);
            } //end if.
            else {
              clean();
              alert("CEP não encontrado.");
            }
          }
        ); //final func dados
      } //final if valida
      else {
        clean();
        alert("Formato de CEP inválido.");
      }
    } //final if !=
    else {
      clean();
    }
  });
});

$("#submit").addEventListener("click", (e) => {
  e.preventDefault();
});
