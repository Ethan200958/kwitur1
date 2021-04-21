var firebaseConfig = {
    apiKey: "AIzaSyBZCmJ1wE-MZbe7BYx_4pwv-IL-CrOAUJE",
    authDomain: "kwiturproject.firebaseapp.com",
    databaseURL: "https://kwiturproject-default-rtdb.firebaseio.com",
    projectId: "kwiturproject",
    storageBucket: "kwiturproject.appspot.com",
    messagingSenderId: "1017785650259",
    appId: "1:1017785650259:web:5b2b7a3c273d17c0d04aa6"
  };
  firebase.initializeApp(firebaseConfig);

function addRoom() {
        username = document.getElementById("username").value;
        firebase.database().ref("/").child(username).update({
          purpose: "anything"
        });
    }
