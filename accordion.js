// js_Accordion

   var articles = new Array();

   for (var i=1; i<=4; i++){
		articles[i] = document.getElementById("article" + i);
		articles[i].onclick = function(){
			showHide(this);
		}   
	}

	function showHide(elem){	
		var clickedText = elem.getElementsByTagName("p");
		if (clickedText[0].className.match(/\bvisible\b/)){
			clickedText[0].className = "";
     	} else {
			clickedText[0].className = "visible";
		
		}
	}