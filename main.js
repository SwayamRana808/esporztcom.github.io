// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyC0f5Dq9guw-aWRrVwiSvlMpO9vaFPHocs",
    authDomain: "esportzcommunity.firebaseapp.com",
    databaseURL: "https://esportzcommunity-default-rtdb.firebaseio.com",
    projectId: "esportzcommunity",
    storageBucket: "esportzcommunity.appspot.com",
    messagingSenderId: "836432363630",
    appId: "1:836432363630:web:9f2cf3108665edb14e267f",
    measurementId: "G-HLYX3DJMLM"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var  name2 = getInputVal('name2');
    var name3 = getInputVal('name3');
    var name4 = getInputVal('name4');
    var email = getInputVal('email');
  
    // Save message
    saveMessage(name,name2,name3,name4,email);
  
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
  function saveMessage(name,name2,name3,name4,email){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      name2 : name2,
      name3 : name3,
      name4 :name4,
      email : email
    });
  }