$(document).ready(function(){
	var $btnAdd=$("#btn-add");
	var $container=$(".container-numbers");

	$btnAdd.click(function(){
		var $inputLengthNumbers=parseInt($("#input-length-numbers").val());
		var count=0 ;
		var index=0;
		var index1=0;
		var array=[];

		/* Crear inputs de acuerdo a la cantidad de numeros a ordenar*/	
		if (/^([0-9])*$/.test($inputLengthNumbers)) {
			// var $containerNumber="<div class='containerNumber'>"+$inputLengthNumbers+"</div>";
			// $($containerNumber).appendTo($container);

			while($inputLengthNumbers!=count){	
				var $inputNumbers="<input type='text' id='input-numbers"+count+ "' class='input-numbers' maxlength='10'>";
				var idCount="#input-numbers"+count;

				$($inputNumbers).appendTo($container);
				count++;

				/*Saltar cursor*/
				$(idCount).keydown(function(e){
					var ascii = e.keyCode;
					if (ascii==13) { 
			      var $inputFocus=$(this).next();
			      $inputFocus.focus();   
				  }   
				});
			}	
		}else{
			alert("Ingrese numero");
		}

		// while($inputLengthNumbers!=index1){
		// 	var $inputNumbers="<input type='text' id='input-numbers"+count+ "' maxlength='3'>";
		// 	var id1="#input-numbers"+index1;
		// 	$(id1).keydown(function(){
		// 		var $numberValue1=parseInt($(id1).val());
		// 		if(/^([0-9])*$/.test($numberValue1)){
		// 			alert("bien")
		// 		}else{
		// 			alert("Ingrese numero");
		// 		}
		// 		index1++;
		// 	});
		// }

		$("#ordenar").click(function(){
			var $containerNumbers=$(".container-numbers");
			var $resultText=$(".result-text");
			while($inputLengthNumbers!=index){
				var id="#input-numbers"+index;
				var $numberValue=parseInt($(id).val());
				array[index]=$numberValue;
				index++;
		  }
		  ordenarAsc(array);
		  $($containerNumbers).hide();
		  $($resultText).show();
			imprimir(array);
		});
		
		$("#input-length-numbers").val(" ");
	});

	/*Ordenar número*/
	function ordenarAsc(a){
		var menor;
		for (i=0;i<(a.length-1);i++){
			for(j=(i+1);j<a.length;j++){
				if(a[j]<a[i]){
				  menor=a[j];
				  a[j]=a[i];
				  a[i]=menor;
				}
			}
		}
	}

	/*imprimir de manera ascendente*/
	function imprimir(a){
		var $containerResults=$(".container-results");
		for(i=0;i<(a.length);i++){
			var results="<div class='results animated flash'>"+a[i]+"</div>";
			$(results).appendTo($containerResults);
		}	 	
	}

});


