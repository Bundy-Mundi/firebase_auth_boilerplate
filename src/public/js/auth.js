const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

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

    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res.json())
        return res.json()
      })
      .catch(err => console.log(err))
  });
}

if(loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm["login_email"].value;
    const password = loginForm["login_password"].value;

    const data = { email, password }

    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(token => {
        console.log(token)
      })
      .catch(err => console.log(err))
  })
}