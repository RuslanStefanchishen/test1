function Strategy(){//an strag
	this.action=function(){};
}

//StrategyCalc.prototype = new AnimalStrategy();
//StrategyCalc.prototype.constructor = StrategyCat;

function StrategyMinus(){
	this.action=function(var1, var2){ // messa del
		//console.log(var1);
		document.getElementById("P").innerHTML=var1-var2;;
	};
}

function StrategyPlus(var1,var2){
	//var1=parseInt(var1);
	//var2=parseInt(var2);
	this.action=function(var1, var2){ // messa del
		//console.log(var1);
		document.getElementById("P").innerHTML=parseInt(var1)+parseInt(var2);
	};

}

function StrategyDel(var1,var2){
	this.action=function(var1, var2){ // messa del
		//console.log(var1);
		document.getElementById("P").innerHTML=var1/var2;
	};

}

function StrategyMulti(var1,var2){
	this.action=function(var1, var2){ // messa del
		//console.log(var1);
		document.getElementById("P").innerHTML=var1*var2;
	};

}

function context(strategy){
	this.action=function(var1,var2){//mes del
		strategy.action(var1,var2);//del
	}
	}

function clien(){
var select=document.getElementById("select");

select.addEventListener("change",function(){
var item=null;
var var1=document.getElementById("var1").value;
var var2=document.getElementById("var2").value;
//console.log(var1);
	switch(select.value){
		case "Minus":
		item =  new StrategyMinus(var1, var2);
		
		break;
		case "Del":
		item =  new StrategyDel(var1, var2);
		
		break;
		case "Plus":
		item =  new StrategyPlus(var1, var2);
		
		break;
		
		case "Multi":
		item =  new StrategyMulti(var1, var2);
		
		break;
	}
	var v = new context(item);
	v.action(var1,var2);
},false);



}
