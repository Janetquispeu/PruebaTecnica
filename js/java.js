$(document).ready(function(){
  var $btnOrdenar=$("#ordenar");
  var $btnAdd=$("#btn-add");
  var $btnClear=$("#btn-clear");
  var $btnEdit=$("#btn-edit");
  var $inputLength=$("#input-length-numbers");
  var $containerNumbers=$(".container-numbers");
  var $containerResults=$(".container-results");
  var $inputNumbers=$(".input-numbers");

  $inputLength.keydown(function(e){
    var index=0;
    var array=[];
    var $inputLengthNumbers=parseInt($($inputLength).val());
    if(e.keyCode==13){
      createInput($inputLengthNumbers);
      $(this).attr("disabled", true);
      $(this).parent().next().children().attr("disabled", true);

      $btnOrdenar.click(function(){
        var $resultText=$(".result-text");
        $(this).attr("disabled", true);
        leerArray($inputLengthNumbers, index,array);
      });

      if($inputLengthNumbers<0 || $inputLengthNumbers==0){
        $(this).attr("disabled", false);
      }

      $($inputLength).val(" ");
    }
  });

  $btnAdd.click(function(){
    var $inputLengthNumbers=parseInt($($inputLength).val());
    var index=0;
    var array=[];

    $(this).attr("disabled", true);
    $(this).parent().prev().children().attr("disabled", true);
    createInput($inputLengthNumbers);

    $btnOrdenar.click(function(){
      var $resultText=$(".result-text");
      $(this).attr("disabled", true);
      leerArray($inputLengthNumbers, index,array);
    });

    $($inputLength).val(" ");
  });

  $btnClear.click(function(){
    location.reload();
  });

  //funcion crear inputs
  function createInput($inputLengthNumbers){
    var count=0 ;

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
      alert("Ingrese numero entero positivo ");
      $($btnAdd).attr("disabled", false);
    }else{
      alert("Ingrese numero entero positivo");
      $($btnAdd).attr("disabled", false);
    }
  }

  // funcion Leer Array
  function leerArray($inputLengthNumbers,index,array){

    while($inputLengthNumbers!=index){
      var id="#input-numbers"+index;
      var $numberValue=parseInt($(id).val());
      array[index]=$numberValue;
      index++;
    }
    validar(array,$inputLengthNumbers);
  }

  function validar(array,$inputLengthNumbers){
    var $resultText=$(".result-text");
    var a=array;
    var iguales=0;
    var count=0;
    var count1=0;
    var k=0;
    var iterar=parseInt($inputLengthNumbers);
    for (var i=0; i<iterar; i++){
      k++;
      for(var j=k; j<iterar;j++){
        if(a[i]==a[j]){
          count++;
        }else{
          count1++;
        }
      }
    }
    if(count>0){
      alert(" Los números ingresados no deben repetirse.")
    }else{
      ordenarAsc(array);
      $($resultText).show();
      imprimir(array);
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