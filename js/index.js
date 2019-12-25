
// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDt-4nQ34xJ6DDy9KVXaoSj7S164dfHQmQ",
//   authDomain: "sipc-web-ab169.firebaseapp.com",
//   databaseURL: "https://sipc-web-ab169.firebaseio.com",
//   projectId: "sipc-web-ab169",
//   storageBucket: "sipc-web-ab169.appspot.com",
//   messagingSenderId: "561462445785",
//   appId: "1:561462445785:web:df7fb8fe481519395ea0c8"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

// const functions = require('firebase-functions');
console.log("ok");
function pepe() {
  alert("porque");
}

const hp = false;


function mailLogin() {


  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  var login = document.getElementById("logIn");

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      login.setAttribute("href", "index.html")
      // alert("juan")
    )
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

}


function getinfo(id){
  // const db = firebase.firestore();
  var ref = db.collection("libros").doc(''+id);
  var name;
  ref.get().then(function(doc){
    console.log(doc.data());
  });

  // window.open("../book.html")
  
  // var name = db.ref('/libros/'+ id + 'nombre');
  // console.log(name);

}