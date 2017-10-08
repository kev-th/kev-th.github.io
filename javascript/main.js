
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZxHivEutSMZBnwJ8TeiDatEIyYRtpvWY",
    authDomain: "contactform-3b060.firebaseapp.com",
    databaseURL: "https://contactform-3b060.firebaseio.com",
    projectId: "contactform-3b060",
    storageBucket: "contactform-3b060.appspot.com",
    messagingSenderId: "607485270747"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
	e.preventDefault();
  
	// Get values
	 name = getInputVal('name');
	//var company = getInputVal('email');
	 email = getInputVal('email');
	//var phone = getInputVal('phone');
	 message = getInputVal('message');
  
	// Save message
	saveMessage(name, email, message);
  
	// Show alert
	document.querySelector('.alert').style.display = 'block';
  
	// Hide alert after 3 seconds
	setTimeout(function(){
	  document.querySelector('.alert').style.display = 'none';
	},3000);
  
	// Clear form
	document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
	return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	  name:name,
	  email:email,
	  message:message
	});
  }
