
var firebaseConfig = {
    apiKey: "AIzaSyCR0ntXvRbQ_ytQBFxwDNch7luoQ971ops",
    authDomain: "class-test-5f65e.firebaseapp.com",
    databaseURL: "https://class-test-5f65e-default-rtdb.firebaseio.com",
    projectId: "class-test-5f65e",
    storageBucket: "class-test-5f65e.appspot.com",
    messagingSenderId: "65808329580",
    appId: "1:65808329580:web:2e60d2d8502e26ea8b2149"
  };
  firebase.initializeApp(firebaseConfig);
  
   
   function addUser()
   {
       user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
       });
       
   }
