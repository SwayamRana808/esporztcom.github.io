// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyC0f5Dq9guw-aWRrVwiSvlMpO9vaFPHocs",
    authDomain: "esportzcommunity.firebaseapp.com",
    databaseURL: "https://esportzcommunity-default-rtdb.firebaseio.com",
    projectId: "esportzcommunity",
    storageBucket: "esportzcommunity.appspot.com",
    messagingSenderId: "836432363630",
    appId: "1:836432363630:web:9f2cf3108665edb14e267f",
    
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Teams Info');
  
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
  // function saveMessage(name,name2,name3,name4,email){
  //   var newMessageRef = messagesRef.push();
  //   newMessageRef.set({
  //     name: name,
  //     name2 : name2,
  //     name3 : name3,
  //     name4 :name4,
  //     email : email
  //   });
    function saveMessage(name,name2,name3,name4,email){
      teamname=document.getElementById("teamname").value;
      firebase.database().ref("/").child(teamname).set({  //set-->update to add more data uder same teams names.
      PLayer1: name,
      Player2: name2,
      Player3: name3,
      Player4:name4,
      Email: email
      });
    }
    function getData(){
      teamname=document.getElementById("teamname").value;
      firebase.database().re("/").on('value',function(snapshot){
        snapshot.forEach(function(get_score_and_name){
        get_score_and_name.val;
        name=get_score_and_name.key;
        console.log("name team"+name);
        });
      });
    }
    getData();

  