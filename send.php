<meta http-equiv="refresh" content=".35;URL=http://yellowpath.mx/"/>

<?php
   	    $name = $_REQUEST['inputName'];
   	    $brand = $_REQUEST['inputBrand'];
   	    $service = $_REQUEST['inputService'];
   	    $ans_5 = $_REQUEST['ansRzn'];
   	    $p1 = $_REQUEST['q_1'];
   	    $p2 = $_REQUEST['q_2'];
   	    $p3 = $_REQUEST['q_3'];
   	    $p4 = $_REQUEST['q_4'];
   	    $ans_1 = "";
   	    $ans_2 = "";
   	    $ans_3 = "";
   	    $ans_4 = "";
   	    $mail = "contacto@yellowpath.mx";

   	    switch($p1) {
   	    	case 1:
   	    		$ans_1 = "Nada satisfecho";
   	    	break;
   	    	case 2:
   	    		$ans_1 = "Poco satisfecho";
   	    	break;
   	    	case 3:
   	    		$ans_1 = "Neutral";
   	    	break;
   	    	case 4:
   	    		$ans_1 = "Muy satisfecho";
   	    	break;
   	    	case 5:
   	    		$ans_1 = "Totalmente satisfecho";
   	    	break;
   	    }

   	    switch($p2) {
   	    	case 1:
   	    		$ans_2 = "Nada satisfecho";
   	    	break;
   	    	case 2:
   	    		$ans_2 = "Poco satisfecho";
   	    	break;
   	    	case 3:
   	    		$ans_2 = "Neutral";
   	    	break;
   	    	case 4:
   	    		$ans_2 = "Muy satisfecho";
   	    	break;
   	    	case 5:
   	    		$ans_2 = "Totalmente satisfecho";
   	    	break;
   	    }

   	    switch($p3) {
   	    	case 1:
   	    		$ans_3 = "Nada satisfecho";
   	    	break;
   	    	case 2:
   	    		$ans_3 = "Poco satisfecho";
   	    	break;
   	    	case 3:
   	    		$ans_3 = "Neutral";
   	    	break;
   	    	case 4:
   	    		$ans_3 = "Muy satisfecho";
   	    	break;
   	    	case 5:
   	    		$ans_3 = "Totalmente satisfecho";
   	    	break;
   	    }

   	    switch($p4) {
   	    	case 1:
   	    		$ans_4 = "Nada satisfecho";
   	    	break;
   	    	case 2:
   	    		$ans_4 = "Poco satisfecho";
   	    	break;
   	    	case 3:
   	    		$ans_4 = "Neutral";
   	    	break;
   	    	case 4:
   	    		$ans_4 = "Muy satisfecho";
   	    	break;
   	    	case 5:
   	    		$ans_4 = "Totalmente satisfecho";
   	    	break;
   	    }

		$header = 'De: ' . $mail . " \r\n";

		$mensaje = "Nombre: " . $name . " \r\n";
		$mensaje .= "Marca: " . $brand . " \r\n";
		$mensaje .= "Servicio: " . $service . " \r\n";
		$mensaje .= "1. ¿Qué tan satisfecho está con el tiempo de respuesta?: " . $ans_1 . " \r\n";
		$mensaje .= "2. ¿Qué tan satisfecho está con la descripción de los conceptos?: " . $ans_2 . " \r\n";
		$mensaje .= "3. ¿Qué tan satisfecho está con el servicio y la atención que se le brindó?: " . $ans_3 . " \r\n";
		$mensaje .= "4. ¿Qué tan satisfecho está con la propuesta económica?: " . $ans_4 . " \r\n";
		$mensaje .= "5. ¿Cuál fue el motivo por el cuál se decidió no colaborar con YellowPath o trabajar con otra agencia / freelance?: " . $ans_5 . " \r\n";
		
		$mensaje .= "\n\nEnviado el ".date('d-m-Y H:i:s');

		$para = 'yellowpathsm@gmail.com';
		$asunto = 'Respuesta Encuesta de Satisfacción';

		if(mail($para, $asunto, $mensaje, $header)) {
			echo'<body><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"><div><img src="assets/img/logo_vert.png" alt="Yellowpath"><h1>¡Gracias por tus respuestas!</h1></div><style>body {margin: 0;padding: 0;}div {display: block;text-align: center;background-size: cover;height: 100vh;width: 100vw;background-color: #212121;}img {width: 45rem;display: inline-block;margin-top: 8%;}h1 {font-family: Montserrat, sans-serif;font-size: 4.1rem;display: inline-block;color: #fff;}@media (max-width: 1000px){img {margin-top: 25vh;width: 90vw;}}</style></body>';
		}
		else {
		  	echo'<body><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"><div><h1>Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</h1></div><style>body {margin: 0;padding: 0;}div {display: block;text-align: center;background-color: #212121;width: 100vw;height: 100vh;}h1 {padding: 3.5rem;background-color: rgba(255,255,255,.5);font-size: 4.1rem;display: inline-block;margin: 19.5% auto;color: #000;font-family: Montserrat, sans-serif;}</style></body>';
		  }					    
	?>