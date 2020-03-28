
 var firebaseConfig = {
    apiKey: "AIzaSyA3NDMYr6szQz6g-efdyDbziSGk5BGoa_c",
    authDomain: "quickpenaltypay-34fce.firebaseapp.com",
    databaseURL: "https://quickpenaltypay-34fce.firebaseio.com",
    projectId: "quickpenaltypay-34fce",
    storageBucket: "quickpenaltypay-34fce.appspot.com",
    messagingSenderId: "1002354518853",
    appId: "1:1002354518853:web:23eb2702eb8785e5c1ec2c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
    var reffetch= database.ref("User");
    reffetch.on("value",gotData,errData);
    var len=1;
    
   function gotData(data){
    	var Key = Object.keys(data.val());
    	len = Key.length + 1;
    	console.log(len);
    }
    function errData(err){
    	console.log("error");
    }
  
 
function writeData() {
	 
	database.ref("User").child("user: "+len).set({
		Name: document.getElementById("name").value,
  		RegNo: document.getElementById("regno").value,
  		Email: document.getElementById("email").value,
  		PhoneNo: document.getElementById("phone_no").value
  	});	
}



