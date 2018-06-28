function loadCurrencies(){
	var from=document.getElementById('from');
	var to=document.getElementById('to');
	var xHttp= new XMLHttpRequest();
	xHttp.onreadystatechange=function(){
		if(xHttp.readyState==4 && xHttp.status==200){
			var obj=JSON.parse(this.responseText);
			var options='';
			for(key in obj.results){
				options=options+'<option>'+key+'</option>'
			}
			from.innerHTML=options;
			to.innerHTML=options;
		}
	}
	xHttp.open('GET', 'https://free.currencyconverterapi.com/api/v5/currencies', true);
	xHttp.send();
}

// function convertCurrency(){
// 	var from=document.getElementById('from').value;
// 	var to=document.getElementById('to').value;
// 	var amount=document.getElementById('amount').value;
// 	var result=document.getElementById('result');
// 	if(from.length>0 && to.length>0 && amount.length>0){
// 		var xHttp = new XMLHttpRequest();
// 		xHttp.onreadystatechange=function(){
// 			if(xHttp.readyState==4 && xHttp.status==200){
// 				var obj = JSON.parse(this.responseText);
// 				var fact=obj.value;
// 				if(fact!=undefined){
// 					result.innerHTML=parseFloat(amount)*parseFloat(fact);
// 				}
// 			}
// 		}
		
// 	}
// 	xHttp.open('GET', 'https://free.currencyconverterapi.com/api/v5/convert?q='+from+'_'+to'&compact=ultra', true);
// 	xHttp.send();
// }