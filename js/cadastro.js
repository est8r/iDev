$(document).ready(function () {
  function clean() {
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
  }

  $("#cep").blur(function () {
    var cep = $(this).val().replace(/\D/g, "");
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");

        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
          function (dados) {
            if (!("erro" in dados)) {
              $("#rua").val(dados.logradouro);
              $("#bairro").val(dados.bairro);
              $("#cidade").val(dados.localidade);
            } //end if.
            else {
              clean();
              alert("CEP não encontrado.");
            }
          }
        ); //final func dados
      } //final if valida
    } //final if !=
  });
});
