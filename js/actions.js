function showText() {
	var otherBox = document.getElementById("otherBox");
	var otherText = document.getElementById("otherText");
	
	if (otherBox.checked) {
		otherText.type = "text";
	}
	else {
		otherText.type = "hidden";
	}
}

function call() {
  var form = document.getElementById("form").elements;
  var contents = "Form:\n";

  for (i = 0 ; i < form.length-1 ; i++) {
  	if (form[i].value != "") {
	  	if (form[i].name == "color") {
		  	if (form[i].checked) {
		  		contents += (form[i].value + "\n");
		  	}
		}
		else {
			contents += (form[i].value + "\n");
		}
	}
  }

  alert(contents);
}

