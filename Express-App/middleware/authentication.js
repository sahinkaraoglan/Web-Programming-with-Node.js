module.exports = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    //kullanıcının login olmadan önceki gitmek istediği sayfanın tutulduğu alan
    req.session.redirectTo = req.url;
    return res.redirect("/login");
  }
  next();
};
