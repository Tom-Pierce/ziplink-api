exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  req.session = null;
  res.sendStatus(200);
};

exports.user_info = (req, res, next) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } else {
    res.status(401).json({
      success: false,
    });
  }
};