function auth (req, res, next)  {
  if(req.body.user){
    if(req.body.user === null) {
      req.user = null;
    }
    else{
      const authorizedUser = {
        id: req.body.user.uid,
        email: req.body.user.email ? req.body.user.email : "",
        username: req.body.user.displayName ? req.body.user.displayName : "",
        photoURL: req.body.user.photoURL ? req.body.user.photoURL : "",
        emailVerified: req.body.user.emailVerified,
      }
      req.user = authorizedUser;
    }
    next();
  }

}

module.exports = auth;

