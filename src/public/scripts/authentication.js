const loggedIn = document.querySelectorAll("._loggedIn");
const loggedOut = document.querySelectorAll("._loggedOut");

auth.onAuthStateChanged(user => {
  if(user){
    toggleUI("loggedIn", "flex");
    console.log("User Logged In", { user });
  }else{
    toggleUI("", "flex");
    console.log("User Logged Out")
  }
});

const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

const signupForm = document.getElementById("signupForm");
const signupBtn = document.getElementById("signupBtn");

const logoutBtn = document.getElementById("logoutBtn");

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
      .catch(err => {
        console.log(err.code)
        console.log(err.message)
      })
  })
}

if(loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm["login_email"].value;
    const password = loginForm["login_password"].value;

    auth.signInWithEmailAndPassword(email, password)
      .then(cred => cred)
      .catch(err => console.log(err))
  })
}

if(logoutBtn){
  function handleClick(e) {
    e.preventDefault();
    auth.signOut()
      .then(()=>{
        console.log("LOGGED OUT")
      })
      .catch(err => {
        console.log(err)
      })
  }
  logoutBtn.addEventListener("click", e => handleClick(e))
}