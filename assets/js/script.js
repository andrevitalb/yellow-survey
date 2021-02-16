function ansChange(question, answer){
	switch(question){
		case 1: var quest = 'a'; break;
		case 2: var quest = 'b'; break;
		case 3: var quest = 'c'; break;
		case 4: var quest = 'd'; break;
		case 5: var quest = 'e'; break;
	}

	for(var i = 1; i < 6; i++){
		document.getElementById('ans_' + quest + '_' + i).style.opacity = 1;
		document.getElementById('ans_' + quest + '_' + i).style.borderBottom = '3px solid rgba(0,0,0,0)';
	}

	document.getElementById('ans_' + quest + '_' + answer).style.opacity = 0.5;
	document.getElementById('ans_' + quest + '_' + answer).style.borderBottom = '3px solid rgb(255, 200, 5)';
}

//---------- Nav buttons ---------------//

$('.form .stages label').click(function() {
	var radioButtons = $('.stage-selector');
	var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
	selectedIndex = selectedIndex + 1; 
});

$('button.next').click(function() {
	var radioButtons = $('.stage-selector');
	var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));

	selectedIndex = selectedIndex + 2;

	$('.stage-selector:nth-of-type(' + selectedIndex + ')').prop('checked', true);
});

$('button.prev').click(function() {
	var radioButtons = $('.stage-selector');
	var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));

	$('.stage-selector:nth-of-type(' + selectedIndex + ')').prop('checked', true);
});

//---------- Validate ---------------//

function validate() {
	var pass = 0;
	var val = [0,0,0,0];
	var p1 = document.getElementsByName("q_1");
	var p2 = document.getElementsByName("q_2");
	var p3 = document.getElementsByName("q_3");
	var p4 = document.getElementsByName("q_4");

	var name = document.getElementById("inputName").value.length;
	var brand = document.getElementById("inputBrand").value.length;
	var service = document.getElementById("inputService").value.length;
	var answer = document.getElementById("ansRzn").value.length;

    for (var i = 0, len = p1.length; i < len; i++) {
    	if (p1[i].checked) {
    		val[0]++;
    		pass++;
    	}
    }

    for (var i = 0, len = p2.length; i < len; i++) {
    	if (p2[i].checked) {
    		val[1]++;
    		pass++;
    	}
    }

    for (var i = 0, len = p3.length; i < len; i++) {
    	if (p3[i].checked) {
    		val[2]++;
    		pass++;
    	}
    }

    for (var i = 0, len = p4.length; i < len; i++) {
    	if (p4[i].checked) {
    		val[3]++;
    		pass++;
    	}
    }

    if(!val[0]) document.getElementById('select_1').style.borderColor = 'rgb(224, 29, 29)';
	else document.getElementById('select_1').style.borderColor = 'rgb(170, 170, 170)';
	if(!val[1]) document.getElementById('select_2').style.borderColor = 'rgb(224, 29, 29)';
	else document.getElementById('select_2').style.borderColor = 'rgb(170, 170, 170)';
	if(!val[2]) document.getElementById('select_3').style.borderColor = 'rgb(224, 29, 29)';
	else document.getElementById('select_3').style.borderColor = 'rgb(170, 170, 170)';
	if(!val[3]) document.getElementById('select_4').style.borderColor = 'rgb(224, 29, 29)';
	else document.getElementById('select_4').style.borderColor = 'rgb(170, 170, 170)';
	if(answer < 8) document.getElementById('select_5').style.borderColor = 'rgb(224, 29, 29)';
	else document.getElementById('select_5').style.borderColor = 'rgb(170, 170, 170)';

	if(name == 0) {
		document.getElementById("inputName").placeholder = 'Campo requerido';
		document.getElementById("inputName").style.borderColor = 'rgb(224, 29, 29)';
	}
	else {
		document.getElementById("inputName").placeholder = 'Nombre';
		document.getElementById("inputName").style.borderColor = 'rgb(170, 170, 170)';
		pass++;
	}

	if(brand == 0) {
		document.getElementById("inputBrand").placeholder = 'Campo requerido';
		document.getElementById("inputBrand").style.borderColor = 'rgb(224, 29, 29)';
	}
	else {
		document.getElementById("inputBrand").placeholder = 'Marca';
		document.getElementById("inputBrand").style.borderColor = 'rgb(170, 170, 170)';
		pass++;
	}

	if(service == 0) {
		document.getElementById("inputService").placeholder = 'Campo requerido';
		document.getElementById("inputService").style.borderColor = 'rgb(224, 29, 29)';
	}
	else {
		document.getElementById("inputService").placeholder = 'Servicio';
		document.getElementById("inputService").style.borderColor = 'rgb(170, 170, 170)';
		pass++;
	}

	if(answer == 0) {
		document.getElementById("ansRzn").placeholder = 'Campo requerido';
		document.getElementById("ansRzn").style.borderColor = 'rgb(224, 29, 29)';
	}
	else {
		document.getElementById("ansRzn").placeholder = 'Su respuesta';
		document.getElementById("ansRzn").style.borderColor = 'rgb(170, 170, 170)';
		if(answer < 8){
			alert("La respuesta a la pregunta 5 debe tener al menos 8 caracteres.");
			document.getElementById("ansRzn").style.borderColor = 'rgb(224, 29, 29)';
		}
		else {
			pass++;
		}
	}



	if(pass == 8) document.getElementById("validateCheck").checked = true;
	else alert("Por favor, llene todos los campos antes de enviar.");
}

/*=============== Return selector color ================ */

$('#select_1').click(function() {
	document.getElementById('select_1').style.removeProperty("border-color");
});

$('#select_2').click(function() {
	document.getElementById('select_2').style.removeProperty("border-color");
});

$('#select_3').click(function() {
	document.getElementById('select_3').style.removeProperty("border-color");
});

$('#select_4').click(function() {
	document.getElementById('select_4').style.removeProperty("border-color");
});

$('#select_5').click(function() {
	document.getElementById('select_5').style.removeProperty("border-color");
});

/*=============== Restore textfield ================ */

$('#inputName').click(function() {
	document.getElementById("inputName").placeholder = 'Nombre';
	document.getElementById("inputName").style.borderColor = 'rgb(170, 170, 170)';
});

$('#inputBrand').click(function() {
	document.getElementById("inputBrand").placeholder = 'Marca';
	document.getElementById("inputBrand").style.borderColor = 'rgb(170, 170, 170)';
});

$('#inputService').click(function() {
	document.getElementById("inputService").placeholder = 'Servicio';
	document.getElementById("inputService").style.borderColor = 'rgb(170, 170, 170)';
});

$('#ansRzn').click(function() {
	document.getElementById("ansRzn").placeholder = 'Su respuesta';
	document.getElementById("ansRzn").style.borderColor = 'rgb(170, 170, 170)';
});