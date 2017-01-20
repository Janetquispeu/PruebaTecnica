$(document).ready(function(){
	var $btnAdd=$("#btn-add");
	var $btnClear=$("#btn-clear");
	var $btnEdit=$("#btn-edit");
	var $containerNumbers=$(".container-numbers");
	var $containerResults=$(".container-results");
	var $inputNumbers=$(".input-numbers");

	$btnAdd.click(function(){
		var $inputLengthNumbers=parseInt($("#input-length-numbers").val());
		var count=0 ;
		var index=0;
		var array=[];

		/* Crear inputs de acuerdo a la cantidad de numeros a ordenar y validar si la cantidad de numero es un entero*/	
		if (/^([0-9])*$/.test($inputLengthNumbers) && $inputLengthNumbers!=0 && $($inputLengthNumbers).length!=0) {
			$(this).attr("disabled", true);
			while($inputLengthNumbers!=count){	
				var $inputNumbers="<input type='number' id='input-numbers"+count+ "' class='input-numbers' maxlength='10'>";
				var idCount="#input-numbers"+count;

				$($inputNumbers).appendTo($containerNumbers);
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
		}else if($inputLengthNumbers==0){
			alert("Ingrese numero");
		}else{
			alert("Ingrese numero");
		}

		$("#ordenar").click(function(){
			var $resultText=$(".result-text");
			$(this).attr("disabled", true);
			leerArray($inputLengthNumbers, index,array);
		  ordenarAsc(array);
		  $($resultText).show();
			imprimir(array);
			$(this).attr("disabled", false);
		});
		
		$("#input-length-numbers").val(" ");
	});

	$btnClear.click(function(){
		location.reload();
	});

	// funcion Leer Array
	function leerArray(lengthArray,index,array){
		while(lengthArray!=index){
			var id="#input-numbers"+index;
			var $numberValue=parseInt($(id).val());
			array[index]=$numberValue;
			index++;
	  }
	}

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
		for(i=0;i<(a.length);i++){
			var results="<div class='results animated flash'>"+a[i]+"</div>";
			$(results).appendTo($containerResults);
		}	 	
	}

});


