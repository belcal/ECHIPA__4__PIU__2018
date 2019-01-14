function init(){
	//alert("init");
	var campNume = document.getElementById("nume");
	campNume.onblur = validareNume;
	var campData = document.getElementById("data");
	campData.onblur = validareData;
	var campEmail = document.getElementById("email");
	campEmail.onblur = validareEmail;
}

function validareNume(){
	//alert("validareNume");
	var campNume = document.getElementById("nume");
	if(campNume.value.length < 3){
		campNume.style.backgroundColor="yellow";
		return false;
	}else{
		campNume.style.backgroundColor="white";
		return true;
	}
}

function validareData(){
	var campData = document.getElementById("data");
	var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if(campData.value.match(dateformat)){
	document.f1.data1.focus();
	var opera1 = campData.value.split('/');
	var opera2 = campData.value.split('-');
	lopera1 = opera1.length;
	lopera2 = opera2.length;
	if (lopera1>1){
		var pdate = campData.value.split('/');
	}
	else if (lopera2>1){
		var pdate = campData.value.split('-');
	}
	var dd = parseInt(pdate[0]);
	var mm  = parseInt(pdate[1]);
	var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
	var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
	if (mm==1 || mm>2){
		if (dd>ListofDays[mm-1]){
			campData.style.backgroundColor="yellow";
			return false;
		}
	}
	if (mm==2){
		var lyear = false;
		if ( (!(yy % 4) && yy % 100) || !(yy % 400)){
			lyear = true;
		}
		if ((lyear==false) && (dd>=29)){
			campData.style.backgroundColor="yellow";
			return false;
		}
		if ((lyear==true) && (dd>29)){
			campData.style.backgroundColor="yellow";
			return false;
		}
	}
  }
  else{
	document.f1.data1.focus();
	campData.style.backgroundColor="yellow";
	return false;
  }	
}

function validareEmail(){
	var campEmail = document.getElementById("email");
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campEmail.value))
  {
    return true;
  }
    campEmail.style.backgroundColor="yellow";
    return false;
}

function myFunction() {
  document.getElementById("form2").style.visibility = "visible";
  document.getElementById("f").reset;
  document.getElementById("nume").style.backgroundColor="white";
  document.getElementById("data").style.backgroundColor="white";
  document.getElementById("email").style.backgroundColor="white";
}


window.onload=init;