$(document).ready(function(){
	alert("Hola");
	var $btnAdd=$("#btn-add");

	$btnAdd.click(function(){
		var $inputLengthNumbers=parseInt($("#input-length-numbers").val());
		var $container=$(".container");
		var $containerNumber="<div class='containerNumber'>"+$inputLengthNumbers+"</div>";
		var count=0 ;
		var index=0;
		var array=[];

		$($containerNumber).appendTo($container);

		/* Crear inputs de acuerdo a la cantidad de numeros a ordenar*/
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

			$("#ordenar").click(function(){
				var id="#input-numbers"+index;
				var $numberValue=parseInt($(id).val());
				array[index]=$numberValue;
				index++;
				ordenarAsc(array);
			  console.log(array);
			});
		}	
		
		$("#input-length-numbers").val(" ");
	});
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

// function imprimir(a){
// 	var $container=$(".container");
// 	for(i=0;i<(a.length);i++){
// 		$($results).html(a[i]);
// 	}
// }