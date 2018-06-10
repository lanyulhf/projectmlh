function imgFunction(){
	$("#divImage").mouseover(function(){
			$("#bgdiv").css({
				"display":"block"
			});
		/*$("#divImage #imgs").animate({
			"width":384,
			"height":230
		},100);*/
		
		});
		$("#divImage").mouseout(function(){
			$("#bgdiv").css({
				"display":"none"
			});
			/*$("#divImage #imgs").animate({
			"width":320,
			"height":192 
		},100);*/
		});
}
		


