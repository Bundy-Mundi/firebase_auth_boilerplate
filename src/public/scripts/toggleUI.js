const loggedIn = document.querySelectorAll("._loggedIn");
const loggedOut = document.querySelectorAll("._loggedOut");

const toggleUI = (auth, display) => {
  if(auth === "loggedIn") {
    loggedIn.forEach(item => { item.style.display = display; });
    loggedOut.forEach(item => { item.style.display = "none"; });
  }else{
    loggedIn.forEach(item => { item.style.display = "none"; });
    loggedOut.forEach(item => { item.style.display = display; });
  }
};