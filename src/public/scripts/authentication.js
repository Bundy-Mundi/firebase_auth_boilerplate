auth.onAuthStateChanged(user => {
  if(user){
    toggleUI("loggedIn", "flex");
    console.log("User Logged In", { user });
  }else{
    toggleUI("", "flex");
    console.log("User Logged Out")
  }
});