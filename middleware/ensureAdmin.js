module.exports = function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
      return next();
  } else {
      res.status(403).send(`
          <p>Accès interdit. Redirection vers la page de login dans 5 secondes...</p>
          <script>
              setTimeout(function() {
                  window.location.href = '/login';
              }, 5000);
          </script>
      `);
  }
};
