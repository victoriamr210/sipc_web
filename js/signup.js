

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}




const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  const username = document.getElementById("inputUsername").value;
  const passwordcon = document.getElementById("inputConfirmPassword").value;
  var signup = document.getElementById("signup");
  if (validateEmail(email)) {
    if (password === passwordcon) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          // window.localStorage.setItem('emailForSignIn', email);
          firebase.auth().signInWithEmailAndPassword(email, password).then(
            db.collection("user").doc(firebase.auth().currentUser.uid).set({
              name: username,
              uemail: email
            })
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            })
            
            
            )
            // signup.setAttribute("href", "index.html");
            window.location.href = "index.html";

              
          
         

            // db.collection("cities").doc("LA").set({
            //   name: "Los Angeles",
            //   state: "CA",
            //   country: "USA"
            // })
            // .then(function () {
            //   console.log("Document successfully written!");
            // })
            // .catch(function (error) {
            //   console.error("Error writing document: ", error);
            // });
          // console.log("ok");
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(error);
          // Some error occurred, you can inspect the code: error.code
        })
      // firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
      //   console.log(cred);
      // })
    }
  }else{
    alert("email inválido");
  }
  // const email = signupForm['signup-email'].value;
  // const password = signupForm['signup-password'].value;
});
