//CREATED BY: Mg. Sc. Harold Coila

var now=new Date();
var ax=now.getFullYear(),mx=now.getMonth()+1;
var d=1,m=1,a=ax;

$(document).ready(function(){
	for(var i=1;i<32;i++){
		$('#dia').append("<option value="+i+">"+i+"</option>");
	}
	for(var j=ax;j>1919;j--){
		$('#anio').append("<option value="+j+">"+j+"</option>");
	}
});

function active(x){
	switch(x){
		case 1: d=document.getElementById('dia').value;break;
		case 2: m=document.getElementById('mes').value;break;
		case 3: a=document.getElementById('anio').value;break;
	}
}

function evaluar(){
    document.getElementById("box").style.opacity = "0";
    
    var naci = new Date(a,m-1,d);
    var rango = now.valueOf() - naci.valueOf();
    
    if(rango<0){ alert("Fecha de nacimiento invalida!");location.reload(); }
    else{
    	setTimeout(function(){
    		$.ajax({
    			url: "function.php?datex="+a+"-"+m+"-"+d,
    			type:"POST",
    			cache: false,
    			contentType: false,
    			processData: false,
    			success:function(z){
    				setTimeout(() => {  document.getElementById("res2").innerHTML=z;document.getElementById("box").style.opacity = "1" }, 200);
    			}
    		})
    	},0);
    }
}
