// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
    //After that, we change the CSS class of the input field based on the value of the type parameter. If the type is true, we change the class of the input to success. Otherwise, we change the class to error
	input.className = type ? "success" : "error";
	return type;
}
/*
The the showError() and showSuccess() functions call the showMessage() function. The showError() function always returns false whereas the showSuccess() function always returns true. Also, the showSuccess() function sets the error message to an empty string.
*/
function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

/*
The hasValue() function checks if an input element has a value or not and show an error message using the showError() or showSuccess() function accordingly
*/
function hasValue(input, message) {

    //After accessing a form field, you can use the value property to access its value
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

//To reference the <form> element, you can use DOM selecting methods such as getElementById() / querySelector
//To access form fields, you can use DOM methods like getElementsByName(), getElementById(), querySelector(), etc.
const form = document.querySelector("#signup");


//define some constants to store the error message

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";


//add the submit event listener of the signup form using the addEventListener() method
/*
In the submit event handler:

Stop the form submission by calling the event.preventDefault() method.
Validate the name and email fields using the hasValue() and validateEmail() functions.
If both name and email are valid, show an alert. In a real-world application, you need to call the form.submit() method to submit the form.
*/
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
  
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});


/*
form.elements[0]; // by index
form.elements['name']; // by name
form.elements['name']; // by id (name & id are the same in this case)

*/