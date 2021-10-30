function validateFirstName () { /*To check the number of characters entered*/
    var fName = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if(re1.test(fName)) {
	    document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>"
		return true;
	}
	else {
	    document.getElementById("firstNamePrompt").style.color = "Red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2-15 characters</strong>"
		return false;
	}
}

function validateLastName () { /*To check the number of characters entered*/
    var lName = document.getElementById("lastName").value;
	var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;
	
	if(re2.test(lName)) {
	    document.getElementById("lastNamePrompt").style.color = "green";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>"
		return true;
	}
	else {
	    document.getElementById("lastNamePrompt").style.color = "Red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2-15 characters</strong>"
		return false;
	}
}

function validatePhone () { /*To check the format of phone-number entered*/
    var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;
	
	if (re3.test(phoneNumber)) {
	    document.getElementById("phonePrompt").style.color = "Green";
		document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	}
	
	else {
	    document.getElementById("phonePrompt").style.color = "Red";
		document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
		return (false);
	}
}

function confirm() { /*To confirm the order*/

    var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var userName =  firstName + " " + lastName;
	
	
	document.getElementById("RegistrationConfirm").innerHTML = "Hey " + userName + "! Your order has been placed. Have a good day:)";
}
	
