$(document).ready(function() {
	$("p").hide();
	$('#enviar').click(function(){
	
		$("email").submit(function () { return false; });
		
		let sEmail	= $("#email").val();
	
		const emailFilter=/^.+@.+\..{2,}$/;
		const illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
		
		if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			$("p").show().removeClass("ok").addClass("erro")
			.text('Por favor, informe um email válido.');
		}else{
			$("p").show().addClass("ok")
			.text('Email enviado com sucesso!');
		}
	});
	$('#email').focus(function(){
		$("p.erro").hide();
	});
   });	