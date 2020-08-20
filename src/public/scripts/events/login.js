const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

if(loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm["login_email"].value;
    const password = loginForm["login_password"].value;

    auth.signInWithEmailAndPassword(email, password)
      .then(cred => {
        if(cred){
          location.href = "/"
        }
      })
      .catch(err => console.log(err))
  })
}