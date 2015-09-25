function exp_coll(){
	if(document.getElementById("expand_collapse").style.display == "none"){
		document.getElementById("expand_collapse").style.display = "block"
		document.getElementById("plusminus").setAttribute('src','/JRS/CitiGold_BTG/images/minus.jpg')
	}
	else{
		document.getElementById("expand_collapse").style.display = "none"
		document.getElementById("plusminus").setAttribute('src','/JRS/CitiGold_BTG/images/plus.jpg')
	}
	
}