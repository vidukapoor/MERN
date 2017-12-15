/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 * @Note : further this can be used as a authrization layer for each request
 * //todo: need to check the session storage at login
 */
function isLoggedIn(req, res, next) {
    console.log("req.auth", req.isAuthenticated())
    console.log("req.user", req.user)
    // if (req.isAuthenticated()) {
      return next();
    // }
    // return res.status(401).json({ success: false, message: 'You are not authenticated' });
  }
  
  module.exports = isLoggedIn;
  