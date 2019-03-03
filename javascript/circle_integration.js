$(document).ready(function() {

	var groupname = "test_group";
	var username = "amythyst";

	var ref = firebase.database().ref();
	var groupRef = ref.child(groupname);
	var myEventRef = groupRef.child(username).child("events");

	var classes_array = ["testing"];

	// eventRef.on("child_added")

    displayClasses();

	ref.child(groupname).on("child_added", snap=> {
    var info = snap.child("events");
    console.log(info);    
    //First argument was an invalid path = "[object Object]". 
    //Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]
    ref.child(groupname).child(info).orderByChild().equalTo(eventname).once("value",snapshot => {
        if (snapshot.exists()){
          const userData = snapshot.val();
          console.log("exists!", userData);
          classes_array.push(userData);
        }
    });
    displayClasses();
  })





    // myEventRef.orderByChild()


  	function displayClasses() {
  		document.getElementById("data").innerHTML = classes_array.join(" ");
  		window.alert("done joining");
	}


})




