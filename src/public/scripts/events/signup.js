const signupForm = document.getElementById("signupForm");
const signupBtn = document.getElementById("signupBtn");

if(signupForm){
  signupForm.addEventListener("submit", e => {
    e.preventDefault();

    // Get User Info
    const email = signupForm["signup_email"].value;
    const username = signupForm["signup_username"].value;
    const firstname = signupForm["signup_firstname"].value;
    const lastname = signupForm["signup_lastname"].value;
    const password = signupForm["signup_password"].value;
    const v_password = signupForm["signup_v_password"].value;

    // Send User data to Backend Server
    const data = {
      email,
      username,
      firstname,
      lastname,
      password
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
      auth.currentUser.sendEmailVerification()
        .then(function() {
          alert("Sent Verification")
        })
        .then(()=>{
          location.href = `/auth/verification?email=${auth.currentUser.email}`
        })
        .catch(function(error) {
          console.log(error.code)
          console.log(error.message)
        });
    })
    .catch(err => {
      console.log(err.code)
      console.log(err.message)
    })
  })
}