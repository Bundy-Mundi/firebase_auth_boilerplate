const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
  function handleClick(e) {
    e.preventDefault();
    auth.signOut()
      .then(()=>{
        console.log("LOGGED OUT");
        location.href = "/";
      })
      .catch(err => {
        console.log(err)
      })
  }
  logoutBtn.addEventListener("click", e => handleClick(e))
}