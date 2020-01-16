
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

firebase.auth().onAuthStateChanged(user=>{
  console.log(user)
})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


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


function signUp(){

  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  const username = document.getElementById("inputUsername").value;
  const passwordcon = document.getElementById("inputConfirmPassword").value;

  if (validateEmail(email)) {
    if (password === passwordcon) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
      })
    }
  }
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
  var s = "desp"+id;
  var x = document.getElementById(s);
  // var col = document.getElementsByClassName("card-body");
  var i;

  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }

  
}

function getinfouser(){
  var email;
  var uemail= document.getElementById("uemail");
  var ref; 
  var uname = document.getElementById("username");
  var cuser = firebase.auth().currentUser;


  firebase.auth().onAuthStateChanged(function (user){
    email=user.email;
    console.log(email);
    uemail.innerText=email;
    ref = db.collection("user").doc('' + user.uid);
    ref.get().then(function (doc) {
      uname.innerText = doc.data().name;
    })
  })

  

  

}


function checkif(){
  // var user = firebase.auth().currentUser;
  var log = document.getElementById("loginpage");
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location.href = "perfil.html";

      // User is signed in.
    } else {
      window.location.href = "login.html";

      // No user is signed in.
    }
  })
  

  
}

function showlog(){
  var x = document.getElementById("loginpage");
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      x.style.display = "none";

      // User is signed in.
    } else {
      x.style.display = "block";

      // No user is signed in.
    }
  })
}

function logout(){
  firebase.auth().signOut().then(() => {
    console.log('user signed out');
    window.location.href="index.html";
  })
}
function showform(){
  var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


}

function changeuname(){
  const uname = document.getElementById("inputUname").value;
  var form = document.getElementById("form")
  // console.log(uname);
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user.uid);
    db.collection("user").doc(user.uid).set({
    name: uname

    })
  });
  form.style.display = "none";

  
}
