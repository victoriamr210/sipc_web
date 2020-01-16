const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  var login = document.getElementById("logIn");

  // log the user in
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      // alert("ok");
      // login.setAttribute("href", "index.html");
      window.location.href = "index.html";



    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);
      // Some error occurred, you can inspect the code: error.code
    })

});