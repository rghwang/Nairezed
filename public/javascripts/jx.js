window.jx = {
	ajax: function(url ,data ,callback) {
		if(data.tagName == "FORM") data = jx.serialize(data);
		$.post(url, data, function(data, textStatus, jqXHR) { callback(data) })
		.error(function(){ alert('error at ' + url) } );
	}
	, serialize: function(o) {
		return $(o).serialize();
	}
	, id: function(str){
		return document.getElementById(str);
	}
	, on: function(str, event, callback) {
		if( typeof(str) === "string" ) {
			jx.id(str).addEventListener(event,callback);
		}else{
			str.addEventListener(event,callback);
		}
	}
	, ready: function(callback) {
		$(document).ready(callback);
	}
	, q: function(query) {
		return document.querySelector(query);
	}
}

