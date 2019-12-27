
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

const hp = false;


function mailLogin() {


  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  var login = document.getElementById("logIn");

  // login.setAttribute("href", "../index.html")
  // alert("juan")
  // console.log("hola")
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(fb){
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log("ok");
        } else {
          console.log("fallo");

          // No user is signed in.
        }
      });
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });

}

function lola(){
  alert("lola");
}


function hola(id){
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

function build(id){
  const card = document.querySelector('#desp'+id);
  const par = document.querySelector('#au'+id);
  var ref = db.collection("libros").doc('' + id);
  let h5 = document.createElement('h5');
  let p = document.createElement('p');
  p.textContent= "Autor: "
  ref.get().then(function (doc) {
    console.log(doc.data());
    h5.textContent = doc.data().precio;
    h5.append("€");
    p.append(doc.data().autor);
    par.appendChild(p);
    card.appendChild(h5);
  });
}



function build_all(){
  var i;
  for(i=1; i<=8; i++){
    build(i);
  }
}

function getinfo(id){


  // build(id);
  // const card = document.querySelector("#desp");
  // const par = document.querySelector("#au");
  // var ref = db.collection("libros").doc('' + id);
  // let h5 = document.createElement('h5');
  // let p = document.createElement('p');
  // ref.get().then(function (doc) {
  //   console.log(doc.data());
  //   h5.textContent = doc.data().precio;
  //   p.textContent = doc.data().autor;
  //   par.appendChild(p);
  //   card.appendChild(h5);
  // });
  var s = "desp"+id;
  var x = document.getElementById(s);
  // var col = document.getElementsByClassName("card-body");
  var i;

  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }

  // for(i=0; i<col.length; i++){
  //   col[i].addEventListener("click", function(){
  //   var content = this.nextElementSibling;
  //   if (content.style.display === "block") {
  //     content.style.display = "none";
  //   } else {
  //     content.style.display = "block";
  //   }
  // });
  // }

  
}