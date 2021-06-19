
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAdO11ZdDJi9wqP5z3umsSyStpkbMGJPUQ",
      authDomain: "c-93-62245.firebaseapp.com",
      projectId: "c-93-62245",
      storageBucket: "c-93-62245.appspot.com",
      messagingSenderId: "501012541828",
      appId: "1:501012541828:web:12e785649ff278a6972dd1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
