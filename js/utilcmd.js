define(function(require,exports,module){
	exports.$=function(id){
		return document.getElementById(id);
	}
	
	exports.$create = function(tagName){
		return document.createElement(tagName);
	}
	
});
