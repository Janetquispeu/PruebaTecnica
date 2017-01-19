$(document).ready(function(){
	var $btnAdd=$("#btn-add");
	var $container=$(".container");

	$btnAdd.click(function(){
		var $inputLengthNumbers=parseInt($("#input-length-numbers").val());
		var count=0 ;
		var index=0;
		var array=[];

		/* Crear inputs de acuerdo a la cantidad de numeros a ordenar*/
			
			if (/^([0-9])*$/.test($inputLengthNumbers)) {
				var $containerNumber="<div class='containerNumber'>"+$inputLengthNumbers+"</div>";
				$($containerNumber).appendTo($container);

				while($inputLengthNumbers!=count){	
					var $inputNumbers="<input type='text' id='input-numbers"+count+ "' maxlength='3'>";
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


		$("#ordenar").click(function(){
			console.log($inputLengthNumbers);
			while($inputLengthNumbers!=index){
				var id="#input-numbers"+index;
				var $numberValue=parseInt($(id).val());
				array[index]=$numberValue;
				index++;
		  }
		  ordenarAsc(array);
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
		var $container=$(".container");
		for(i=0;i<(a.length);i++){
			var results="<div>"+a[i]+"</div>";
			$(results).appendTo($container);		
		}	 	
	}

});


