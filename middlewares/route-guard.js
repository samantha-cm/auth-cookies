//Guardias de ruta
//isLoggedIn
//Si no cumples con una condicion hace un redirect hacia otra ruta

const isLoggedIn = (req, res, next) => {
  // SI NO ESTÁS LOGGEADO Y QUIERES ACCEDER A ESA ÁREA... ENTONCES:
  if (!req.session.currentUser) {
    return res.redirect("/auth/login");
  }

  next();
};

// isLoggedOut
// Se utiliza para bloquear las áreas de registro e iniciar sesión de usuarios ya loggeados.

const isLoggedOut = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect("/");
  }

  next();
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
